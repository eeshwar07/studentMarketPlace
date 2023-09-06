import React from "react";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import Axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../util";

export default function ManageBusinessOwner() {
  const [isEdit, setEdit] = useState(false);
  const [editUserData, setEditUserData] = useState({});

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.get(baseURL + "managebusinessowner.php").then(function (response) {
      console.log(response.data[0]);
      // console.log(users)
      if (response.data) if (response.data.length > 0) setUsers(response.data);
    });
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditUserData((values) => ({ ...values, [name]: value }));
  };

  const editUser = (users) => {
    setEdit(true);
    setEditUserData(users);
    console.log(users);
  };

  const deleteUser = (id) => {
    Axios.delete(baseURL + `deletebusinessowner.php/${id}`).then(function (
      response
    ) {
      console.log(response.data);
      if (response.data.status === 0) {
        alert("Record deletion sucessful");
      } else {
        alert("Record deletion unsucessful");
      }
      getData();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      baseURL + `updatebusinessowner.php/${editUserData.id}`,
      editUserData
    ).then((res) => {
      if (res.data.status === 1) {
        getData();
        alert("Sucessfully changed");
        setEdit(false);
      } else {
        alert("Change not sucessful");
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

      {isEdit ? (
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
                  <label htmlFor="name">
                    <b>Name:</b>
                  </label>
                </div>
                <br></br>
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    value={editUserData.name}
                    required
                  />
                </div>
                <br></br>
              </div>

              <div>
                <div>
                  <label htmlFor="email">
                    <b>Email:</b>
                  </label>
                </div>
                <br></br>
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="email"
                    value={editUserData.email}
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
      ) : (
        <table border="2" align="center" style={{ marginTop: "40px" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th colspan="2">Manage</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editUser(user)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="chat-popup" id="myForm">
        <form action="managestudents" className="form-container">
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
