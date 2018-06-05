import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { AvatarColumn } from "./AvatarColumn";
import { BioColumn } from "./BioColumn";
import { FormAll } from "./FormAll";

export const MelsWebpage = function MelsWebpage(props) {
  return (
    <div
      className="outside"
      style={{
        width: "100vw",
        height: "100%",
        position: "fixed",
        overflow: "scroll",
        backgroundImage: props.backgroundimage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll"
      }}
    >
      <Row>
        <AvatarColumn profpic={props.profpicture} />

        <BioColumn />

        <FormAll
          formname={props.formname1}
          handlechange={props.handlechange1}
          formemail={props.formemail1}
          formmessage={props.formmessage1}
          handlesubmit={props.handlesubmit1}
        />
      </Row>
    </div>
  );
};
