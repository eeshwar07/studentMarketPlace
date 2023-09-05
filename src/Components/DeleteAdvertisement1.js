import React from 'react'
import Uta from '../assets/images/uta.jpg';
import Marketplace from '../assets/images/marketplace.png';
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from '../util';

export default function DeleteAdvertisement1() {

    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }

      const [users, setUsers] = useState([]);
      useEffect(() => { getData();}, []);
      
      function getData() {
          Axios.get(baseURL+"advertisement").then(function (
            response
          ) {
            console.log(response.data[0]);
            // console.log(users)
            if (response.data) setUsers(response.data);
          });
        }

    const delAdvertisement = (id) =>{
        Axios.delete(baseURL+`deleteadvertisement/${id}`).then(function(response){
          console.log(response.data)
        if(response.data.status===1){
          alert(response.data.message);
        }
        else{
          alert("Record deletion unsucessful");
        }
          getData();
        });
      }

  return (
    <>
         <div align="center">
        <img className="logo" src={Uta} alt="Student clubs" width="300px" height="100px"/>
        <img className="logo" src={Marketplace} alt="Student clubs" width="300px" height="100px"/>
        <div><button style={{backgroundColor:'black'}}><a href="login.html" onClick={() => localStorage.removeItem("user")} style={{color:'white'}}>Logout</a></button></div>
         </div>

         <div className="owner">
        <button style={{margin: '10px 10px'}}><a style={{color:'aliceblue'}} href="addproduct.html">Add a product</a></button>
        <button style={{margin: '10px 10px'}}><a style={{color:'aliceblue'}} href="removeproduct.html">Remove a product</a></button>
        <button style={{margin: '10px 10px'}}><a href="advertisement.html">Advertisements</a></button>
    </div>

        <div className="flex flex-wrap flex-center" style={{marginTop: '30px'}}>
        {users.length>0 ? users.map((user, key) => (   
            <div className="card"  key={key} style={{marginLeft:'20px'}}>
            <div><img src={user.image} alt="1" width="250px" height="250px"/></div>
            <div><textarea id="msg" name="text" cols="20" rows="5">{user.text}</textarea></div>
            <div><button onClick={() =>delAdvertisement(user.id)} className="c-btn">Delete Advertisement</button></div>
        </div>
  )) : <h1>No advertisements</h1>}
  </div>

  <button className="open-button" onClick={() =>openForm()}>Chat</button>
    
    <div className="chat-popup" id="myForm">
      <form action="/action_page" className="form-container">
        <h1>Chat</h1>
    
        <label for="msg"><b>Message</b></label>
        <textarea placeholder="Type message.." name="msg" required></textarea>
    
        <button type="submit" className="btn">Send</button>
        <button type="button" className="btn cancel" onClick={() =>closeForm()}>Close</button>
      </form>
    </div>
    </>
  )
}
