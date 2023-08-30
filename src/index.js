import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// ReactDOM.render(<h1>Привет</h1>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// const text1 = "First text";

// const inputClick = () => {
//   console.log("Click");
// };
root.render(
  // <>
  //   <h1 className="heading">First heading</h1>
  //   <input placeHolder={text1} onClick={inputClick} />
  // </>
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);
