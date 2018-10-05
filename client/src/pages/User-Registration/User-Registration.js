import React, { Component } from "react";
import styled from 'react-emotion';

const UserRegistrationWrapper = styled('div')({
    display: "flex",
    justifyContent: "center"
});

class UserRegistration extends Component {


    render() {
        return (
            <UserRegistrationWrapper>
                <h1>Seller Registration</h1>
            </UserRegistrationWrapper>
        );
    }
}