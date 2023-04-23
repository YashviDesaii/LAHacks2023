import React, { Component } from "react";

import { Layout } from "antd";
import SideMenu from "../../UI Components/SideMenu/SideMenu";

import Header from "../../UI Components/Header/Header";
class StudentPageLayout extends Component {
  render() {
    // const { Header } = Layout;
    return (
      <Layout>
        <Header />
        <Layout style={{ background: "#F5F4F2" }}>
        <div style={{ backgroundColor: "#F5F4F2" }}>
  <SideMenu menuSelect={this.props.menuSelect} />
</div>
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default StudentPageLayout;
