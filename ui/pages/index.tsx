import React, { Fragment, useEffect, useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Carousel,
  Typography,
  Divider,
  Spin,
} from "antd";
import Link from "next/link"
import { getPhotos } from "../src/photos/carousel/photos";
import { PlayCircleOutlined } from "@ant-design/icons";
import { getApiRoot } from "../src/api/api_root";
import styles from "../styles/index.module.css"


const { Content } = Layout;
const { Title } = Typography;

function App({results}) {
  const photos = getPhotos();

  if (typeof window !== 'undefined') {
    //here `window` is available
    window.scrollTo(0, 0);
  }

  return (
    <Content className={styles["atc-content"]}>
    <Fragment>
      <div className={styles["carousel-container"]}>
        <div className={styles["photo-carousel"]} data-preload>
          <Carousel autoplay dots={false}>
            {photos.map((photo) => {
              return (
                <div key={photo.src} className={styles["container-fluid"]}>
                  <div className={styles.content}>
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
        <div className={styles["content-lists"]}>
          <div className={styles.responsive}>
            <div className={styles.frame}>
              {/* <div id="atc-logo">
                <img
                  src="academicTrainingLogo.png"
                  alt="Academic Training Logo"
                />
              </div> */}
              <Title>
                <Typography.Link href="/" style={{ color: "#fff" }}>
                  ACADEMIC TRAINING{" "}
                </Typography.Link>
              </Title>
            </div>
          </div>
          <div className={styles.recent}>
            <Title level={2}>MOST RECENT</Title>
            <Divider className={styles.divider} />
          </div>
          .{" "}
          <Row justify="center" gutter={[16, 42]}>
            {results.map((lecture: any) => {
                return (
                  <Col
                    key={lecture.lecture_id}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <nav>
                      <Link
                        href={`/lectures/${lecture.lecture_id}`}
                        key={lecture.lecture_id}
                      >
                        <Card
                          hoverable
                          className={styles["video-card"]}
                          cover={
                            <img
                            className={styles.img}
                              alt="thumbnail"
                              src={lecture.thumbnail_picture}
                            />
                          }
                        >
                          <div className={styles.play}>
                            <PlayCircleOutlined />
                          </div>

                          <div className={styles.duration}>
                            <Title level={5}>
                              {lecture.imprint.split(" - ")[1]}
                            </Title>
                          </div>

                          <Card.Grid
                            className={styles["card-content"]}
                            hoverable={false}
                          >
                            <div className={styles["video-content"]}>
                              <Title level={4} >{lecture.speaker}</Title>
                            </div>
                            <div className={styles["video-content"]}>
                              <Title level={2}>{lecture.title}</Title>
                            </div>
                            <div className={styles["video-content"]}>
                              <Title level={3}>
                                Posted on <strong>{lecture.date}</strong>
                              </Title>
                            </div>
                          </Card.Grid>
                        </Card>
                      </Link>
                    </nav>
                  </Col>
                );
              })
            }
          </Row>
        </div>
      </Fragment>
  </Content>
  );
}

export const getStaticProps = async () => {
  let results
  try {
     results = await getApiRoot().get(`/search/lectures/?page_size=12`);
    } catch(e){
      return {
        notFound: true
      }
    }
    return {
      props:{
        results: results.data.results
      }
    }
}

export default App;
