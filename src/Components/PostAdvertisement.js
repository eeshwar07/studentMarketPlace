import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Cart from "../assets/images/cart.jpg";
import { baseURL } from "../util";

export default function PostAdvertisement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.get(baseURL + "advertisement.php").then(function (response) {
      console.log(response.data[0]);
      // console.log(users)
      if (response.data) if (response.data.length > 0) setUsers(response.data);
    });
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif'",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h2 style={{ marginLeft: "20px" }}>
              <a href="home.html" style={{ fontSize: "100%", color: "white" }}>
                STUDENT<br></br>MARKETPLACE
              </a>
            </h2>
          </div>

          <div className="menu">
            <div style={{ marginRight: "10px" }}>
              <a href="home.html">Home</a>
            </div>

            <div style={{ marginRight: "10px" }}>
              <a href="aboutus.html">About Us</a>
            </div>

            <div style={{ marginRight: "10px" }}>
              <a href="contactus.html">Contact Us</a>
            </div>

            <div style={{ marginRight: "10px" }}>
              <a href="services.html">Services</a>
            </div>

            <div style={{ marginRight: "10px" }}>
              <a href="cart.html">
                <img
                  className="cart"
                  src={Cart}
                  alt="Cart"
                  width="20px"
                  height="20px"
                />
              </a>
            </div>

            <div style={{ marginRight: "10px" }}>
              <a
                href="login.html"
                onClick={() => localStorage.removeItem("user")}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-center" style={{ marginTop: "30px" }}>
        {users.length > 0 ? (
          users.map((user, key) => (
            <div className="card" key={key} style={{ marginLeft: "20px" }}>
              <div>
                <img src={user.image} alt="1" width="250px" height="250px" />
              </div>
              <div>
                <textarea id="msg" name="text" cols="20" rows="5">
                  {user.text}
                </textarea>
              </div>
            </div>
          ))
        ) : (
          <h1>No advertisements</h1>
        )}
      </div>

      <div className="chat-popup" id="myForm">
        <form action="/action_page" className="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>
        </form>
      </div>
    </>
  );
}
