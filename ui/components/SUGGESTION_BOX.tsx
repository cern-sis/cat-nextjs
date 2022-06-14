import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function SUGGESTION_BOX() {
  return (
    <div className="suggestion reveal">
      <Typography.Link href="mailto:atc-contact@cern.ch" target="_blank">
        <Title className="hover-underline-animation">
          Submit a suggestion for future topics
        </Title>
      </Typography.Link>
    </div>
  );
}

export default SUGGESTION_BOX;
