import React from "react";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'
import Modal from '../ModalForm/ModalForm'


const BodyWrapper = styled('bodymain')({
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
  opacity: '0.9'
});

const BodyMain = () => (
  <BodyWrapper>
    <Modal />
  </BodyWrapper>
)

export default BodyMain;