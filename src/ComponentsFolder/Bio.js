import React, { Component } from "react";

export const Bio = function Bio(props) {
  return (
    <div
      className="justwords"
      style={{
        borderStyle: "dashed",
        borderColor: "purple",
        boxShadow: "5px 5px 2px plum",
        backgroundColor: "rgba(233, 231, 240, 0.87"
      }}
    >
      <h1>{props.name}</h1>
      <br /> {props.email}
      <br /> {props.phonenumber}
      <br />
    </div>
  );
};
