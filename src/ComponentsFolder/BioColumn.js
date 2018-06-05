import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { Bio } from "./Bio";
import { BioContent } from "./BioContent";

export const BioColumn = function BioColumn(props) {
  return (
    <Col
      xs={12}
      md={6}
      lg={3}
      className="biotextCol"
      style={{
        textAlign: "center",
        fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande",
        padding: "20pt",
        height: "100vh",
        display: "table"
      }}
    >
      <BioContent />
    </Col>
  );
};
