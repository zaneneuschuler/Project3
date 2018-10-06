import React, { Component } from "react";
import styled from 'react-emotion';
import ModalFormItem from '../../components/ModalFormItem/ModalFormItem'

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
        fistName: '',
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

    handleSubmit = () => {
        // post my state to the api to save the contact form,
        // then set the state to some kind of success message
        // and show the user some feedback
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <UserRegistrationWrapper>
                <h3>Sell anything here for free</h3>
                <h4>Let's started.  It's free!</h4>

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
                <SubmitButton onClick={this.handleSubmit}>
                  Join Now
                </SubmitButton>
                
            </UserRegistrationWrapper>
        );
    }
}

export default UserRegistration