import React from "react";
import ReactDOM from "react-dom/client";

function Users() {
  const users = [
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
  ];
  if (users.length > 0) {
    return (
      <div>
        {users.map((el) => (
          <div className="user" key={el.id}>
            <h2>
              {el.firstname} {el.lastname}
            </h2>
            <p>{el.bio}</p>
            {/* <b>{el.ishappy ? "He is happy" : "She is not happy"}</b> */}
            <b>{el.ishappy == true}</b>
          </div>
        ))}
      </div>
    );
  } else return <div>Hey</div>;
}

export default Users;
