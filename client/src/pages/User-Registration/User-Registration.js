import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'
import API from "../../utils/API";
import axios from "axios";


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
        showSubmitForm: true,
        id: ""
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
            alert(JSON.stringify(response.data));
        })
        //   .then(this.setState({
        //       First: '',
        //       Last: '',
        //       email: '',
        //       password: '',
        //       showSubmitForm: false
        //   }))
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
                  type="password"
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