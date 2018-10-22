import React, { Component } from "react";
import styled from 'react-emotion';
import {MainForm, FormTitle, FormBody, FormTextInput, FormTextArea, SubmitButton } from "../../components/FormComponents/FormComponents";

import API from "../../utils/API";


const divStyle = {
  margin: 'auto',
}
class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
    [name]: value
    })
}

  handleMessageSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.message) {
      let newMessage = {
       'name': this.state.name,        
        "email": this.state.email,
        "text": this.state.message,
      };
      API.submitMessage(newMessage)
      .then(this.setState({ messageSent: true }))
      .then(console.log('messageSent state: ', this.state.messageSent)
      )
      .catch(err => console.log('fail to log in: ', err))
    }
  };

    render() {
        return (
            <div style={divStyle}>
              {
                !this.state.messageSent ?
                
                <MainForm>
                <FormTitle><h3>Questions?</h3></FormTitle>
                <FormBody>
                  <FormTextInput
                    name="name"
                    label="Name"
                    type="text"
                    onChangeFn={this.handleInputChange}
                    value={this.state.name}
                    />
                    <FormTextInput
                      name="email"
                      label="Email"
                      type="text"
                      onChangeFn={this.handleInputChange}
                      value={this.state.email}
                    />

                    <FormTextArea
                      name="message"
                      label="Message"
                      type="text"
                      onChangeFn={this.handleInputChange}
                      value={this.state.message}
                    />

                <SubmitButton onClick={this.handleMessageSubmit}>
                  Submit
                </SubmitButton>
                </FormBody>
              </MainForm>
              : alert("Thank you for your inquiry. We will respond as soon as possible generally within a 24 hours.")
              }
            </div>
        );
    }
}

export default ContactForm;