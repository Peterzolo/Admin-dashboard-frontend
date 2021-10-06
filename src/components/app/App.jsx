import React from "react";
import Navbar from "../navbar/Navbar";
import Home from "../pages/home/Home";
import SideBar from "../sidebar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import UserList from "../pages/users/Userlist";
import User from "../pages/users/User";
import NewUser from "../pages/newUser/NewUser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <SideBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
