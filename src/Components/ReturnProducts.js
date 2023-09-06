import React from "react";
import Cart from "../assets/images/cart.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";

export default function ReturnProducts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let id = localStorage.getItem("studentid");
    Axios.get(baseURL + `viewsolditems.php/${id}`)
      .then(function (response) {
        console.log(response.data);
        if (response.data)
          if (response.data.length > 0) setUsers(response.data);
          else setUsers([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const returnProuct = (users) => {
    Axios.delete(baseURL + `returnproducts.php/${users.id}`)
      .then(function (response) {
        console.log(response.data);
        //   if (response.data) if (response.data.length > 0) setData(response.data);
        getData();
        alert("Product returned successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

      {users.length > 0 ? (
        <div
          className="flex flex-wrap flex-center"
          style={{ marginTop: "30px" }}
        >
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
                      onClick={() => returnProuct(user)}
                    >
                      Return Product
                    </button>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>No Previous Orders</h1>
        </div>
      )}
    </>
  );
}
