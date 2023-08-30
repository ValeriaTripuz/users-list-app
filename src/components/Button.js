import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Button(props) {
  const [click, setClick] = useState(0);
  useEffect(() => {
    document.title = `u click ${click}`;
  });
  return (
    <button
      onClick={() => {
        setClick(click + 1);
      }}
    >
      {props.text}
      {click}
    </button>
  );
}

Button.defaultProps = {
  text: "Button",
};
export default Button;
