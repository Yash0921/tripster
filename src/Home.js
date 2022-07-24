import React from 'react'
import './Home.css';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth ,Googleprovider,Facebookprovider} from './firebase';
import { FacebookAuthProvider } from "firebase/auth";

function Home() {

    const GooglesignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth,Googleprovider).then(result => {
            console.log(result);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    const FacbooksignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, Facebookprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  })
    }

  return (
    <>
        <div class="main">
    <div class="navbar">
        <div class="icon">
            <h2 class="logo">TripSter</h2>
        </div>

        <div class="menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICE</a></li>
                <li><a href="#">FEATURE</a></li>
                <li><a href="#">CONTACT</a></li>
                <li>
                    <input class="srch" type="search" name="" placeholder="Type To text"/>
                </li>
                <a href="#"> <button class="btn">Search</button></a>
                
            </ul>
            
        </div>
        
    
    </div>

    <div class="content">
        <h1>Book With Us & <br/><span>Book It Out</span> <br/>From here</h1>
        <p class="par">It's a Big World Out There,Go Explore. 
            <br/> We always make our customer happy by providing as many choices as possible. 
            <br/> Try a variety of benefits when using our services.With an easy and fast ticket purchase process </p>

            <button class="cn"><a href="#">JOIN US</a></button>

            <div class="form">
                <h2>Login Here</h2>
                <input type="email" name="email" placeholder="Enter Email Here"/>
                <input type="password" name="" placeholder="Enter Password"/>
                <button class="btn"><a href="#">Login</a> </button> 

                <p class="link">Don't have an account<br/>
                <a href="/">Sign up here</a></p>
               <div className='signIN'>

               
                <div className='iconss' onClick={(e)=>GooglesignIn(e)} > <i class="fa-brands fa-google"></i></div>
                <div className='iconss' onClick={(e)=>FacbooksignIn(e)} ><i class="fa-brands fa-facebook"></i></div>
                </div>

            </div>
    </div>
</div>
</>

  )
}

export default Home