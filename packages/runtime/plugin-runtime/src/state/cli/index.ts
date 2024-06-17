import { createRuntimeExportsUtils } from '@modern-js/utils';
import type { CliPlugin, AppTools } from '@modern-js/app-tools';

const PLUGIN_IDENTIFIER = 'state';

export const statePlugin = (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-state',

  required: ['@modern-js/runtime'],

  setup: api => {
    let pluginsExportsUtils: any;

    return {
      _internalRuntimePlugins({ entrypoint, plugins }) {
        plugins.push({
          name: PLUGIN_IDENTIFIER,
          implementation: '@modern-js/runtime/model',
          config: {},
        });
        return { entrypoint, plugins };
      },
      config() {
        const appContext = api.useAppContext();

        pluginsExportsUtils = createRuntimeExportsUtils(
          appContext.internalDirectory,
          'plugins',
        );

        return {
          source: {
            alias: {
              '@modern-js/runtime/plugins': pluginsExportsUtils.getPath(),
            },
          },
        };
      },
      addRuntimeExports() {
        pluginsExportsUtils.addExport(
          `export { default as state } from '@modern-js/runtime/model'`,
        );
      },
    };
  },
});

export default statePlugin;
