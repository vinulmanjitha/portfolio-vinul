import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: <a href="#aboutMe">About Me</a>,
    key: "aboutMe",
  },
  {
    label: <a href="#skills">Skills</a>,
    key: "skills",
  },
  {
    label: <a href="#experience">Experience </a>,
    key: "experience",
  },
  {
    label: <a href="#contact">Contact </a>,
    key: "contact",
  }
];

const NavbarComponent = () => {
  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ display: "flex", justifyContent: "center" }}
    />
  );
};

export default NavbarComponent;
