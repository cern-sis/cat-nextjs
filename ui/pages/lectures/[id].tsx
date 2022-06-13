import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { List, Layout, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { getApiRoot } from "../../src/api/api_root";
import LOADING_ICON from "../../src/components/LOADING_ICON";

const { Content } = Layout;
const { Title } = Typography;

const Lecture = () => {
  const router = useRouter();
  const { id } = router.query;
  const [lecture, setLecture] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const fetchLecture = async () => {
    try {
      setLoading(true);
      const results = await getApiRoot().get(`/lectures/${id}/`);
      setLoading(false);
      setLecture(results.data);
    } catch (error) {
      setLecture({});
    }
  };

  useEffect(() => {
    fetchLecture();
  }, [id]);

  return (
    <Content className="atc-content lecture-page">
      {loading ? (
        <LOADING_ICON />
      ) : (
        <div className="video-box">
          {lecture.type && lecture.type.includes("video") && (
            <div className="video-window">
              <iframe
                title={lecture.title}
                src={`https://cds.cern.ch/video/${id}?showTitle=true`}
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
            <p
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
