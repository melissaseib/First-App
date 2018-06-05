import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { FormAll } from "./FormAll";

export const FormColumn = function FormColumn(props) {
  return (
    <Col
      xs={12}
      md={6}
      lg={3}
      className="formTextcol"
      style={{
        padding: "20pt",
        display: "table",
        height: "80vh"
      }}
    >
      <FormAll
        formname={props.formname}
        handlechange={props.handlechange}
        formemail={props.formemail}
        formmessage={props.formmessage}
        handlesubmit={props.handlesubmit}
      />
    </Col>
  );
};
