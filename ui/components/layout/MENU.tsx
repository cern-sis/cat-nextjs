import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Typography, Menu } from "antd";
import "./AT_HEADER.module.css";

const { Title } = Typography;

function MENU() {
  const [current, setCurrent] = useState("icon");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      className="menu"
      overflowedIndicator={false}
    >
      <Menu.Item className="about-us" key="about-us">
        <Title level={2} className="about-us-link">
          About
        </Title>
      </Menu.Item>

      <Menu.Item className="events" key="events">
        <Typography.Text>
          <Title level={2} className="events-link">
            Events
          </Title>
        </Typography.Text>
      </Menu.Item>

      <Menu.Item className="contact-us" key="contact-us">
        <Typography.Text>
          <Title level={2} className="contact-us-link">
            Contact
          </Title>
        </Typography.Text>
      </Menu.Item>
    </Menu>
  );
}

export default MENU;
