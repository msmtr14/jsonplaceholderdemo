import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components";
import Users from "./screens/users";
import UserPosts from "./screens/userPosts";
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/posts/:id" exact component={UserPosts} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
