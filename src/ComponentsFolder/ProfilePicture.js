import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { ProfileImage } from "./components";

export const ProfilePicture = function ProfilePicture(props) {
  return (
    <div
      className="image"
      style={{
        display: "table-cell",
        verticalAlign: "middle",
        padding: "28pt",
        height: "50vh"
      }}
    >
      <ProfileImage
        src={props.profpic}
        class="img-fluid"
        alt="Responsive image"
        style={{
          borderStyle: "solid",
          borderColor: "purple",
          borderWidth: "2pt",
          boxShadow: "0 4px 8px 0 plum, 0 6px 20px 0 plum"
        }}
      />
    </div>
  );
};
