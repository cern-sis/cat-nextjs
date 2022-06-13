import { Layout as AntLayout } from "antd";

import AT_HEADER from "./AT_HEADER";
import CERN_FOOTER from "./CERN_FOOTER";
import CERN_TOOLBAR from "./CERN_TOOLBAR";

const Layout = ({ children }) => {
  return (
    <>
      <AntLayout className="layout">
        <CERN_TOOLBAR />
        <AT_HEADER />
        {children}
        <CERN_FOOTER />
      </AntLayout>
    </>
  );
};

export default Layout;
