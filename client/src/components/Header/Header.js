import React from "react";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./Header.css";


const HeaderWrapper = styled('header')({
  width: '100%',
  height: '50px',
  backgroundColor: '#283e4a',
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '0 6px',
  color: 'aliceblue'
});

const FormWrapper = styled('form')({
  className: "login-form",
  flexWrap: 'wrap'
})


const Header = () => (
  <HeaderWrapper>
    <h1>YarddY</h1>
      <FormWrapper>
      <label for="login-email"></label>
      <input type="text" className="login-email" autoCapitalize="off" autoFocus="autofocus" tabindex="1" placeholder="Email"></input>
      <label for="login-password"></label>
      <input type="text" className="login-password" autoCapitalize="off" autoFocus="autofocus" aria-required="true" tabindex="1" placeholder="Password"></input>
      <input type="submit" className="login submit-button" tabindex="1" id="login-submit" value="Sign in"></input>
      </FormWrapper>
      <Link to="/">Home</Link>
      <Link to="/register">Join Now</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/yardsalelistings">Yard Sales</Link>
      <Link to="/yardsalecreation">Create A Yard Sale</Link>
  </HeaderWrapper>
)

export default Header;