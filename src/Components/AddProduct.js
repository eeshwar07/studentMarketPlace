import React from "react";
import "../css/chatbox.css";
import "../css/index.css";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import { useState } from "react";
import Axios from "axios";
import { baseURL } from "../util";

export default function AddProduct() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleFileChange = (e) => {
    const name = e.target.name;
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      setInput((values) => ({ ...values, [name]: reader.result }));
    };
    reader.readAsDataURL(file);

    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    Axios.post(baseURL + "addproduct.php", input).then((res) => {
      console.log(res.data);
      if (res.data.status === 1) {
        alert("Record inserted successfully");
        e.target.reset();
        setInput({});
      } else {
        alert("Record Insertion Unsucessful");
      }
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
          <a href="advertisement.html">Advertisements</a>
        </button>
      </div>

      <form action="addproduct" onSubmit={handleSubmit}>
        <h1 align="center" style={{ color: "black" }}>
          Enter details of product:
        </h1>
        <div className="card">
          <div className="form-div-tag">
            <input
              style={{
                display: "flex",
                justifyContent: "center",
                width: "180px",
              }}
              type="file"
              id="myFile"
              name="image"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-div-tag">
            <input
              type="text"
              placeholder="Enter name of product"
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-div-tag">
            <input
              type="text"
              placeholder="Enter price of product"
              name="price"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-div-tag">
            <label>Description of product:</label>
          </div>
          <div className="form-div-tag">
            <textarea
              className="textarea"
              rows="4"
              cols="20"
              name="description"
              onChange={handleChange}
            ></textarea>
            <br></br>
          </div>
          <p>
            <button>Submit</button>
          </p>
        </div>
      </form>

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
