import path from 'path';
import type { CliPlugin, AppTools } from '@modern-js/app-tools-v2';
import type { Entrypoint, Route, ServerRoute } from '@modern-js/types';
import { hasNestedRoutes, isRouteEntry } from './route';
import { generatorRegisterCode, generatorRouteCode } from './code';
import * as templates from './template';
import { walk } from './nestedRoutes';
import { NESTED_ROUTES_DIR } from './constants';

export const routerPlugin = (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-router',
  required: ['@modern-js/runtime'],
  setup: api => {
    const { internalDirectory, internalSrcAlias, srcDirectory } =
      api.useAppContext();
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _internal_runtimePlugins({ entryName, plugins }) {
        const { serverRoutes } = api.useAppContext();
        const serverBase = serverRoutes
          .filter((route: ServerRoute) => route.entryName === entryName)
          .map(route => route.urlPath)
          .sort((a, b) => (a.length - b.length > 0 ? -1 : 1));

        plugins.push({
          name: 'router',
          implementation: '@modern-js/runtime-v2/router',
          config: { serverBase },
        });
        return { entryName, plugins };
      },

      checkEntryPoint({ path, entry }) {
        return { path, entry: entry || isRouteEntry(path) };
      },
      config() {
        return {
          source: {
            include: [
              // react-router v6 is no longer support ie 11
              // so we need to compile these packages to ensure the compatibility
              // https://github.com/remix-run/react-router/commit/f6df0697e1b2064a2b3a12e8b39577326fdd945b
              /node_modules\/react-router/,
              /node_modules\/react-router-dom/,
              /node_modules\/@remix-run\/router/,
            ],
          },
        };
      },
      async beforeCreateCompiler() {
        const { metaName, entrypoints } = api.useAppContext();
        entrypoints.forEach(entrypoint => {
          if (entrypoint.nestedRoutesEntry) {
            generatorRegisterCode(
              internalDirectory,
              entrypoint.entryName,
              templates.runtimeGlobalContext({
                metaName,
              }),
            );
          }
        });
      },
      async modifyEntrypoints({ entrypoints }: { entrypoints: Entrypoint[] }) {
        // nest route
        const hookRunners = api.useHookRunners();
        const config = api.useConfigContext();
        await Promise.all(
          entrypoints.map(async entrypoint => {
            const { isAutoMount } = entrypoint;
            if (isAutoMount) {
              const isHasNestedRoutes = hasNestedRoutes(
                entrypoint.absoluteEntryDir!,
              );
              if (isHasNestedRoutes) {
                entrypoint.nestedRoutesEntry = path.join(
                  entrypoint.absoluteEntryDir!,
                  NESTED_ROUTES_DIR,
                );
                const initialRoutes: Route[] = [];
                let nestedRoutes = await walk(
                  entrypoint.nestedRoutesEntry,
                  entrypoint.nestedRoutesEntry,
                  {
                    name: internalSrcAlias,
                    basename: srcDirectory,
                  },
                  entrypoint.entryName,
                  entrypoint.isMainEntry,
                );
                if (nestedRoutes) {
                  if (!Array.isArray(nestedRoutes)) {
                    nestedRoutes = [nestedRoutes];
                  }
                  for (const route of nestedRoutes) {
                    initialRoutes.unshift(route);
                  }
                }

                const { routes } = await hookRunners.modifyFileSystemRoutes({
                  entrypoint,
                  routes: initialRoutes as any,
                });
                const { code } = await hookRunners.beforeGenerateRoutes({
                  entrypoint,
                  code: await templates.fileSystemRoutes({
                    routes,
                    // ssrMode: useSSG ? 'string' : mode,
                    nestedRoutesEntry: entrypoint.nestedRoutesEntry,
                    entryName: entrypoint.entryName,
                    internalDirectory,
                    splitRouteChunks: config?.output?.splitRouteChunks,
                  }),
                });
                generatorRouteCode(
                  internalDirectory,
                  entrypoint.entryName,
                  code,
                );
              }
            }
            return entrypoint;
          }),
        );
        return { entrypoints };
      },
    };
  },
});

export default routerPlugin;
