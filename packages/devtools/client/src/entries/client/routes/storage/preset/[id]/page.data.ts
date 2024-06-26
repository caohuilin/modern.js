import { LoaderFunctionArgs, redirect } from '@modern-js/runtime/router';
import _ from 'lodash';
import { $serverExported } from '../../../state';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) throw new TypeError('storage preset id is required');
  const { context } = await Promise.resolve($serverExported);
  const { storagePresets } = await Promise.resolve(context);
  const preset = _.find(storagePresets, { id });
  if (preset) {
    return preset;
  } else {
    return redirect('/storage/preset');
  }
};
