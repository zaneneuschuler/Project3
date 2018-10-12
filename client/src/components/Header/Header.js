import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./Header.css";
import API from '../../utils/API'
import LoginFormItem from '../../components/LoginForm'


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
  color: 'white'
});

const FormWrapper = styled('form')({
  className: "login-form",
  flexWrap: 'wrap',
  display: 'flex'
})

const LoginButton = styled('button')({
  background: "rgb(0,115,177)",
  color: 'white',
  height: 26
})

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      type: '',
      showLoginForm: true
    };
  }

  handleInputChange = (e) => {
      const { name, value } = e.target
      this.setState({
      [name]: value
      })
  }

  handleFormLogin = event => {
      event.preventDefault();
      if (this.state.email && this.state.password) {
        API.login({
          "email": this.state.email,
          "password": this.state.password,
        })
          .then(console.log('user login info:  ', JSON.stringify(this.state)))
          .then(this.setState({
            showLoginForm: false
          }))
          .catch(err => console.log(err));
      }
    };

  render() {
    return (
      <HeaderWrapper>
        <h1>YarddY</h1>        
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/yardsalelistings">Yard Sales</Link>
          <Link to="/yardsalecreation">Create A Yard Sale</Link>
            {
              this.state.showLoginForm ?
              <div>
                <FormWrapper>
                  <LoginFormItem
                    name="email"
                    value={this.state.email}
                    type="text"
                    placeHolder="Email"
                    onChangeFn={this.handleInputChange}
                  />
                  
                  <LoginFormItem
                    name="password"
                    value={this.state.password}
                    type="password"
                    placeHolder="Password"
                    onChangeFn={this.handleInputChange}
                  />
                  <div>
                    <LoginButton onClick={this.handleFormLogin}>Log In</LoginButton>
                  </div>
                </FormWrapper>
              </div>
              : null
          }
      </HeaderWrapper>
    )
  }
}
export default Header;

