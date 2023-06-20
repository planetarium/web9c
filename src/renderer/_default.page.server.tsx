export { render };
export const passToClient = ["pageProps", "urlPathname", "documentProps"];

import ReactDOMServer from "react-dom/server";
import { Layout } from "./Layout";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { getPageTitle } from "./getPageTitle";
import logoUrl from "../assets/web9c.svg";
import type { PageContext } from "./types";

function render(pageContext: PageContext) {
  let pageHtml;
  if (!pageContext.Page) {
    // SPA
    pageHtml = "";
  } else {
    // SSR / HTML-only
    const { Page, pageProps } = pageContext;
    pageHtml = ReactDOMServer.renderToString(
      <Layout pageContext={pageContext}>
        <Page {...pageProps} />
      </Layout>
    );
  }

  // See https://vite-plugin-ssr.com/head
  const title = getPageTitle(pageContext);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      as="style"
      crossorigin
      href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.6/variable/pretendardvariable-dynamic-subset.css"
    />
    <title>${title}</title>
  </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
