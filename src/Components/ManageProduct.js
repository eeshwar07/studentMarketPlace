import React from "react";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import Studytable from "../assets/images/study table.jfif";
import Mattress from "../assets/images/mattress.jfif";

export default function ManageProduct() {
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
          <a style={{ color: "aliceblue" }} href="addproduct.html">
            Add a product
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="removeproduct.html">
            Remove a product
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="manageproduct.html">
            Manage a product
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a href="advertisement.html">Advertisements</a>
        </button>
      </div>

      <div className="sets">
        <div className="rows">
          <div className="columns">
            <div className="card">
              <img src={Mattress} alt="Mattress" style={{ width: "100%" }} />
              <h1>Mattress</h1>
              <p className="price">$129.99</p>
              <br></br>
              <p>Memory foam mattress.</p>
              <br></br>
              <p>
                <button>Edit</button>
              </p>
            </div>
          </div>
        </div>

        <div className="rows">
          <div className="columns">
            <div className="card">
              <img
                src={Studytable}
                alt="Study Table"
                style={{ width: "100%" }}
              />
              <h1>Study Table</h1>
              <p className="price">$19.99</p>
              <p>Study table for students.</p>
              <p>
                <button>Edit</button>
              </p>
            </div>
          </div>
        </div>
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
