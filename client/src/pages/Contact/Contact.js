import React, { Component } from "react";
import styled from 'react-emotion';
import { FormInput, FormTextArea } from "../../components/ContactFormItem/ContactFormItem";

import collage from '../../images/collage.jpg'
import API from "../../utils/API";


const BodyWrapper = styled('div')({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`
});

const ContactWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    margin: 'auto',
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
      .catch(err => console.log('fail to log in: ', err));
    }
  };

    render() {
        return (
            <div>
              {
                !this.state.messageSent ?
                <BodyWrapper>
                  <ContactWrapper>
                    <h3>Questions?</h3>
                    <FormInput
                      name="name"
                      label="Name"
                      type="text"
                      onChangeFn={this.handleInputChange}
                      value={this.state.name}
                    />
                    <FormInput
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
                
                  </ContactWrapper>
                </BodyWrapper>
                : <div><h3>Thank you for your inquiry. We will respond as soon as possible generally within a few hours. If you do not hear from us within 24 hours, kindly contact </h3> <h2>Zane Neuschuler</h2> <h3>as your message did not get to us.</h3></div>
              }
            </div>
        );
    }
}

export default ContactForm;