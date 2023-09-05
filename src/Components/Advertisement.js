import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../css/advertisement.css';
import Uta from '../assets/images/uta.jpg';
import Marketplace from '../assets/images/marketplace.png';

export default function Advertisement() {

  const navigate = useNavigate();

  const navAdverstisement = () =>{
    navigate("/advertisement1.html");
  }

  const delAdverstisement = () =>{
    navigate("/deleteadvertisement1.html");
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

	<div className="container">
		<div className="buttons">
			<button className="btn btn-1" onClick={() =>navAdverstisement()}>Post a Advertisement </button>
      <button className="btn btn-1" onClick={() =>delAdverstisement()}>Delete  Advertisement </button>
		</div>
	</div>

    </>
  )
}


<html>
    <body>

	<div class="container">
		<div class="buttons">
			<button class="btn btn-1" onclick="window.location.href='ad1.html';">Post a advertisement </button>
		</div>
	</div>
</body>
</html>





