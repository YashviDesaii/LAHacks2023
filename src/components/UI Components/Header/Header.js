import React, { Component } from "react";
import { Layout, Typography } from "antd";

import Classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <Layout.Header className={Classes.header}>
        <Typography.Title
          level={1}
          style={{ color: "#9FA99D", fontWeight: "normal" }}
        >
          Student Management App
        </Typography.Title>
      </Layout.Header>
    );
  }
}

export default Header;
