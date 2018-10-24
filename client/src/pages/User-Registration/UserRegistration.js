import React, { Component } from "react";
import styled from 'react-emotion';
import { MainForm, FormTitle, FormBody, FormTextInput, FormTextArea, SubmitButton } from "../../components/FormComponents/FormComponents";


const divStyle = {
  margin: 'auto',
  // marginTop: '140px'
}

const spanStyle = {
  color: 'rgba(0,0,0,0.6)',
  textAlign: 'center',
  display: 'block',
  fontSize: 14,
  paddingBottom: 10
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
            <MainForm>
              <FormTitle>
                <h3>Sell stuff for Free!</h3>
                <h4>Sign up Now</h4>
              </FormTitle>

              <FormBody>
                <FormTextInput
                  name="first"
                  label="First Name:"
                  type="text"
                  onChangeFn={this.props.handleInputChange}
                  value={this.props.first}
                />

                <FormTextInput
                    name="last"
                    label="Last Name:"
                    type="text"
                    onChangeFn={this.props.handleInputChange}
                    value={this.props.last}
                />
              
                <FormTextInput
                    name="email"
                    label="Email:"
                    type="string"
                    onChangeFn={this.props.handleInputChange}
                    value={this.props.email}
                />
                
                <FormTextInput
                    name="password"
                    label="Password:"
                    type="password"
                    onChangeFn={this.props.handleInputChange}
                    value={this.props.password}
                />
                <span className="agreement" style={spanStyle}>
                  By clicking Join now, you agree to the PaiMai User Agreement, Privacy Policy, and Cookie Policy.
                </span>
              
                <SubmitButton onClick={this.props.handleRegistrationSubmit}>
                  Join Now
                </SubmitButton>
              </FormBody>
            </MainForm>
            : null
            }
            </div>
      );
  }
}


export default UserRegistration