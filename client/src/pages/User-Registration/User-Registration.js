import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'
import API from "../../utils/API";
import axios from "axios";
import { withCookies, Cookies } from 'react-cookie';

const UserRegistrationWrapper = styled('div')({
    
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    boxShadow: '0 0 15px 5px rgba(0,0,0,0.5)',
    background: 'lightgrey'
});
const SubmitButton = styled('button')({
    padding: 8,
    borderRadius: 5,
    background: "rgb(0,115,177)",
    color: 'white',
    float: 'left'
})
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

  constructor() {
    super();
    this.state = {
        First: '',
        Last: '',
        email: '',
        password: '',
        showSubmitForm: true,
        id: ''
  };

  }

  handleInputChange = (e) => {
      const { name, value } = e.target
      this.setState({
      [name]: value
      })
  }

  handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.First && this.state.Last && this.state.email && this.state.password) {
        let newUser = {
         'First': this.state.First,
          "Last": this.state.Last,
          "email": this.state.email,
          "password": this.state.password,
        };
        axios.post("/auth/signup", newUser).then(function (response) {
            document.cookie = `id=${response.data._id}`
            window.location.reload();
            
        })
          .then(this.setState({
              First: '',
              Last: '',
              email: '',
              password: '',
              showSubmitForm: false,
              id: getCookie("id")
          }))
          .catch(err => console.log(err));
      }
    };
  
  render() {
      return (
        <UserRegistrationWrapper>
          {
            this.state.showSubmitForm ? 
          <div>
              <h3>Sell anything here for free</h3>
              <h4>Let's started.  It's free!</h4>

              <ModalFormItem
                  name="First"
                  label="First name"
                  type="text"
                  onChangeFn={this.handleInputChange}
                  value={this.state.firstName}
              />

              <ModalFormItem
                  name="Last"
                  label="Last name"
                  type="text"
                  onChangeFn={this.handleInputChange}
                  value={this.state.lastName}
              />
              
              <ModalFormItem
                  name="email"
                  label="Email"
                  type="string"
                  onChangeFn={this.handleInputChange}
                  value={this.state.email}
              />
              
              <ModalFormItem
                  name="password"
                  label="Password"
                  type="password"
                  onChangeFn={this.handleInputChange}
                  value={this.state.password}
              />
              
              <SubmitButton onClick={this.handleFormSubmit}>
                Join Now
              </SubmitButton>
              
              </div>
              : null
            }
              </UserRegistrationWrapper>
      );
  }
}


export default UserRegistration