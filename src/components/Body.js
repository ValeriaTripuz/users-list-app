import "./styles/Body.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello world",
      newText: "",
    };
    this.onClick = this.onClick.bind(this);
  }
  //   text = "Hello world";
  render() {
    return (
      <>
        <input
          placeholder={this.state.text}
          onClick={this.onClick}
          onChange={(event) => this.setState({ newText: event.target.value })}
        />
        <h2>{this.state.newText}</h2>
        <Button />
      </>
    );
  }

  onClick() {
    this.setState({ text: "Hello world from Lera" });
  }
}

export default Body;
