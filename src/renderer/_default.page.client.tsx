export { render };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import "../../styles.css";
import ReactDOM from "react-dom/client";
import { Layout } from "./Layout";
import { getPageTitle } from "./getPageTitle";
import type { PageContextClient } from "./types";
import { Buffer } from "buffer";

let root: ReactDOM.Root;
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );
  const container = document.getElementById("react-root")!;
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
}
