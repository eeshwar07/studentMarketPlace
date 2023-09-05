import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Cart from "../assets/images/cart.jpg";
import { baseURL } from "../util";

export default function ServiceAfterLogin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.get(baseURL + "home.php").then(function (response) {
      console.log(response.data[0]);
      console.log(users);
      if (response.data) if (response.data.length > 0) setUsers(response.data);
    });
  }

  const addCart = (user) => {
    let stud_id = localStorage.getItem("studentid");
    Axios.post(baseURL + `addtocart.php/${user.id}/${stud_id}`, {
      user: user,
    }).then(function (response) {
      console.log(response.data);
      if (response.data.status === 1) {
        alert("Added to cart");
      } else {
        alert("Not Added to cart");
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
        {users.map((user, key) => (
          <>
            <div className="card" key={key}>
              <div>
                <img
                  src={user.image}
                  alt="Image"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div>
                <h1>{user.name}</h1>
              </div>
              <div>
                <p className="price">${user.price}</p>
              </div>
              <div style={{ height: "30px" }}>
                <p>{user.description}</p>
              </div>
              <div>
                <p>
                  <button
                    style={{ color: "white" }}
                    onClick={() => addCart(user)}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
