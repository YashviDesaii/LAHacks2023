import React, { Component } from "react";
import { Divider } from "antd";

import StudentPageLayout from "../Layout/StudentPageLayout";

/* import Classes from "./Assignment.module.css";
import AssignmentList from "../../UI Components/AssignmentList/AssignmentList"; */
import AssignmentsTab from "../../UI Components/AssignmentsTab/AssignmentsTab";

// const { TabPane } = Tabs;

const data = [
  {
    title: "TODO 1",
    desc:
      "PrhaskhfwhkjedjsfjkhLKFJHLveniam est."
  },
  {
    title: "TODO 2",
    desc:
      "Proident exercitation nisi labore sint laboris proident deserunt laborum culpa enim veniam est."
  },
  {
    title: "TODO 3",
    desc:
      "Proident exercitation nisi laboveniam est."
  },
  
  
];

class AssignmentHome extends Component {
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
            title="On-Going"
            data={data}
            tabData={this.state.tabData}
          />
          {window.innerWidth === 650 ? <Divider /> : null}
          <AssignmentsTab
            data={data}
            tabData={this.state.tabData}
            isCompleted={true}
            title="Completed"
          />
        </div>
      </StudentPageLayout>
    );
  }
}

export default AssignmentHome;
