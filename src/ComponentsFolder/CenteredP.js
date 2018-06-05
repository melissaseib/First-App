import React, { Component } from "react";

export const CenteredP = function CenteredP(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>{props.p}</p>
    </div>
  );
};
