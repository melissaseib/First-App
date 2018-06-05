import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

export const FormInputs = function FormInputs(props) {
  if ("message" != props.id)
    return (
      <div className="contactext">
        <p>
          {props.id}
          <p2
            style={{
              color: "purple"
            }}
          >
            *
          </p2>:
        </p>
        <FormControl
          id={props.id}
          type="text"
          placeholder={props.id}
          value={props.value}
          onChange={props.handlechange}
        />
        <br />
      </div>
    );

  return (
    <div className="contactext">
      <p>
        {props.id}
        <p2>*</p2>:
      </p>
      <FormControl
        id={props.id}
        componentClass="textarea"
        placeholder={props.id}
        value={props.value}
        onChange={props.handlechange}
      />
      <br />
    </div>
  );
};
