import { Typography } from "antd";
import "./LOADING_ICON.module.css";

const { Title } = Typography;

function LOADING_ICON() {
  return (
    <div id="loading-icon">
      <div className="atom">
        <div className="electron" />
        <div className="electron" />
        <div className="electron" />
      </div>
      <Title>Loading...</Title>
    </div>
  );
}

export default LOADING_ICON;
