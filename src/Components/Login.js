import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../util";

export default function Login(props) {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    Axios.post(baseURL + "loginstudent.php", input).then((res) => {
      console.log(res.data);
      console.log(res.data);
      if (res.data.length > 0) {
        alert("Record found successfully");
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        localStorage.setItem("studentid", res.data[0].id);
        props.update();
        console.log(res.data[0].role);
        console.log(res.data[0].role == 1);
        // setTimeout(() => {
        if (res.data[0].role == "1") {
          navigate("/service_afterlogin.html");
        }
        if (res.data[0].role == "2") {
          navigate("/businessowner.html");
        }
        if (res.data[0].role == "3") {
          navigate("/schooladmin.html");
        }
        if (res.data[0].role == "4") {
          navigate("/superadmin.html");
        }
        console.log(res.data[0].role);
        //  }, 1000);
      } else {
        alert("Invalid credentials");
      }
    });
  };

  const forgotPassword = () => {
    navigate("/forgotpassword.html");
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          ></div>
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
        <form id="login" action="insert" onSubmit={handleSubmit}>
          <center>
            <h2>LOGIN</h2>
            <div>
              <div>
                <label htmlFor="email">
                  <b>E-Mail:</b>
                </label>
              </div>
              <div>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password">
                  <b>Password:</b>
                </label>
              </div>
              <div>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required
                />
                <br></br>
              </div>
            </div>
            <br></br>
            <button id="logbutton">LOGIN</button>
            <br></br>
            <br></br>
            <button type="password" id="fp" onClick={() => forgotPassword()}>
              Forgot Password
            </button>

            <div>
              <center>
                <p>
                  {" "}
                  Don't have an Account?<br></br>
                  <a href="register.html" style={{ color: "green" }}>
                    REGISTER NOW
                  </a>
                </p>
              </center>
            </div>
          </center>
        </form>
      </div>
    </>
  );
}
