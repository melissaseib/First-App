import React, { Component } from "react";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import { Bio } from "./Bio";

export const BioContent = function BioContent() {
  return (
    <div
      className="biotexttext"
      style={{
        display: "table-cell",
        verticalAlign: "middle",
        fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande"
      }}
    >
      <Bio
        name="Melissa Seib"
        email="mss@quitasls.com"
        phonenumber="(978)-935-6096"
      />
    </div>
  );
};
