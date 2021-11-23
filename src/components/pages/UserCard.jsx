import React from "react";
import axios from "axios";
import "./UserCard.css";






// const dummyUser = [
//   {
//     id: 1,
//     name: "John Doe",
//     username: "jdoe",
//   },
//   {
//     id: 2,
//     name: "Mark Hamil",
//     username: "hamil",
//   },
//   {
//     id: 3,
//     name: "Gus Fring",
//     username: "gfring",
//   },
// ];

function User() {

  const [user, setUser] = React.useState([]);

  axios.get("http://localhost:5000/exercises")
  .then(res => {
      console.log("Test")
    console.log(res.data);
    setUser(res.data);
    })

  return (
      <div className="user__card">
          {user.map((user, id) => <h1 key={id}>{user.username}</h1>)}
    </div>
  );
}

export default User;
