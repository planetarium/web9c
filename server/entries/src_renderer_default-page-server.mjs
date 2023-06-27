import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { boot } from "@planetarium/lib9c-wasm";
import React__default, { useState, useEffect } from "react";
import { ChakraProvider, Center } from "@chakra-ui/react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { l as logoUrl } from "../chunks/chunk-44355a5e.js";
const Context = React__default.createContext(
  void 0
);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
const Spinner = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "inline-block w-96 rounded-full", role: "status", children: [
    /* @__PURE__ */ jsx("p", { className: "font-semibold text-center text-2xl", children: "Web9c" }),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 1000",
        className: "-inline-block rounded-full",
        children: [
          /* @__PURE__ */ jsxs("g", { className: "animate-spinner5", children: [
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "479", fill: "#fff" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "#ff2500",
                d: "M500.63 20c239.42 0 438.11 175.86 473.98 405.4.04.26-97.97.1-98.22 0-.5-.22.88 150.92.95 150.94.07.03 97.11-.76 96.99 0C937.73 805.03 739.44 980 500.63 980 235.85 980 20.88 764.93 20.88 500c0-264.92 214.97-480 479.75-480"
              }
            ),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "385", fill: "#fff" })
          ] }),
          /* @__PURE__ */ jsxs("g", { className: "animate-spinner4", children: [
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "375", fill: "#222" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "#fff",
                d: "M777.77 442.35h98.06s10.2 32.67 10.2 57.67-10.2 59.01-10.2 59.01h-91.95l-6.1-116.68Z"
              }
            ),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "295", fill: "#fff" })
          ] }),
          /* @__PURE__ */ jsxs("g", { className: "animate-spinner3", children: [
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "275", fill: "#ff6500" }),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "210", fill: "#fff" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "#fff",
                d: "M615 457.12h157.18s7.67 24.28 7.67 42.87c0 18.58-7.67 43.87-7.67 43.87H616.39l-9.43-86.74Z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("g", { className: "animate-spinner2", children: [
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "185", fill: "#444" }),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "145", fill: "#fff" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "#fff",
                d: "M580 472.2h103.81s5.07 15.75 5.07 27.8c0 12.06-5.07 28.45-5.07 28.45h-97.58l-6.23-56.25Z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("g", { className: "animate-spinner1", children: [
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "100", fill: "orange" }),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "500", r: "64", fill: "#fff" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "#fff",
                d: "M540.73 484.54h58.3s1.32 8.76 1.32 15.46c0 6.7-1.18 15.82-1.18 15.82H544.2l-3.47-31.28Z"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "font-semibold text-center text-xl", children: "Booting WASM." })
  ] }) });
};
const styles = "";
function Layout({
  children,
  pageContext
}) {
  const [booted, setBooted] = useState(false);
  useEffect(() => {
    (async () => {
      await boot();
      setBooted(true);
    })();
  }, []);
  return /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(ChakraProvider, { children: booted ? /* @__PURE__ */ jsx(Center, { h: "100vh", children }) : /* @__PURE__ */ jsx(Spinner, {}) }) }) });
}
function getPageTitle(pageContext) {
  const title = (
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title || // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title || "Web9c"
  );
  return title;
}
const passToClient = ["pageProps", "urlPathname", "documentProps"];
function render(pageContext) {
  let pageHtml;
  if (!pageContext.Page) {
    pageHtml = "";
  } else {
    const { Page, pageProps } = pageContext;
    pageHtml = ReactDOMServer.renderToString(
      /* @__PURE__ */ jsx(Layout, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
    );
  }
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
export {
  passToClient,
  render
};
