import "../styles/index.css";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import { Layout } from "antd";
import { AT_HEADER, CERN_FOOTER, CERN_TOOLBAR } from "../components";
import styles from "../styles/index.module.css";
import About from "../pages/about";

function MyApp({ Component, pageProps }) {
  if (About === Component) {
    return <Component {...pageProps} />;
  }
  return (
    <ConfigProvider>
      <Layout className={styles.layout}>
        <CERN_TOOLBAR />
        <AT_HEADER />
        <Layout.Content style={{ marginTop: "45px" }}>
          <Component {...pageProps} />
        </Layout.Content>
        <CERN_FOOTER />
      </Layout>
    </ConfigProvider>
  );
}
export default MyApp;
