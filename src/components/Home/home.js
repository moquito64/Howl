import logo from '../../assets/images/gray-wolf-logo.svg';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';
import './home.css'
import React from 'react';

const Home = () => {
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
        <NavLink activeClassName="active" className="login-button" to="/login">Login</NavLink>
        </div>
      </header>
    </div>
    );
}
 
export default Home;