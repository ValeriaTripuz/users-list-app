import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <Footer />
  </React.StrictMode>
);
