import React from 'react'
import Instagram from '../assets/images/instagram.png';
import Facebook from '../assets/images/facebook.png';
import Mail from '../assets/images/mail.png';
import Phone from '../assets/images/phone.png';
import Carts from '../assets/images/cart.jpg';
import {useState} from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { baseURL } from '../util';


export default function ContactUs() {

    const [input, setInput] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInput(values => ({...values, [name] : value}));
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(input);
      Axios.post(baseURL+'contactus',input).then((res) => {
        console.log(res.data)
        if(res.data.status===1){
          alert("Message sent successfully");
        }
        else{
          alert("Message Unsucessful");
        }
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
                <a href="cart.html"><img className="cart" src={Carts} alt="Cart" width="20px" height="20px"/></a>
            </div>

            <div style={{marginRight:'10px'}}>
                <a href="login.html" onClick={() => localStorage.removeItem("user")}>Logout</a>
            </div>
        </div>
    </div>
    </div>


    <center><h1>CONTACT US</h1>
            
            <form method="post" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr><th><label htmlFor="name"><b>Name</b></label></th>
                        <td><input type="text" onChange={handleChange} name="name" id="name" required/></td></tr>
                    <tr><th><label htmlFor="message"><b>Your Message</b></label></th>
                        <td><textarea id="message" onChange={handleChange} name="message" rows="4" cols="20" required></textarea></td></tr>
                    <tr><th></th>
                        <td><button type="submit" id="mailbutton"><img src={Mail} width= "30" height="30" style={{transform:'none', transition:'none'}}/></button></td>
                    </tr>
                    </tbody>
                </table><br></br>
                 <a href="https://www.instagram.com/studentmarketplace/"><img src={Instagram} style={{transform:'none', transition:'none'}} width="50px" height="50px"/></a>
                 <a href="https://www.facebook.com/studentmarketplace"><img src={Facebook} width= "50px" height="50px" style={{transform:'none', transition:'none'}}/></a>
                 <a href="tel:+16355672121"><img src={Phone} width= "50" height="50" style={{transform:'none', transition:'none'}}/></a><br></br>
                 <address>
                 Student Marketplace,<br></br>
                 The University of Texas at Arlington, Arlington, Texas, 76010.
                 </address>
                 </form>
            </center>
    </>
  )
}
