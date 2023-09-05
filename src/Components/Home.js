import React from 'react'
import One from '../assets/images/one.jpg';
import Two from '../assets/images/two.jpeg';
import Three from '../assets/images/three.jpeg';
import Four from '../assets/images/four.jpg';
import Five from '../assets/images/five.jpeg';
import Shop1 from '../assets/images/shop1.jpeg';
import Shop2 from '../assets/images/shop2.jpeg';
import Shop3 from '../assets/images/shop3.jpeg';
import Shop4 from '../assets/images/shop4.jpeg';
import Shop5 from '../assets/images/shop5.jpeg';
import Shop6 from '../assets/images/shop6.jpeg';
import Shop7 from '../assets/images/shop7.jpeg';
import Shop8 from '../assets/images/shop8.jpeg';
import Shop9 from '../assets/images/shop9.jpeg';
import Shop10 from '../assets/images/shop10.jpeg';
import Shop11 from '../assets/images/shop11.jpg';
import Shop12 from '../assets/images/shop12.jpg';
import Bat from '../assets/images/bat.jpg';
import Lit from '../assets/images/lit.jpg';
import Is from '../assets/images/is.jpg';
import Dance from '../assets/images/dance.jpg';
import Wel from '../assets/images/wel.jpg';

export default function Home() {

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
                <a href="login.html">Login</a>
            </div>
            <div style={{marginRight:'10px'}}>
                <a href="https://sxn8665.uta.cloud/blog/">Blog</a>
            </div>
        </div>
    </div>
    </div>

<div style={{fontSize: 'larger'}}> 
<h2>Welcome to the Student Marketplace!</h2>
<h2 style={{color:'brown'}}>Products</h2>
<div className="flex flex-wrap flex-center" style={{flexDirection:'column'}}>
  <div className="flex flex-wrap" style={{justifyContent:'space-between'}}>
</div>

    <div className="flex flex-wrap">
        <div><a href="login.html"><img src={Shop9} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop10} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop11} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop12} width="250px" height="250px"/></a></div>
    </div>
    <div className="flex flex-wrap">
        <div><a href="login.html"><img src={Shop1} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop2} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop3} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop4} width="250px" height="250px"/></a></div>
    </div>
    <div className="flex flex-wrap">
        <div><a href="login.html"><img src={Shop5} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop6} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop7} width="250px" height="250px"/></a></div>
        <div><a href="login.html"><img src={Shop8} width="250px" height="250px"/></a></div>
    </div>
</div>

<h2 style={{color:'brown'}}>Clubs</h2>
<div className="flex flex-wrap flex-center">
        <div style={{marginRight:'10px'}}><a href="login.html"><img src={Bat} width="150px" height="150px"/></a></div>
            <div style={{marginRight:'10px'}}><a href="login.html"><img src={Lit} width="150px" height="150px"/></a></div>
            <div style={{marginRight:'10px'}}><a href="login.html"><img src={Is} width="150px" height="150px"/></a></div>
            <div style={{marginRight:'10px'}}><a href="login.html"><img src={Dance} width="150px" height="150px"/></a></div>
            <div><a href="login.html"><img src={Wel} width="150px" height="150px"/></a></div>
</div>

</div>
</>
  )
}
