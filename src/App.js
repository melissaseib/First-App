//original

import React, { Component } from "react";
import "./App.css";
import { Row, Col, Image, Button, FormControl } from "react-bootstrap";
import "./style.css";

import AvatarPicture from "./AvatarPicture.png";
import { MelsWebpage } from "./ComponentsFolder/MelsWebpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      backgroundImage:
        "url('https://media.istockphoto.com/photos/graph-paper-picture-id452625813?k=6&m=452625813&s=612x612&w=0&h=I_5rR_vMva5-ONoXY6rmHc6ERUFvRE7iv_yC0zPI7rQ=')"
    };
  }

  handleChange = e => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState({ [id]: value });
  };

  handleSubmit = async () => {
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

      const status = res.status;

      if (status > 200) {
        if (status == 400) {
          alert(
            "Not successful, invalid user request error (Not all fields filled)"
          );
        } else {
          alert("Not succesful, message not sent");
        }
      } else {
        alert("Form sent successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Not successful, message not sent");
    }

    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    return (
      <MelsWebpage
        backgroundimage={this.state.backgroundImage}
        profpicture={AvatarPicture}
        formname1={this.state.name}
        handlechange1={this.handleChange}
        formEmail1={this.state.email}
        formMessage1={this.state.message}
        handleSubmit1={this.handleSubmit}
      />
    );
  }
}

export default App;
