import type { PluginHookTap } from '../hooks';
import type { DeepPartial } from '../utils';
import type { RuntimeContext } from './context';
import type {
  ModifyRuntimeConfigFn,
  OnBeforeRenderFn,
  PickContextFn,
  WrapRootFn,
} from './hooks';
import type { RuntimePluginExtends } from './plugin';

export type RuntimePluginAPI<Extends extends RuntimePluginExtends> = Readonly<{
  getRuntimeContext: () => Readonly<
    RuntimeContext<Extends> & Extends['extendContext']
  >;
  updateRuntimeContext: (
    updateContext: DeepPartial<RuntimeContext<Extends>>,
  ) => void;
  getRuntimeConfig: () => Readonly<Extends['config']>;
  onBeforeRender: PluginHookTap<OnBeforeRenderFn<Extends['extendContext']>>;
  wrapRoot: PluginHookTap<WrapRootFn>;
  pickContext: PluginHookTap<PickContextFn<RuntimeContext<Extends>>>;
  modifyRuntimeConfig: PluginHookTap<ModifyRuntimeConfigFn<Extends['config']>>;
}>;
