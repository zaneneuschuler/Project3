import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'
// import API from "../../utils/API";
import axios from "axios";
import API from "../../utils/API";
// import { withCookies, Cookies } from 'react-cookie';

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
// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


class UserRegistration extends Component {

  constructor() {
    super();
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

  handleInputChange = (e) => {
      const { name, value } = e.target
      this.setState({
      [name]: value
      })
  }

  handleRegistrationSubmit = event => {
      event.preventDefault();
      if (this.state.First && this.state.Last && this.state.email && this.state.password) {
        let newUser = {
         'First': this.state.First,
          "Last": this.state.Last,
          "email": this.state.email,
          "password": this.state.password,
        };
        
        axios.post("/auth/signup", newUser)
        .then(response => {
          var userId = response.data._id
          console.log('reponse.id: ', userId)
          this.setState({ id: userId }, function (){
            console.log('this.state.id', this.state.id)
            this.state.id ? 
              API.login({
                'email': this.state.email,
                'password': this.state.password
              })
              : console.log('userId is empty')
            
              this.setState({
                  showRegistrationForm: false,
                  showSignInForm: false,
                  loggedIn: true
                }, function(){
                  console.log('setData: ', this.state)
                })
              })
            })
            .catch(err => console.log(err));
      }
    };
  
    render() {
      
      return (
          <div style={divStyle}>
          {
            this.state.showRegistrationForm ? 
          <UserRegistrationWrapper>
              <h3>Sell stuff for Free!</h3>
              <h4>Sign up Now</h4>

              <ModalFormItem
                  name="First"
                  label="First Name:"
                  type="text"
                  onChangeFn={this.handleInputChange}
                  value={this.state.firstName}
              />

              <ModalFormItem
                  name="Last"
                  label="Last Name:"
                  type="text"
                  onChangeFn={this.handleInputChange}
                  value={this.state.lastName}
              />
              
              <ModalFormItem
                  name="email"
                  label="Email:"
                  type="string"
                  onChangeFn={this.handleInputChange}
                  value={this.state.email}
              />
              
              <ModalFormItem
                  name="password"
                  label="Password:"
                  type="password"
                  onChangeFn={this.handleInputChange}
                  value={this.state.password}
              />
              
              <SubmitButton onClick={this.handleRegistrationSubmit}>
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