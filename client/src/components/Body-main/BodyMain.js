import React from "react";
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'
import UserRegistration from '../../pages/User-Registration/UserRegistration';
import ContactForm from '../../pages/Contact/Contact';

const BodyWrapper = styled('div')({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
});

const BodyMain = (props) => (
  <BodyWrapper>
    
    {
      !props.showContactForm ?
        <UserRegistration id={props.id} handleRegistrationSubmit={props.handleRegistrationSubmit} handleInputChange={props.handleInputChange} loggedIn={props.loggedIn} last={props.last} first={props.first} email={props.email} password={props.password}/>
      : 
        <ContactForm id={props.id} handleInputChange={props.handleInputChange} loggedIn={props.loggedIn} email={props.email} password={props.password}/>
    }
  </BodyWrapper>

)

export default BodyMain;