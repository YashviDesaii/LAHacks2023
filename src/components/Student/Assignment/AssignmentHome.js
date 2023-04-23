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
      "Sign up for the conference"
  },
  {
    title: "TODO 2",
    desc:
      "Be aware of your rights"
  },
  {
    title: "TODO 3",
    desc:
      "Learn about the internet and intellectual property"
  },
  {
    title: "TODO 4",
    desc:
      "Learn about agency and business organizations"
  },
  {
    title: "TODO 5",
    desc:
      "Learn about property"
  },
  {
    title: "TODO 6",
    desc:
      "Take a look at the academic calendar"
  },
  
  
];

const data2 = [
  {
    title: "TODO 1",
    desc:
      "register for the course on canvas"
  },
  {
    title: "TODO 2",
    desc:
      "sign plagiarism form"
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
            data={data2}
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
