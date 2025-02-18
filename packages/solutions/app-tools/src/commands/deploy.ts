import type { CLIPluginAPI } from '@modern-js/plugin-v2';
import type { AppTools } from '../types';
import { getServerPlugins } from '../utils/loadPlugins';

export const deploy = async (
  api: CLIPluginAPI<AppTools<'shared'>>,
  options: any,
) => {
  const hooks = api.getHooks();

  const { metaName } = api.getAppContext();

  // deploy command need get all plugins
  await getServerPlugins(api, metaName);

  await hooks.onBeforeDeploy.call(options);
  await hooks.deploy.call();
  await hooks.onAfterDeploy.call(options);
};
