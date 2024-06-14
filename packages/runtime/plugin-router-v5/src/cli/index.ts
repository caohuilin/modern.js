import {
  getEntryOptions,
  createRuntimeExportsUtils,
  isRouterV5 as isV5,
} from '@modern-js/utils';
import type { AppTools, CliPlugin } from '@modern-js/app-tools';
import './types';

const PLUGIN_IDENTIFIER = 'router';

export const routerPlugin = (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-router-v5',
  required: ['@modern-js/runtime'],
  setup: api => {
    const runtimeConfigMap = new Map<string, any>();

    let pluginsExportsUtils: any;
    let routerExportsUtils: any;

    return {
      config() {
        const appContext = api.useAppContext();
        pluginsExportsUtils = createRuntimeExportsUtils(
          appContext.internalDirectory,
          'plugins',
        );

        // .modern-js/.runtime-exports/router (legacy)
        routerExportsUtils = createRuntimeExportsUtils(
          appContext.internalDirectory,
          'router',
        );

        return {
          source: {
            alias: {
              '@modern-js/runtime/plugins': pluginsExportsUtils.getPath(),
              '@modern-js/runtime/router-v5': routerExportsUtils.getPath(),
            },
          },
        };
      },
      modifyEntryImports({ entrypoint, imports }) {
        const { entryName, isMainEntry } = entrypoint;
        const userConfig = api.useResolvedConfigContext();
        const { packageName } = api.useAppContext();

        const runtimeConfig = getEntryOptions(
          entryName,
          isMainEntry,
          userConfig.runtime,
          userConfig.runtimeByEntries,
          packageName,
        );

        runtimeConfigMap.set(entryName, runtimeConfig);

        if (isV5(userConfig)) {
          imports.push({
            value: '@modern-js/runtime/plugins',
            specifiers: [{ imported: PLUGIN_IDENTIFIER }],
          });
        } else {
          throw new Error(
            `should enable runtime.router.mode for entry ${entryName}`,
          );
        }

        return {
          entrypoint,
          imports,
        };
      },
      addRuntimeExports() {
        const userConfig = api.useResolvedConfigContext();
        if (isV5(userConfig)) {
          pluginsExportsUtils.addExport(
            `export { default as router } from '@modern-js/plugin-router-v5/runtime'`,
          );
          routerExportsUtils?.addExport(
            `export * from '@modern-js/plugin-router-v5/runtime'`,
          );
        }
      },
    };
  },
});

export default routerPlugin;
