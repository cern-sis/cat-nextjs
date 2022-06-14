import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Pagination, List, Typography, Row, Col, Empty } from "antd";
import { FileFilled } from "@ant-design/icons";

import { LOADING_ICON } from "../../components";
import Link from "next/link";

const { Content } = Layout;
const { Title } = Typography;

const PAGE_SIZE = 10;

const Search = ({ lectures, total, searchValue }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  let loading = false;
  console.log(lectures);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  const onPageSizeChage = (current: number, size: number) => {
    setPageSize(size);
  };

  return (
    <>
      <Content id="atc-content">
        <div className="search">
          <div className="container">
            <div className="container-content">
              <Row justify="space-between">
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Title>
                    Search results: {searchValue ? `"${searchValue}"` : null}{" "}
                  </Title>
                </Col>

                <Col xs={24} sm={12} md={12} lg={12}>
                  <Title level={5}>({total} results)</Title>
                </Col>
              </Row>

              <Row justify="space-between" gutter={[12, 1]}>
                {loading ? (
                  <LOADING_ICON />
                ) : !lectures.length ? (
                  <Col span={24} className="no-results">
                    <Empty className="empty" description="No results found" />{" "}
                    <Title level={4}>Not what you are looking for?</Title>
                    <div className="suggestion">
                      <Typography.Link
                        href="mailto:atc-contact@cern.ch"
                        target="_blank"
                      >
                        <Title className="hover-underline-animation">
                          Submit a suggestion for future topics
                        </Title>
                      </Typography.Link>
                    </div>
                  </Col>
                ) : (
                  lectures.map((lecture: any) => {
                    return (
                      <List key={lecture.lecture_id}>
                        <Link href={`/lectures/${lecture.lecture_id}/`}>
                          <div className="video-content">
                            <Col>
                              {lecture.thumbnail_picture && (
                                <div className="list-thumbnail">
                                  <img
                                    alt="thumbnail"
                                    src={lecture.thumbnail_picture}
                                  />
                                </div>
                              )}
                              {!lecture.thumbnail_picture && (
                                <div className="list-thumbnail">
                                  <div className="blank-thumbnail">
                                    <FileFilled
                                      style={{
                                        fontSize: "350%",
                                        opacity: "0.6",
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                            </Col>

                            <Col className="list-content">
                              <Title level={4}>{lecture.speaker}</Title>
                              <Title level={2}>{lecture.title}</Title>
                              <Title level={3}>{lecture.date}</Title>
                            </Col>
                          </div>
                        </Link>
                      </List>
                    );
                  })
                )}
                <Outlet />
              </Row>

              <Row justify="end">
                <Col>
                  <Pagination
                    current={currentPage}
                    showSizeChanger
                    pageSize={pageSize}
                    total={total}
                    onChange={onChange}
                    onShowSizeChange={onPageSizeChage}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {
  const searchValue = context.query["search"];
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:8000/api/v1/search/lectures?search=${searchValue}`
  );
  const { results, count } = await res.json();

  // Pass data to the page via props
  return {
    props: { lectures: results, total: count, searchValue: searchValue },
  };
}

export default Search;
