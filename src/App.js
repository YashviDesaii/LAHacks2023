import React, { Component } from "react";
import { Icon, Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import StudentHome from "./components/Student/Home/StudentHome";

import AttendancePage from "./components/Student/AttendancePage/AttendancePage";
import Header from "./components/UI Components/Header/Header";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Classes from "./index.module.css";
import Error404 from "./components/Error404/Error404";
import AssignmentHome from "./components/Student/Assignment/AssignmentHome";
import QuizMe from "./components/Student/Home/Quiz";
import TodoList from "./components/Student/ToDoList/Todo";
import OverviewHome from "./components/Student/Overview/Overview";
import Flashquiz from "./components/Student/quiz/Flashquiz.js";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/me" exact component={StudentHome} />
          <Route
            path="/login"
            exact
            component={() => {
              return (
                <>
                  <Header />
                  <Layout.Content>
                 {/* <WrappedNormalLoginForm />*/}
                  </Layout.Content>
                </>
              );
            }}
          />
          <Route
            path="/register"
            exact
            component={() => {
              return (
                <>
                  <Header />
                  <Layout.Content>
                    {/*<WrappedRegistrationForm />*/}
                    
                  </Layout.Content>
                </>
              );
            }}
          />
          <Route path="/attendance" exact component={AttendancePage} />
          <Route path="/assignments" exact component={AssignmentHome} />
          <Route path="/overview" exact component={OverviewHome} />
          <Route path="/quiz" exact component={Flashquiz} />
          <Route path="/todo" exact component={TodoList} />
          <Route component={StudentHome} />
        </Switch>
        <Layout.Footer className={Classes.footer}>
          <Icon type="copyright" theme="twoTone" />
          &nbsp;Quackademic Homeroom
        </Layout.Footer>
      </>
    );
  }
}


export default App;
