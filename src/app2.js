//original

import React, { Component } from "react";
import "./App.css";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import "./style.css";
import logo from "./logo.svg";
import pic from "./pic.jpg";
import newest from "./newest.png";
import { ProfileImage } from "./components"; //alternative to css

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({ [id]: value });
  };

  async handleSubmit() {
    // alert('name: ' + this.state.name + ' ' + 'email: ' + this.state.email + ' ' + 'message: ' + this.state.message);

    this.setState({ name: "", email: "", message: "" });
    try {
      let res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.state)
      });

      res = await res.json();
      console.log(res);

      const status = res.status;

      if (status == 400) {
        alert(
          "Not Successful, Invalid User Request Error (Not all fields filled)"
        );
      } else {
        alert("Form Sent Successfully!");
      }
    } catch (err) {
      console.error(err);
    }

    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    document.addEventListener("keydown", event => {
      console.log(event.which);

      if (
        event.which == 13 &&
        this.state.name !== "" &&
        this.state.email !== "" &&
        this.state.message !== ""
      ) {
        this.handleSubmit();
      }
    });

    return (
      <div
        style={{
          width: "100vw",
          height: "100%"
        }}
      >
        <Row className="wrap" />
        <Row>
          <Col xs={12} md={6} lg={3} className="firstcol">
            <div className="image">
              <ProfileImage
                src={newest}
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
          </Col>

          <Col xs={12} md={6} lg={3} className="biotextCol">
            <div className="biotexttext">
              <div className="justwords">
                <h1>Melissa Seib</h1>
                <p>
                  <br /> mss@quitasls.com
                  <br /> (978)-935-6096
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3} className="formTextcol">
            <div className="contacttext">
              <div className="contactme">
                <h1>Contact Me!</h1>
              </div>

              <br />
              <form
                onChange={e => {
                  //console.log(event.which);
                  //if keycode == 13
                  //if which == 13this.handleSubmit(e);
                }}
              >
                <p>
                  Name<p2>*</p2>:
                </p>
                <FormControl
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <br />
                <p>
                  Email<p2>*</p2>:
                </p>
                <FormControl
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />
                <p>
                  Message<p2>*</p2>:
                </p>
                <FormControl
                  id="message"
                  componentClass="textarea"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <br />
                <div className="button">
                  <Button onClick={this.handleSubmit} block>
                    Submit{" "}
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="wrap" />
      </div>
    );
  }
}

export default App;
