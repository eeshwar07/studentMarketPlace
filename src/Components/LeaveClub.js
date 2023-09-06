import React from "react";
import Cart from "../assets/images/cart.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";

export default function LeaveClub() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let id = localStorage.getItem("studentid");
    Axios.get(baseURL + `joinedclubcart.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        console.log(users);
        if (response.data)
          if (response.data.length > 0) setUsers(response.data);
          else setUsers([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const leaveClub = (id) => {
    let stud_id = localStorage.getItem("studentid");
    Axios.delete(baseURL + `leaveclub.php/${id}/${stud_id}`).then(function (
      response
    ) {
      console.log(response.data);
      if (response.data.status === 1) {
        alert("Left Club successfully");
      } else {
        alert("Leaving club unsuccessful");
      }
      getData();
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
        {users.map((user, key) => (
          <>
            <div className="card" key={key}>
              <div>
                <h1>{users.length > 0 ? user.name : null}</h1>
              </div>
              <div>
                <img
                  src={users.length > 0 ? user.image : null}
                  alt="Image"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div>
                <button onClick={() => leaveClub(user.id)} className="c-btn">
                  Leave Club
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      {users.length > 0 ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <button style={{ width: "150px" }}>
            <a href="joinclub.html" style={{ color: "brown" }}>
              Join More?
            </a>
          </button>
        </div>
      ) : (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>No clubs joined.</h1>
        </div>
      )}
    </>
  );
}
