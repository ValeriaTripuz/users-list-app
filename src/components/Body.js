import "./styles/Body.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Users from "./Users";
import AddUser from "./AddUser";

function Body() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "Lera",
      lastname: "Tripuz",
      age: 21,
      bio: "Lorem ipsum dolor sit arem",
      ishappy: false,
    },
    {
      id: 2,
      firstname: "Nikita",
      lastname: "Kushner",
      age: 21,
      bio: "Lorem ipsum dolor sit arem",
      ishappy: true,
    },
  ]);

  //     AddUser(user){
  //   }

  return (
    <>
      <Users users={users} />
      <div className="add">
        <AddUser />
      </div>
    </>
  );
}

export default Body;
