import React, { Component, Link } from "react";
import styled from 'react-emotion';
import Header from "../../components/Header/Header";
import API from "../../utils/API";

const LoginWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
});




class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            signedIn: false,
            showSignInFields: true
      };
    
  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
    [name]: value
    })
}

handleLogin = event => {
  event.preventDefault();
  if (this.state.email && this.state.password) {
    API.login({
      "email": this.state.email,
      "password": this.state.password,
    })
      .then(console.log('logged in info:  ', JSON.stringify(this.state)))
      .then(this.setState({
          email: '',
          password: '',
          signedIn: true,
          showSignInFields: false
      }))
      .catch(err => console.log(err));
  }
}



      }
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