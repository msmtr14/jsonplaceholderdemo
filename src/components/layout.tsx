import React, { Component, Fragment } from "react";
import Header from "./header";
import { Footer } from ".";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="col-md-12">{this.props.children}</div>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
