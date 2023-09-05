import React from 'react';
import Cart from '../assets/images/cart.jpg';
import { useEffect, useState } from "react";
import Axios from "axios";
import { baseURL } from '../util';


export default function JoinedClub() {

    const [users, setUsers] = useState([]);
    useEffect(() => { getData();}, []);
    
    function getData() {
      let id=localStorage.getItem("studentid");
        Axios.get(baseURL+`joinedclubcart/${id}`).then(function (
          response
        ) {
          console.log(response.data);
           console.log(users)
          if (response.data) if (response.data.length > 0) setUsers(response.data);
        }).catch((err)=>{
          console.log(err)
      });
      }

  return (
   <>
   <div style={{backgroundColor:'green', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif'"}}>
    <div  style={{display: 'flex'}}>
        <div>
        <h2 style={{marginLeft:'20px'}}>
            <a href="home.html" style={{fontSize: '100%', color:'white'}}>STUDENT<br></br>MARKETPLACE</a></h2>
        </div>

        <div className='menu'>
            <div style={{marginRight:'10px'}}>
            <a href="home.html">Home</a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="aboutus.html">About Us</a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="contactus.html">Contact Us</a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="services.html">Services</a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="cart.html"><img className="cart" src={Cart} alt="Cart" width="20px" height="20px"/></a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="login.html" onClick={() => localStorage.removeItem("user")}>Logout</a>
            </div>
        </div>
    </div>
    </div>


    <div className="flex flex-wrap flex-center" style={{marginTop: '30px'}}>
      {users.map((user, key) => (
      <>    
        <div className="card" key={key}>
            <div><h1>{users.length>0 ? user.name : null}</h1></div>
            <div><img src={users.length>0 ? user.image : null} alt="Image" style={{width:'250px',height:'250px'}}/></div>
    
        </div>
        </>
        ))}
        </div>

        {users.length>0 ? <div style={{alignItems:'center',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
        <button style={{width: '150px'}}>
                <a href="joinclub.html" style={{color: 'brown'}}>Join More?</a>
         </button>
         </div>
        
         
         
           : <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}><h1>No clubs joined.</h1></div>}  
           

    </>
  )
}
