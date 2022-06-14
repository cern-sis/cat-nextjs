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

import { getPhotos } from "../src/photos/carousel/photos";
import AT_HEADER from "../src/components/AT_HEADER";
import CERN_FOOTER from "../src/components/CERN_FOOTER";
import CERN_TOOLBAR from "../src/components/CERN_TOOLBAR";
import { PlayCircleOutlined } from "@ant-design/icons";
import { getApiRoot } from "../src/api/api_root";
import SUGGESTION_BOX from "../src/components/SUGGESTION_BOX";
import LOADING_ICON from "../src/components/LOADING_ICON";

const { Content } = Layout;
const { Title } = Typography;

function App() {
  // const photos = getPhotos();
  // const [lectures, setLectures] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchLectures = async () => {
  //   try {
  //     setLoading(true);
  //     const results = await getApiRoot().get(`/search/lectures/?page_size=12`);
  //     setLoading(false);
  //     setLectures(results.data.results);
  //   } catch (error) {
  //     setLectures([]);
  //   }
  // };

  // useEffect(() => {
  //   fetchLectures();
  // }, []);

  // if (typeof window !== 'undefined') {
  //   //here `window` is available
  //   window.scrollTo(0, 0);
  // }

  return (
    <>
      <div>test</div>
    </>
  );
}

export default App;
