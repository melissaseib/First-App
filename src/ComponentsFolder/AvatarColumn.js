import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { ProfilePicture } from "./ProfilePicture";

export const AvatarColumn = function AvatarColumn(props) {
  return (
    <div>
      <Col
        xs={12}
        md={6}
        lg={3}
        className="firstcol"
        style={{
          display: "table",
          height: "100vh"
        }}
      >
        <ProfilePicture profpic={props.profpic} />
      </Col>
    </div>
  );
};
