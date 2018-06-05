import React, { Component } from "react";
import { FormInputs } from "./FormInputs";
import { Col, Button, FormControl } from "react-bootstrap";
import { H1Underline } from "./H1Underline";

export const FormAll = function FormAll(props) {
  return (
    <Col
      xs={12}
      md={6}
      lg={3}
      className="formTextcol"
      style={{
        padding: "20pt",
        display: "table",
        height: "100vh"
      }}
    >
      <div
        className="contacttext"
        style={{
          fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande",
          display: "table-cell",
          verticalAlign: "middle"
        }}
      >
        <H1Underline />
        <br />
        <FormInputs
          value={props.formname}
          handlechange={props.handlechange}
          id="name"
        />
        <FormInputs
          value={props.formemail}
          handlechange={props.handlechange}
          id="email"
        />
        <FormInputs
          value={props.formmessage}
          handlechange={props.handlechange}
          id="message"
        />

        <div className="button">
          <Button onClick={props.handlesubmit} block>
            Submit
          </Button>
        </div>
      </div>
    </Col>
  );
};
