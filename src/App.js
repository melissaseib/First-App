import React, { Component } from "react";
import "./App.css";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import "./style.css";
import logo from "./logo.svg";
import pic from "./pic.jpg";
import { ProfileImage } from "./components"; //alternative to css

class App extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          height: "100%"
        }}
      >
        <Row>
          <Col
            xs={12}
            md={6}
            lg={3}
            style={{
              paddingLeft: "50px",
              paddingTop: "50pt",
              display: "tableCell",
              verticalAlign: "middle",
              textAlign: "center"
            }}
          >
            <ProfileImage src={pic} />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="Biotext"
            //style={{ display: "table-cell";  }}
            //text-align: center;
            //color: blue;
            //margin-left: auto;
            //margin-right: auto;
            //display: table-cell;
            //vertical-align: middle;
          >
            <div className="biotextcenter">
              <h1>Melissa Seib</h1>
              <p>
                <br /> mss@quitasls.com
                <br /> (978)-935-6096
                <br /> hey
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="formText">
            <div className="contact">
              <h1>Contact Me!</h1>
            </div>
            <br />
            <p>Name:</p>
            <FormControl placeholder="Name" />
            <br />
            <p>Email:</p>
            <FormControl placeholder="Email" />
            <br />
            <p>Message:</p>
            <FormControl placeholder="Message" />
            <br />
            <Button onClick={() => this.setState({})} bsStyle="primary" block>
              {" "}
              Submit{" "}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
