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

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
        [name]: value
        })
    }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName  && this.state.email  && this.state.password) {
      API.createNewUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }))
        .catch(err => console.log(err));
    }
  };

    render() {
        return (
            <UserRegistrationWrapper>
                <h3>Sell anything here for free</h3>
                <h4>Let's started.  It's free!</h4>
            <form>
            
                <ModalFormItem
                    name="firstName"
                    label="First name"
                    onChangeFn={this.handleChange}
                    value={this.state.firstName}
                />

                <ModalFormItem
                    name="lastName"
                    label="Last name"
                    onChangeFn={this.handleChange}
                    value={this.state.lastName}
                />
                
                <ModalFormItem
                    name="email"
                    label="Email"
                    onChangeFn={this.handleChange}
                    value={this.state.email}
                />
                
                <ModalFormItem
                    name="password"
                    label="Password"
                    onChangeFn={this.handleChange}
                    value={this.state.password}
                />
                <SubmitButton onClick={this.handleFormSubmit}>
                  Join Now
                </SubmitButton>
                    
            </form>
            </UserRegistrationWrapper>
        );
    }
}

export default UserRegistration