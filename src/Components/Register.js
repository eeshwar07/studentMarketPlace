import React, { useRef } from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { baseURL } from "../util";

export default function Register() {
  const [input, setInput] = useState({ role: 1 });
  const navigate = useNavigate();
  const form = useRef();

  if (form.current) {
    // form.current.image.value = "";
    console.log(form.current.image.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.image.value = "";
    emailjs
      .sendForm(
        "service_c46hw2j",
        "template_jyt7fvk",
        form.current,
        "5n7aiK9R8erkUwcvW"
      )
      .then(
        (result) => {
          alert(result.text);
          console.log(result.text);
          Axios.post(baseURL + "register.php", input).then((res) => {
            console.log(res.data);

            if (res.data.status === 1) {
              alert("Sucessfully registered");
              setInput({});
              navigate("/login.html");
            } else {
              alert("Not sucessful");
            }
          });
        },
        (error) => {
          alert(error.text);
          console.log(error.text);
        }
      );
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendEmail(e);
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
        </div>
      </div>

      <div
        className="flex flex-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form
          ref={form}
          id="registration"
          action="register"
          method="post"
          onSubmit={handleSubmit}
        >
          <center>
            <h1>REGISTER</h1>
            <p>
              Don't have an Account?<br></br>
              Register Here
            </p>
          </center>
          <center>
            <div>
              <div>
                <label htmlFor="name">
                  <b>Name</b>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>

              <div>
                <label htmlFor="dob">
                  <b>Date of Birth</b>
                </label>
              </div>
              <div>
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>

              <div>
                <label htmlFor="address">
                  <b>Address</b>
                </label>
              </div>
              <div>
                <textarea
                  name="address"
                  rows="3"
                  cols="22"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <br></br>

              <div>
                <label htmlFor="email">
                  <b>E-Mail</b>
                </label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>

              <div>
                <label htmlFor="password">
                  <b>Password</b>
                </label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>

              <div>
                <label htmlFor="image">
                  <b>Image</b>
                </label>
              </div>
              <div>
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
                  required
                />
              </div>
              <br></br>

              <div>
                <label htmlFor="image">
                  <b>Phone Number</b>
                </label>
              </div>
              <div>
                <input
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "180px",
                  }}
                  type="tel"
                  name="number"
                  pattern="[0-9]{10}"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <br></br>
            <button id="regbutton">SUBMIT</button>
          </center>
        </form>
      </div>
      <center>
        <p>
          {" "}
          Already have an Account?<br></br>
          <a href="login.html" style={{ color: "green" }}>
            LOGIN HERE
          </a>
        </p>
      </center>
    </>
  );
}
