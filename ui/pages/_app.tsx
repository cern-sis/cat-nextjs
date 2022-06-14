// import App from 'next/app'
import { Layout } from "antd";
import { AT_HEADER, CERN_FOOTER, CERN_TOOLBAR } from "../components";
import "../styles/index.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="layout">
      <CERN_TOOLBAR />
      <AT_HEADER />
      <Layout.Content style={{ marginTop: "45px" }}>
        <Component {...pageProps} />
      </Layout.Content>
      <CERN_FOOTER />
    </Layout>
  );
}

export default MyApp;
