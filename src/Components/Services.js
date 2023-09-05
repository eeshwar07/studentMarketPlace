import React, { Fragment } from 'react'
import Header from './Header'
import StudentClub from '../assets/images/student clubs.png';
import Product from '../assets/images/products.jfif';
import Carts from '../assets/images/cart.jpg';

export default function Services() {
  return (
    <Fragment>
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

    <div style={{marginTop:'120px'}}>
                <center><h1>SERVICES</h1></center>
                <center><p>
                    STUDENT EMPLOYMENT<br></br><br></br>
                    JOIN ORGANIZATIONS OR CLUBS<br></br><br></br>
                    ONLINE STORE<br></br><br></br>
                    WORKSHOPS<br></br><br></br>
                    STUDENT PUBLICATIONS<br></br><br></br>
                    JOB FAIR<br></br><br></br>
                    LEADERSHIP PROGRAMS<br></br><br></br>
                </p></center>
                </div>

                <div className="sets">
                    <div className="rows">   
                      <div className="columns">    
                       <div className="card">
                           <img src={StudentClub} alt="Student clubs" width="250px" height="200px"/>
                           <p>Want to get involved but don't know where to begin?You came to the right place!</p>
                           <p><button><a href="student1.html">Join Now!</a></button></p>
                       </div>
                      </div>
                     </div>
              
                     <div className="rows">   
                      <div className="columns">    
                       <div className="card">
                           <img src={Product} alt="Products" width="250px" height="200px"/>
                           <p>Looking for a place to buys products for daily use?</p>
                           <p><button><a href="service_afterlogin.html">Visit Now!</a></button></p>
                       </div>
                      </div>
                     </div>
                    </div>
    </Fragment>
  )
}
