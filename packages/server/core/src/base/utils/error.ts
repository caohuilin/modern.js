import type { Logger } from '@modern-js/types';

const ERROR_PAGE_TEXT: Record<number, string> = {
  404: 'This page could not be found.',
  500: 'Internal Server Error.',
};

export const createErrorHtml = (status: number) => {
  const text = ERROR_PAGE_TEXT[status] || '';
  const title = `${status}: ${text}`;
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>${title}</title>
    <style>
      html,body {
        margin: 0;
      }

      .page-container {
        color: #000;
        background: #fff;
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="page-container">
    <h1>${status}</h1>
    <div>${text}</div>
  </body>
  </html>
  `;
};

export enum ErrorDigest {
  ENOTF = 'Page could not be found',
  EINTER = 'Internal server error',
  ERENDER = 'SSR render failed',
  // INIT: 'Server init error',
  // WARMUP: 'SSR warmup failed',
  // EMICROINJ: 'Get micro-frontend info failed',
}

export function onError(
  logger: Logger,
  digest: ErrorDigest,
  error: Error | string,
  req?: Request,
) {
  const headers = req?.headers;
  headers?.delete('cookie');

  logger.error(
    req
      ? `Server Error - ${digest}, error = %s, req.url = %s, req.headers = %o`
      : `Server Error - ${digest}, error = %s`,
    error instanceof Error ? error.stack || error.message : error,
    req?.url,
    headers,
  );
}
