import React from "react";
import Cart from "../assets/images/cart.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ role: 1 });

  const [users, setUsers] = useState({
    name: "",
  });
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let id = localStorage.getItem("studentid");
    Axios.get(baseURL + `student.php/${id}`)
      .then(function (response) {
        //   console.log(response.data[0]);
        console.log(response.data[0]);
        if (response.data)
          if (response.data.length > 0) setUsers(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(users);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("studentid");
    let d = users;
    delete d.image;
    delete d.address;
    Axios.post(baseURL + `updatestudent.php/${id}`, d).then((res) => {
      // console.log(res.data);

      if (res.data.status === 1) {
        alert("Sucessfully changed");
        // setInput({});
        navigate("/student1.html");
      } else {
        alert("Change not sucessful");
      }
    });
  };

  //   console.log(users[0])
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

      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <form id="login" onSubmit={handleSubmit}>
          <center>
            <div>
              <div>
                <label htmlFor="name">
                  <b>Name:</b>
                </label>
              </div>
              <br></br>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={users.name}
                  required
                />
              </div>
              <br></br>
            </div>

            <div>
              <div>
                <label htmlFor="dob">
                  <b>DOB:</b>
                </label>
              </div>
              <br></br>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="dob"
                  value={users.dob}
                  required
                />
              </div>
              <br></br>
            </div>

            <div>
              <div>
                <label htmlFor="email">
                  <b>Email:</b>
                </label>
              </div>
              <br></br>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  value={users.email}
                  required
                />
              </div>
              <br></br>
            </div>

            <div>
              <div>
                <label htmlFor="number">
                  <b>Phone number:</b>
                </label>
              </div>
              <br></br>
              <div>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  onChange={handleChange}
                  name="number"
                  value={users.number}
                  required
                />
              </div>
              <br></br>
            </div>

            {/* <input type="hidden" name="random" value={random}></input> */}
            <button id="logbutton">Submit</button>
            <br></br>
            <br></br>
          </center>
        </form>
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
