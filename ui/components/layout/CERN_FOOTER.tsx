import React from "react";
import { Layout, Row, Col, Typography, Menu } from "antd";

const { Footer } = Layout;
const { Title } = Typography;

function CERN_FOOTER() {
  return (
    <Footer id="cern-footer">
      <div className="footer">
        <Row className="row" justify="space-between" gutter={12}>
          <Col
            className="footer-first-col"
            key="footer-first-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <nav
              role="navigation"
              aria-labelledby="block-cernclean-footer-menu"
              id="block-cernclean-footer"
            >
              <Title
                level={2}
                className="visually-hidden"
                id="block-cernclean-footer-menu"
              >
                Footer menu
              </Title>

              <Menu className="menu nav">
                <Menu.Item>
                  <Typography.Text>CERN</Typography.Text>
                </Menu.Item>
              </Menu>
            </nav>
          </Col>

          <Col
            className="footer-second-col"
            key="footer-second-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <div className="mb-4">
              <div className="region-footercolumn2">
                <nav
                  role="navigation"
                  aria-labelledby="block-generalinfo-2-menu"
                  id="block-generalinfo-2"
                >
                  <Title level={2} id="block-generalinfo-2-menu">
                    General info
                  </Title>
                  <Menu className="menu nav">
                    <Menu.Item>
                      <Typography.Text>Privacy policy</Typography.Text>
                    </Menu.Item>
                    <Menu.Item>
                      <Typography.Text>
                        Copyright and terms of use{" "}
                      </Typography.Text>
                    </Menu.Item>
                  </Menu>
                </nav>
              </div>
            </div>
          </Col>

          <Col
            className="footer-third-col"
            key="footer-third-col"
            xs={24}
            sm={24}
            md={8}
            lg={6}
          >
            <div className="mb-4">
              <div className="region region-footercolumn3">
                <nav
                  role="navigation"
                  aria-labelledby="block-cernandyou-2-menu"
                  id="block-cernandyou-2"
                >
                  <Title level={2} id="block-cernandyou-2-menu">
                    Academic Training Committee
                  </Title>

                  <Menu className="menu nav">
                    <Menu.Item>About</Menu.Item>

                    <Menu.Item>
                      <Typography.Text>CERN Document Server</Typography.Text>
                    </Menu.Item>

                    <Menu.Item>
                      <Typography.Text>Events</Typography.Text>
                    </Menu.Item>

                    <Menu.Item>
                      <Typography.Text>Contact</Typography.Text>
                    </Menu.Item>
                  </Menu>
                </nav>
              </div>
            </div>
          </Col>

          <Col className="logo" key="logo" xs={24} sm={24} md={1} lg={6}>
            <Typography.Text>
              <img
                src="https://visit.cern/themes/custom/cernclean/logo.svg"
                alt="CERN"
              />
            </Typography.Text>
          </Col>
        </Row>
      </div>

      <div className="copy-wrapper light">
        <Typography.Text>Copyright</Typography.Text>
        &nbsp;&copy; 2022 CERN
      </div>
    </Footer>
  );
}

export default CERN_FOOTER;
