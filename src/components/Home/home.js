import logo from '../../assets/images/gray-wolf-logo.svg';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import React from 'react';
import './home.css'
 
const home = () => {
    return (
    <div className="App">
      <Helmet>
        <title>Howl | Login</title>
      </Helmet>
      <header className="App-header">
        <FadeIn>
        <img src={logo} className="App-logo" alt="logo" />
        </FadeIn>
        <h3 className="site-name">Howl</h3>
        <p className="landing-subtext">Create a Howl</p>
        <div className="landingpage-button">
        {/*<button class="signup-button"> Sign Up </button>*/}
        <button className="login-button" type="button">
         Login!
       </button>
        </div>
      </header>
    </div>
    );
}
 
export default home;