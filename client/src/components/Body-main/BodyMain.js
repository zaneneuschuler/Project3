import React from "react";
// import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'
// import Modal from '../ModalForm/ModalForm'
import UserRegistration from '../../pages/User-Registration/User-Registration';


const BodyWrapper = styled('div')({
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
  // opacity: '0.7'
});

const BodyMain = () => (
  <BodyWrapper>
    <UserRegistration/>
  </BodyWrapper>
)

export default BodyMain;