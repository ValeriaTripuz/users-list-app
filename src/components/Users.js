import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import User from "./User";

function Users() {
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

  if (users.length > 0) {
    return (
      <div>
        {users.map((el) => (
          <User key={el.id} user={el} />
        ))}
      </div>
    );
  } else return <div>Hey</div>;
}

export default Users;
