import React from "react";
import Cart from "../assets/images/cart.jpg";
import Shoppingbag from "../assets/images/shoppingbag.png";
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";

export default function Student1() {
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const [users, setUsers] = useState([
    {
      name: "something",
    },
  ]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let id = localStorage.getItem("studentid");
    Axios.get(baseURL + `student.php/${id}`)
      .then(function (response) {
        console.log(response.data[0]);
        console.log(response.data);
        if (response.data)
          if (response.data.length > 0) setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
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

      <div className="row">
        <div className="column">
          <img
            src={users.length > 0 ? users[0].image : ""}
            alt="picture"
            id="profile"
          />
          <h2>{users.length > 0 ? users[0].name : "Default name"} </h2>
          <a href="editprofile.html" style={{ color: "brown" }}>
            <b>Edit Profile</b>
          </a>
          <br></br>
          <a href="postadvertisement.html" style={{ color: "brown" }}>
            <b>Advertisements</b>
          </a>
          <br></br>
          <a href="joinclub.html" style={{ color: "brown" }}>
            <b>Join Club</b>
          </a>
          <br></br>
          <a href="leaveclub.html" style={{ color: "brown" }}>
            <b>Leave Club</b>
          </a>
          <br></br>
          <a href="joinedclub.html" style={{ color: "brown" }}>
            <b>Clubs Joined</b>
          </a>
          <br></br>
          <a href="returnproducts.html" style={{ color: "brown" }}>
            <b>Return Products</b>
          </a>
          <br></br>
          <a href="pastorders.html" style={{ color: "brown" }}>
            <b>Past Orders</b>
          </a>
          <br></br>
        </div>
        <div className="column1">
          <table style={{ marginTop: "120px", fontSize: "larger" }}>
            <tr>
              <th>Name</th>
              <td>{users.length > 0 ? users[0].name : null}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{users.length > 0 ? users[0].dob : null}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{users.length > 0 ? users[0].address : null}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{users.length > 0 ? users[0].email : null}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{users.length > 0 ? users[0].number : null}</td>
            </tr>
          </table>
        </div>
        <div className="column2">
          <img src={Shoppingbag} width="150px" height="150px" />
          <br></br>
          <button style={{ width: "150px" }}>
            <a href="service_afterlogin.html" style={{ color: "brown" }}>
              Add items to Cart
            </a>
          </button>
        </div>
      </div>

      <button className="open-button" onClick={() => openForm()}>
        Chat
      </button>

      <div className="chat-popup" id="myForm">
        <form className="form-container">
          <h1>Chat</h1>

          <label for="msg">
            <b>Message</b>
          </label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button
            type="submit"
            className="btn"
            onClick={() => alert("Message sent sucessfully")}
          >
            Send
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => closeForm()}
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
}
