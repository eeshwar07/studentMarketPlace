import React from "react";
import Cart from "../assets/images/cart.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import { baseURL } from "../util";

export default function DeleteClub() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.get(baseURL + "joinclub.php").then(function (response) {
      console.log(response.data[0]);
      // console.log(users)
      if (response.data) if (response.data.length > 0) setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    Axios.delete(baseURL + `deleteclub.php/${id}`).then(function (response) {
      console.log(response.data);
      if (response.data.status === 1) {
        alert(response.data.message);
      } else {
        alert("Record deletion unsucessful");
      }
      getData();
    });
  };

  return (
    <>
      <div align="center">
        <img
          className="logo"
          src={Uta}
          alt="Student clubs"
          width="300px"
          height="100px"
        />
        <img
          className="logo"
          src={Marketplace}
          alt="Student clubs"
          width="300px"
          height="100px"
        />
        <div>
          <button style={{ backgroundColor: "black" }}>
            <a
              href="login.html"
              onClick={() => localStorage.removeItem("user")}
              style={{ color: "white" }}
            >
              Logout
            </a>
          </button>
        </div>
      </div>

      <div className="owner">
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="addclub.html">
            Add Club
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="deleteclub.html">
            Delete Club
          </a>
        </button>
      </div>

      <div className="flex flex-wrap flex-center" style={{ marginTop: "30px" }}>
        {users.map((user, key) => (
          <>
            <div className="card" key={key} style={{ marginLeft: "20px" }}>
              <div>
                <h3>{user.name}</h3>
              </div>
              <div>
                <img src={user.image} alt="1" width="250px" height="250px" />
              </div>
              <div>
                <button onClick={() => deleteUser(user.id)} className="c-btn">
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="chat-popup" id="myForm">
        <form action="/action_page" className="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
