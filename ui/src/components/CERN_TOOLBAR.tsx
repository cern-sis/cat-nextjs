import React from "react";
import { Layout, Typography, Menu } from "antd";
import styles from "../../styles/toolbar.module.css"
import cx from 'classnames';


const { Header } = Layout;
const { Title } = Typography;

function CERN_TOOLBAR() {
  const [current, setCurrent] = React.useState("icon");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Header className={styles["cern-toolbar"]} aria-label="CERN Toolbar">
      <Title>
        <Typography.Link href="//home.cern" title="CERN">
          CERN
          <span> Accelerating science</span>
        </Typography.Link>
      </Title>

      <Menu
        onClick={handleClick}
        mode="horizontal"
        defaultSelectedKeys={["footer"]}
      >
        <Menu.Item className={styles.signin} key="signin">
          <div className={cx(styles["item-list"], styles["item-list-length"])}>
            <Menu className={styles["toolbar-submenu"]}>
              <Menu.Item className={styles["directory"]} key="directory">
                <Typography.Link
                  href="//cern.ch/directory"
                  className={styles["cern-directory"]}
                  title="Search CERN resources and browse the directory"
                >
                  Directory
                </Typography.Link>
              </Menu.Item>

              <Menu.Item
                className={cx(styles.signin, styles["cern-account-links"])}
                key="cern-account-links"
              >
                <Typography.Link
                  href="/user/login"
                  className={
                    cx(
                      styles["cern-account"],
                      styles["cern-single-mobile-signin"]
                      )}
                >
                  Sign in
                </Typography.Link>
              </Menu.Item>
            </Menu>
          </div>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default CERN_TOOLBAR;
