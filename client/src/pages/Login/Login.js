import React, { Component } from "react";
import styled from 'react-emotion';
import Header from "../../components/Header/Header";

const LoginWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
});


class Login extends Component {


    render() {
        return (
            <div>
                <LoginWrapper>
                    {/* <Header /> */}

                    {/* <Jumbotron />

                    <List /> */}
                        
                </LoginWrapper>
            </div>
        );
    }
}

export default Login;