import React from 'react'

export default function Header() {
  return (
    <>
    <div
        style={{backgroundColor: 'green', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif'"}}>
        <div style={{display: 'flex'}}>
            <div>
                <h2 style={{marginLeft:'20px'}}>
                    <a href="home.html" style={{fontSize: '100%', color:'white'}}>STUDENT<br></br>MARKETPLACE</a>
                </h2>
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
                    <a href="http://sxn8665.uta.cloud/blog/">Blog</a>
                </div>

                <div style={{marginRight:'10px'}}>
                    <a href="login.html">Login</a>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}
