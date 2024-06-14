import { getInitialContext } from '../context/runtime';
import { getGlobalRunner } from '../plugin/runner';

const IS_REACT18 = process.env.IS_REACT18 === 'true';

export async function render(
  App: React.ReactElement,
  id?: HTMLElement | string,
) {
  const runner = getGlobalRunner();
  const initialData = await runner.init(
    { context: getInitialContext(runner) },
    {
      onLast: ({ context }) => {
        console.log('init context', context);
        return {};
      },
    },
  );
  console.log('initialData', initialData);

  const rootElement =
    id && typeof id !== 'string' ? id : document.getElementById(id || 'root')!;
  const renderFunc = IS_REACT18 ? renderWithReact18 : renderWithReact17;
  return renderFunc(App, rootElement);
}

async function renderWithReact18(
  App: React.ReactElement,
  rootElement: HTMLElement,
) {
  const ReactDOM = await import('react-dom/client');
  const root = ReactDOM.createRoot(rootElement);
  root.render(App);
  return root;
}

async function renderWithReact17(
  App: React.ReactElement,
  rootElement: HTMLElement,
) {
  const ReactDOM = await import('react-dom');
  ReactDOM.render(App, rootElement);
  return rootElement;
}
