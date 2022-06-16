import React from "react";

import { Layout, Card, Row, Col, Avatar, Divider } from "antd";

import { getMembers } from "../../src/photos/members/members";
import { getPhotos } from "../../src/photos/carousel/photos";
import { CERN_FOOTER, CERN_TOOLBAR } from "../../components";

const { Content } = Layout;
const { Meta } = Card;
const photos = getPhotos();

function AboutUs() {
  return (
    <Layout>
      <CERN_TOOLBAR />
      <Content className="bg-white py-10">
        <Row justify="center">
          <div className="flex justify-center items-center w-1/2 py-2 px-2 typewriter">
            <h1 className="inline-block auto-cols-max text-6xl">ABOUT US</h1>
          </div>
          <Col span={12}>
            <p className="font-mono text-left text-slate-600 py-4 px-4">
              The CERN Academic Training lectures cover physics and technology
              research results, as well as leading-edge news from other
              disciplines. Past lectures often present a great historical value.
              The lectures are open to all members of CERN personnel (staff,
              fellows, associates, students, users, project associates and
              apprentices) free of charge. Each lecture is recorded and
              published on the web along with the visual support material. The
              complete catalogue of the Academic Training Programme lectures is
              archived since 1968.
            </p>
          </Col>
        </Row>
        <Row justify="center"></Row>
        <Divider />
        <Row>
          <Col span={24}>
            <p className=" text-2xl justify-center items-center flex">
              MEMBERS
            </p>
          </Col>
        </Row>
        <Row gutter={[16, 24]} className="py-8 px-2 changing-background ">
          {getMembers().map((memeber, index) => (
            <Col
              className="gutter-row text-center justify-items-center w-auto "
              span={8}
            >
              <Card cover={<img src={photos[index].src} />}>
                <Meta
                  title={memeber.name}
                  avatar={<Avatar src={memeber.profile} />}
                  description={memeber.position}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <CERN_FOOTER />
    </Layout>
  );
}

export default AboutUs;
