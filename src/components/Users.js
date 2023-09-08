import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import User from "./User";

function Users(props) {
  if (props.users.length > 0) {
    return (
      <div>
        {props.users.map((el) => (
          <User key={el.id} user={el} />
        ))}
      </div>
    );
  } else return <div>Hey</div>;
}

export default Users;
