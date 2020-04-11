import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: `${window.innerHeight - 50}px`,
        }}
      >
        Developed with{" "}
        <img
          height={10}
          width={10}
          style={{ marginLeft: 5 }}
          src={
            "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png"
          }
          alt={" love "}
        />{" "}
        <a style={{ marginLeft: 5 }} href="mohitbaghel.com/">
          {" "}
          Mohit Singh Baghel
        </a>
      </div>
    );
  }
}
