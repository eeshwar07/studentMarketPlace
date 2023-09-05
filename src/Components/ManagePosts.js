import React from "react";
import Uta from "../assets/images/uta.jpg";
import Marketplace from "../assets/images/marketplace.png";
import Axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../util";

export default function ManagePosts() {

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.get(baseURL+"manageposts").then(function (
      response
    ) {
      console.log(response.data[0]);
      // console.log(users)
      if (response.data) if (response.data.length > 0) setUsers(response.data);
    });
  }

  return (
    <>
     <div align="center">
        <img className="logo" src={Uta} alt="Student clubs" width="300px" height="100px"/>
        <img className="logo" src={Marketplace} alt="Student clubs" width="300px" height="100px"/>
        <div><button style={{backgroundColor:'black'}}><a href="login.html" onClick={() => localStorage.removeItem("user")} style={{color:'white'}}>Logout</a></button></div>
    </div>

      <table border="2" align="center" style={{marginTop: '40px'}}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Message</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.message}</td>
              {/* <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td> */}
              <td><button>Reply</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="open-button" onClick={() =>openForm()}>
        Chat
      </button>
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
          <button type="button" className="btn cancel" onClick={() =>closeForm()}>
            Close
          </button>
        </form>
      </div>
    </>
  );
}
