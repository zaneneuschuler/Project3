import React, { Component } from "react";
import styled from 'react-emotion';
import { FormInput, FormTextArea } from "../../components/ContactFormItem/ContactFormItem";

import collage from '../../images/collage.jpg'
import API from "../../utils/API";


const BodyWrapper = styled('div')({
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
  // opacity: '0.7'
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
      message: ''
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
        "message": this.state.message,
      };
      API.submitMessage(newMessage)
      .then(alert(newMessage))
      .catch(err => console.log('fail to log in: ', err));
    }
  };

    render() {
        return (
            <div>
              <BodyWrapper>
                <ContactWrapper>
                  <h3>Questions?</h3>
                  <FormInput
                    name="name"
                    label="Name"
                    type="text"
                    onChangeFn={this.handelInputChange}
                    value={this.state.name}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    type="text"
                    onChangeFn={this.handelInputChange}
                    value={this.state.email}
                  />

                  <FormTextArea
                    name="message"
                    label="Message"
                    type="text"
                    onChangeFn={this.handelInputChange}
                    value={this.state.message}
                  />

              <SubmitButton onClick={this.handleMessageSubmit}>
                Submit
              </SubmitButton>
              
                </ContactWrapper>
              </BodyWrapper> 
            </div>
        );
    }
}

export default ContactForm;