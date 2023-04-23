import React, { Component } from "react";
import { Divider } from "antd";

import StudentPageLayout from "../Layout/StudentPageLayout";

/* import Classes from "./Assignment.module.css";
import AssignmentList from "../../UI Components/AssignmentList/AssignmentList"; */
import AssignmentsTab from "../../UI Components/AssignmentsTab/AssignmentsTab";
import './Overview.css'

// const { TabPane } = Tabs;

const data = [
  {
    
    desc:
      "PrhaskhfwhkjedjsfjkhLKFJHLveniam est."
      
  },
 
  
  
];

class OverviewHome extends Component {
  state = {
    tabData: ["SUBJECT1", "SUBJECT2"]
  };
  render() {
    return (
      <StudentPageLayout>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            overflow: "scroll",
            flexWrap: "wrap", paddingTop:80
          }}
        >
          <AssignmentsTab
            title="Overview"
            data={data}
            tabData={[this.state.tabData[0]]}
          />
          {window.innerWidth === 650 ? <Divider /> : null}
          <AssignmentsTab
            data={data}
            tabData={[this.state.tabData[1]]}
            isCompleted={true}
            title="Overview"
          />
        </div>
      </StudentPageLayout>
    );
  }
}

export default OverviewHome;
