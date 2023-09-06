import React from "react";
import Cart from "../assets/images/cart.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";

export default function JoinClub() {
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

  const addClubCart = (user) => {
    let stud_id = localStorage.getItem("studentid");
    Axios.post(baseURL + `clubcart.php/${user.id}/${stud_id}`, {
      user: user,
    }).then(function (response) {
      console.log(response.data);
      if (response.data.status === 1) {
        alert("Joined Club successfully");
      } else {
        alert("Joining club unsuccessful");
      }
    });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h3 style={{ marginLeft: "20px" }}>
              <a href="home.html" style={{ fontSize: "100%", color: "white" }}>
                STUDENT<br></br>MARKETPLACE
              </a>
            </h3>
          </div>

          <div className="menu">
            <div style={{ marginLeft: "10px" }}>
              <a href="home.html">Home</a>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a href="aboutus.html">About Us</a>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a href="contactus.html">Contact Us</a>
            </div>

            <div style={{ marginLeft: "10px" }}>
              <a href="services.html">Services</a>
            </div>

            <div style={{ marginLeft: "10px" }}>
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

            <div style={{ marginLeft: "10px" }}>
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
                <button onClick={() => addClubCart(user)} className="c-btn">
                  JOIN!!!
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
