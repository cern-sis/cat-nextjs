import React, { useState } from "react";
import { Typography, Menu } from "antd";
import Link from "next/link";

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
      <Menu.Item className="about" key="about-us">
        <Link href={`/about`}>
          <Title level={2} className="about-us-link">
            About
          </Title>
        </Link>
      </Menu.Item>

      <Menu.Item className="events" key="events">
        <Link href="https://indico.cern.ch/category/72/">
          <Title level={2} className="events-link">
            Events
          </Title>
        </Link>
      </Menu.Item>

      <Menu.Item className="contact-us" key="contact-us">
        <Link href="mailto:atc-contact@cern.ch" target="_blank">
          <Title level={2} className="contact-us-link">
            Contact
          </Title>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default MENU;
