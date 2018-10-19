import React from "react";
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'
import UserRegistration from '../../pages/User-Registration/UserRegistration';



const BodyWrapper = styled('div')({
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
});

const BodyMain = (props) => (
  <BodyWrapper>
    <UserRegistration id={props.id} handleRegistrationSubmit={props.handleRegistrationSubmit} handleInputChange={props.handleInputChange} loggedIn={props.loggedIn} last={props.last} first={props.first} email={props.email} password={props.password}/>
  </BodyWrapper>
)

export default BodyMain;