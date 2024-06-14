import {
  createRuntimeExportsUtils,
  isRouterV5 as isV5,
} from '@modern-js/utils';
import type { AppTools, CliPlugin } from '@modern-js/app-tools';
import './types';

export const routerPlugin = (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-router-v5',
  required: ['@modern-js/runtime'],
  setup: api => {
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
