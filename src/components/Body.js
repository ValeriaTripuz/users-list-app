import "./styles/Body.css";
import React from "react";
import ReactDOM from "react-dom/client";

// function Body() {
//   return <div className="Body">Body</div>;
// }

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello world",
    };
    this.onClick = this.onClick.bind(this);
  }
  //   text = "Hello world";
  render() {
    return (
      <>
        <input placeholder={this.state.text} onClick={this.onClick} />
      </>
    );
  }

  onClick() {
    this.setState({ text: "Hello world from Lera" });
  }
}

export default Body;
