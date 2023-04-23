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
     " The purpose of this course is to learn about the legal system and our legal rights\
      In the 1950s, many men working in factories died leaving behind widows. It was found that half of these women had applied for and received the workers' compensation death benefit. However, the other half were unaware of their right to this benefit. \
      The lecture then goes on to discuss the importance of recognizing our rights and obligations, as well as the consequences of not doing so\
      The first segment of the course is on contracts, as they are one of the most practical topics for students to learn about. \
      The next segment is on employment law, where we learn about the Americans with Disabilities Act and the importance of reasonable accommodations for workers with disabilities\
      The final segment is on property, real estate transactions, and real estate finance."
      
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
