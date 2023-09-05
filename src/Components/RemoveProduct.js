import React from 'react'
import Uta from '../assets/images/uta.jpg';
import Marketplace from '../assets/images/marketplace.png';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { baseURL } from '../util';

export default function RemoveProduct() {

  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const [users, setUsers] = useState([]);
  useEffect(() => { getData();}, []);
  
  function getData() {
      // let id=localStorage.getItem("studentid");
      Axios.get(baseURL+`home`).then(function (
        response
      ) {
        console.log(response.data[0]);
        // console.log(users)
        if (response.data) setUsers(response.data);
      });
    }

    const delProduct = (id) =>{
      Axios.delete(baseURL+`deleteproduct/${id}`).then(function(response){
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

{users.map((user, key) => (
<>    
  <div className="card" key={key}>
      <div><img src={user.image} alt="Image" style={{width:'250px',height:'250px'}}/></div>
      <div><h1>{user.name}</h1></div>
      <div><p className="price">${user.price}</p></div>
      <div style={{height:'30px'}}><p>{user.description}</p></div>
      <div><p><button style={{color: 'white'}} onClick={() =>delProduct(user.id)}>Delete Product</button></p></div>
  </div>
  </>
  ))}
  </div>

    {/* <div className="sets">
    <div className="rows">   
        <div className="columns">  
         <div className="card">
          <img src={Gotrax} alt="Gotrax" style={{width:'100%'}}/>
          <h1>Gotrax scooter</h1>
          <p className="price">$149.99</p><br></br>
          <p><button>Remove</button></p>
      </div>
      </div>
      </div>

      <div className="rows">   
        <div className="columns">  
         <div className="card">
          <img src={Notebook} alt="Notebooks" style={{width:'100%'}}/>
          <h1>Notebooks</h1>
          <p className="price">$3.99</p>
          <p>Set of 5 notebooks.</p>
          <p><button>Remove</button></p>
      </div>
      </div>
      </div> */}

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

    {/* </div> */}
    </>
  )
}
