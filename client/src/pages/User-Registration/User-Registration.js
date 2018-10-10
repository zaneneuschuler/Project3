import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'
import API from "../../utils/API";

const UserRegistrationWrapper = styled('div')({
    
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    background: 'lightgray'
});
const SubmitButton = styled('button')({
    padding: 8,
    borderRadius: 5,
    background: "rgb(0,115,177)",
    color: 'white',
    float: 'left'
})


class UserRegistration extends Component {

  constructor() {
    super();
    this.state = {
        First: '',
        Last: '',
        email: '',
        password: '',
        showSubmitForm: true
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
        API.createNewUser({
         'First': this.state.First,
          "Last": this.state.Last,
          "email": this.state.email,
          "password": this.state.password,
        })
          .then(console.log('new user:  ', JSON.stringify(this.state)))
          .then(this.setState({
              First: '',
              Last: '',
              email: '',
              password: '',
              showSubmitForm: false
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
                  onChangeFn={this.handleInputChange}
                  value={this.state.firstName}
              />

              <ModalFormItem
                  name="Last"
                  label="Last name"
                  onChangeFn={this.handleInputChange}
                  value={this.state.lastName}
              />
              
              <ModalFormItem
                  name="email"
                  label="Email"
                  onChangeFn={this.handleInputChange}
                  value={this.state.email}
              />
              
              <ModalFormItem
                  name="password"
                  label="Password"
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