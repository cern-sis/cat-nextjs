import React from "react";
import { useRouter } from "next/router";
import { Outlet } from "react-router-dom";

import { List, Layout, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { getApiRoot } from "../../src/api/api_root";
import LOADING_ICON from "../../src/components/LOADING_ICON";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;

const Lecture = (props) => {
  const { lecture } = props;
  return (
    <Content className="atc-content lecture-page">
      {lecture == null ? (
        <LOADING_ICON />
      ) : (
        <div className="video-box">
          {lecture.type && lecture.type.includes("video") && (
            <div className="video-window">
              <iframe
                title={lecture.title}
                src={`https://cds.cern.ch/video/${lecture.id}?showTitle=true`}
                allowFullScreen
              />
            </div>
          )}
          <div className="lecture-details">
            <Title level={3}>{lecture.speaker}</Title>
            <Title>{lecture.title}</Title>
            <div className="details">
              {lecture.date && lecture.date !== "" && (
                <Title level={4} id="date">
                  {lecture.date}
                </Title>
              )}
              {lecture.event_details && lecture.event_details !== "" && (
                <a href={lecture.event_details} id="event">
                  Event details (Indico)
                </a>
              )}
              {lecture.sponsor && lecture.sponsor !== "" && (
                <Title level={4} id="sponsor">
                  Sponsored by <strong>{lecture.sponsor}</strong>
                </Title>
              )}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: lecture.abstract,
              }}
            />
            <Outlet />

            {lecture.files && lecture.files.length > 0 && (
              <div className="files">
                <div className="download-title">
                  <DownloadOutlined
                    style={{
                      color: "#fff",
                      fontSize: "250%",
                    }}
                  />
                  <Title level={2}>Download files:</Title>
                </div>

                <List
                  itemLayout="horizontal"
                  dataSource={lecture.files || []}
                  split={false}
                  renderItem={(item: string, index) => {
                    return (
                      <List.Item key={index}>
                        {index + 1}.{" "}
                        <a
                          title={item}
                          rel="noreferrer"
                          target="_blank"
                          href={item}
                        >
                          {filenameFromUrl(item)}
                        </a>
                      </List.Item>
                    );
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </Content>
  );
};

export default Lecture;

export async function getStaticProps(context) {
  let lectures;
  try {
    lectures = await axios.get(
      `http://localhost:3000/api/lectures/${context.params.id}/`
    );
  } catch (e) {
    return { notFound: true };
  }

  return {
    props: {
      lecture: lectures.data,
    },
    revalidate: 10,
  };
}

export const getStaticPaths = async () => {
  try {
    const response = await getApiRoot().get(`/lectures`);
    const results = response.data.results;
    const paths = results.map((result) => ({
      params: { id: `${result.id}` },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return { notFound: true };
  }
};
