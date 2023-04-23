import React, { Component } from "react";
import { Layout, Typography } from "antd";

import Classes from "./Header.module.css";
import rubberDucky from "./ducky.png"; // import the image file


class Header extends Component {
  render() {
    return (
      <Layout.Header className={Classes.header}>
        <Typography.Title
          level={1}
          style={{ color: "#9FA99D", fontWeight: "normal" }}
        >
                    <img src={rubberDucky} alt="Rubber Ducky" width="40" height="40"/> {/* Add the image */}

          Quackademic Homeroom

         

        </Typography.Title>
      </Layout.Header>
    );
  }
}

export default Header;
