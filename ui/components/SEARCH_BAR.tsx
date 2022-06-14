import React, { useState } from "react";
import { Input, Button, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

function SEARCH_BAR() {
  const router = useRouter();

  let [searchTerm, setSearchTerm] = useState("");

  const onKeyDown = (ev: any) => {
    const searchValue = ev.target.value;
    if (searchValue) {
      setSearchTerm(ev.target.value);
      router.push(`/search?search=${ev.target.value}&page=1`);
    } else {
      router.push("/search");
    }
  };

  return (
    <Menu className="search">
      <Menu.Item className="search-box" key="input">
        <Input
          className="search-input"
          bordered={false}
          placeholder="Search a lecture..."
          onPressEnter={onKeyDown}
          defaultValue={""}
        />
      </Menu.Item>
      <Menu.Item className="search-icon" key="icon">
        <Button
          className="search-button"
          type="primary"
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          defaultValue={""}
          onClick={onKeyDown}
        >
          <SearchOutlined style={{ color: "white", fontSize: "200%" }} />
        </Button>
      </Menu.Item>
    </Menu>
  );
}

export default SEARCH_BAR;
