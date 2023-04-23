import React, { Component } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

import Classes from "./Card.module.css";

const { Meta } = Card;

class DashboardCard extends Component {
  render() {
    return (
     
        <Card
          hoverable
          className={Classes.card}
          
          actions={
            [
              //   <Icon type="setting" />,
              //   <Icon type="edit" />,
              //   <Icon type="ellipsis" />
            ]
          }
        >sdhjkshdjkahsdjkh
          <Meta data={this.props.data} />
        </Card>
    
    );
  }
}

export default DashboardCard;
