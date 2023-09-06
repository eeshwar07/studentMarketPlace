import React from "react";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";

export default function SchoolAdmin() {
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
          <a style={{ color: "aliceblue" }} href="managestudents.html">
            Manage students
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="managebusinessowner.html">
            Manage business owner
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="generatereport.html">
            Generate reports
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="manageposts.html">
            Manage Posts
          </a>
        </button>
        <button style={{ margin: "10px 10px" }}>
          <a style={{ color: "aliceblue" }} href="datatemplate.html">
            Manage Clubs
          </a>
        </button>
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
