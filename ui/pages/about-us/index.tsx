import React, {Fragment} from 'react';
import { Layout, Carousel, Typography, Row, Card, Col, Space, Divider, Avatar } from 'antd';
import { getMembers } from "../../src/photos/members/members";
import { getPhotos } from "../../src/photos/carousel/photos";
import { getReveal } from "../../src/events/reveal";


interface IAppProps {
}

const {Content}= Layout

const App: React.FunctionComponent<IAppProps> = (props) => {
  const members = getMembers();
  const photos = getPhotos();
  const style = { display: "flex", alignItems: "center", padding: "10px" };

  getReveal();

  return (
    <Content id="about-us-content">
        <Fragment>
          <div className="carousel-container">
            <div className="photo-carousel" data-preload>
              <Carousel autoplay dots={false}>
                {photos.map((photo) => {
                  return (
                    <div key={photo.src} className="container-fluid">
                      <div className="content">
                        <img alt={photo.alt} src={photo.src} />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </Fragment>

        <Fragment>
          <div className="content-lists">
            <div className="responsive">
              <div className="frame">
                <div id="atc-logo">
                  <img
                    src="../academicTrainingLogo.png"
                    alt="Academic Training Logo"
                  />
                </div>
                <Typography.Title>
                  <Typography.Link href="/about-us" style={{ color: "#fff" }}>
                    ABOUT US
                  </Typography.Link>
                </Typography.Title>
              </div>
            </div>
            <div className="atc-title reveal">
              <Typography.Title level={2} style={{color:"#fff"}}>ACADEMIC TRAINING COMMITTEE</Typography.Title>
              <Divider className="divider" />
            </div>
            <div className="our-mission reveal">
              <Typography.Title level={4} style={{color:"#fff"}}>
                The CERN Academic Training lectures cover physics and technology
                research results, as well as leading-edge news from other
                disciplines. Past lectures often present a great historical
                value. The lectures are open to all members of CERN personnel
                (staff, fellows, associates, students, users, project associates
                and apprentices) free of charge. Each lecture is recorded and
                published on the web along with the visual support material. The
                complete catalogue of the Academic Training Programme lectures
                is archived since 1968.
              </Typography.Title>
            </div>{" "}
            <div className="atc-title reveal">
              <Typography.Title level={2} style={{color:"#fff"}}>Members</Typography.Title>
              <Divider className="divider" />
            </div>
            <Row
              className="reveal"
              style={style}
              justify="center"
              gutter={[16, 52]}
            >
              {members.slice(0, 1).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Urs_Wiedemann.jpg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(1, 2).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={12}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Maria_Dimou.png")
                                  .default
                              }
                            />
                            <Typography.Title level={2} >{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(2, 3).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={12}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Marika_Flygar.jpg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>{" "}
            <div className="atc-title reveal">
              <Typography.Title level={3} style={{color:"#fff"}}>Departments</Typography.Title>
              <Divider className="divider" />
            </div>
            <Row
              className="reveal"
              style={style}
              justify="center"
              gutter={[16, 52]}
            >
              {members.slice(3, 4).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/AndreDavid.JPG")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(4, 5).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/MassimoGiovanozzi.png")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(5, 6).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Maria-Arsuaga-Rios.png")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(6, 7).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Bertrand_Nicquevert.jpeg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(7, 8).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Valeria_Perez_Reale.png")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(8, 9).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={8}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Antonio_Perillo_Marcone.jpeg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>{" "}
            <div className="atc-title reveal">
              <Typography.Title level={3} style={{color:"#fff"}}>Users</Typography.Title>
              <Divider className="divider" />
            </div>
            <Row className="reveal" style={style} justify="center" gutter={16}>
              {members.slice(9, 10).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={24}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Evangelia_Dimovasili.jpeg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>{" "}
            <div className="atc-title reveal">
              <Typography.Title level={3} style={{color:"#fff"}}>Staff Association</Typography.Title>
              <Divider className="divider" />
            </div>
            <Row className="reveal" style={style} justify="center" gutter={16}>
              {members.slice(10, 11).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={24}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Lynda-Meichtry.jpg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>{" "}
            <div className="atc-title reveal">
              <Typography.Title level={3} style={{color:"#fff"}}>Observers</Typography.Title>
              <Divider className="divider" />
            </div>
            <Row
              className="reveal"
              style={style}
              justify="center"
              gutter={[16, 52]}
            >
              {members.slice(11, 12).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Maria_Fiascaris.jpeg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(12, 13).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Martijn_Mulders.jpg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(13, 14).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Sebastian_Lopienski.jpeg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
              {members.slice(14, 15).map((member: any) => {
                return (
                  <Space>
                    <Col key={member.key} span={6}>
                      <Card hoverable className="member-card" style={{
                          top: "35px",
                          background: "linear-gradient(160deg, #0094e9d7 0, #0033a0 40%, #0b1117 100%) no-repeat padding-box",
                          alignItems: "center",
                          borderRadius: "30px",
                          width: "310px",
                          paddingBottom: "40px",
                          transition:"all 0.5s"
                      }}>
                        <Card.Grid className="grid-style">
                          <div className="member-content">
                            <Typography.Title level={3}>{member.department}</Typography.Title>
                            <Avatar
                              size={120}
                              src={
                                require("../../src/photos/members/profiles/Frank_Tecker.jpg")
                                  .default
                              }
                            />
                            <Typography.Title level={2}>{member.name}</Typography.Title>
                            <p>{member.position}</p>
                          </div>
                        </Card.Grid>
                      </Card>
                    </Col>
                  </Space>
                );
              })}
            </Row>
          </div>
        </Fragment>
    </Content>

  );
};

export default App;
