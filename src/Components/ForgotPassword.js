import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Axios from "axios";
import { baseURL } from "../util";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [random, setRandom] = useState("");
  const [sendOtp, setSendOtp] = useState(true);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 1000000) + 1);
  }, []);

  console.log(random, otp);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_t1u2k7d",
        "template_ewk0zyj",
        form.current,
        "5n7aiK9R8erkUwcvW"
      )
      .then(
        (result) => {
          alert(result.text);
          console.log(result.text);
          setSendOtp(false);
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (random === parseInt(otp)) {
      Axios.get(baseURL + `forgotpassword.php/${email}`).then(function (
        response
      ) {
        console.log(response.data);
        // console.log(users)
        if (response.data) alert("The password is: " + response.data.password);
        navigate("/login.html");
      });
    } else {
      alert("Incorrect otp");
    }
  };

  const generateRandomNumber = (e) => {
    e.preventDefault();
    sendEmail();
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

      {sendOtp ? (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <form id="login" ref={form} onSubmit={(e) => generateRandomNumber(e)}>
            <center>
              <div>
                <div>
                  <label htmlFor="email">
                    <b>Enter E-Mail id:</b>
                  </label>
                </div>
                <br></br>
                <div>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    required
                  />
                </div>
                <br></br>
              </div>

              <input type="hidden" name="random" value={random}></input>
              <button id="logbutton">Submit</button>
              <br></br>
              <br></br>
            </center>
          </form>
        </div>
      ) : (
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
                  <label htmlFor="otp">
                    <b>Enter OTP:</b>
                  </label>
                </div>
                <br></br>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setOtp(e.target.value)}
                    name="otp"
                    value={otp}
                    required
                  />
                </div>
                <br></br>
              </div>
              <button id="logbutton">Submit</button>
              <br></br>
              <br></br>
            </center>
          </form>
        </div>
      )}
    </>
  );
}
