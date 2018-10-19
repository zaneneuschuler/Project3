import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'
import axios from "axios";
import API from "../../utils/API";

const UserRegistrationWrapper = styled('div')({
    
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    boxShadow: '0 0 15px 5px rgba(0,0,0,0.5)',
    background: '#f6f8fa'
});
const SubmitButton = styled('button')({
    padding: 8,
    background: "rgb(0,115,177)",
    color: 'white',
    float: 'left',
    width: 260
})

const divStyle = {
  margin: 'auto',
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


class UserRegistration extends Component {

  constructor(props) {
    super(props);
    this.state = {
        First: '',
        Last: '',
        email: '',
        password: '',
        showRegistrationForm: true,
        id: '',
        loggedIn: false
  };
    
  }
  componentDidMount = () => {
    console.log(getCookie("id"));
    if(getCookie("id")){
      this.setState({
        showRegistrationForm: false
      })
    }
  }
  
    render() {
      
      return (
          <div style={divStyle}>
          {
            !this.props.loggedIn ? 
          <UserRegistrationWrapper>
              <h3>Sell stuff for Free!</h3>
              <h4>Sign up Now</h4>

              <ModalFormItem
                  name="first"
                  label="First Name:"
                  type="text"
                  onChangeFn={this.props.handleInputChange}
                  value={this.props.first}
              />

              <ModalFormItem
                  name="last"
                  label="Last Name:"
                  type="text"
                  onChangeFn={this.props.handleInputChange}
                  value={this.props.last}
              />
              
              <ModalFormItem
                  name="email"
                  label="Email:"
                  type="string"
                  onChangeFn={this.props.handleInputChange}
                  value={this.props.email}
              />
              
              <ModalFormItem
                  name="password"
                  label="Password:"
                  type="password"
                  onChangeFn={this.props.handleInputChange}
                  value={this.props.password}
              />
              
              <SubmitButton onClick={this.props.handleRegistrationSubmit}>
                Join Now
              </SubmitButton>
              
              </UserRegistrationWrapper>
              : null
            }
            </div>
      );
  }
}


export default UserRegistration