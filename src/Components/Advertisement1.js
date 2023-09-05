import React from 'react';
import '../css/advertisement1.css';
import Uta from '../assets/images/uta.jpg';
import Marketplace from '../assets/images/marketplace.png';
import {useState} from 'react';
import Axios from 'axios';
import { baseURL } from '../util';

export default function Advertisement1() {

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name] : value}));
  }

  const handleFileChange = (e) =>{
    const name = e.target.name;
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      setInput(values => ({...values, [name] : reader.result}));

    }
    reader.readAsDataURL(file);

console.log(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    Axios.post(baseURL+'postadvertisement',input).then((res) => {
    console.log(res.data)
    if(res.data.status===1){
      alert("Record inserted successfully");
      e.target.reset();
      setInput({});
    }
    else{
      alert("Record Insertion Unsucessful");
    }
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
        <button style={{margin: '10px 10px'}}><a href="addproduct.html">Add a product</a></button>
        <button style={{margin: '10px 10px'}}><a href="removeproduct.html">Remove a product</a></button>
        <button style={{margin: '10px 10px'}}><a href="advertisement.html">Advertisements</a></button>
    </div> 


    <form action="addproduct" onSubmit={handleSubmit}>
	<div className="container">
		<div className="box">
			<div className="message-box">
				<textarea id="msg" name="text" cols="90" rows="18" onChange={handleChange}
					placeholder="Write a blog here to post as advertisement"></textarea>
			</div>
	
   
    <div className="container-upload">
			<input type="file" name="image" className="upload-box" onChange={handleFileChange} />
			</div>
		<div className="button">
		<button type="submit">POST</button></div>
        </div>
        </div>
        </form>
      
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
