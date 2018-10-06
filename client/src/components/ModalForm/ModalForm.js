import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./ModalForm.css";


const ModalOverlayWrapper = styled('ModalOverlay')({
  width: '330px',
  height: '350px',
  background: 'lightgray',
  boxShadow: '0 2px 2px 2px rgba(0,0,0,.3)',
  textAlign: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '30px 20px',
  color: 'black',
  flexDirection: 'column',
  margin: 'auto'
});

const ModalHeader = styled('ModalHeader')({
  flex: 1
})

const ModalForm = styled('ModalForm')({
  display: 'flex',
  flexFlow: 'row wrap',
  padding: '0 24px',
  flex: 2,
  width: '100%',
  // justifyContent: 'center'
})

const labelStyle = {
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
};

const inputStyle = {
  width: '100%'
}


const Modal = () => (
  <ModalOverlayWrapper className="modal-overlay">
      <ModalHeader>
        <h3>Place to sell anything for free</h3>
        <h6>Get started - it's free.</h6>
      </ModalHeader>
      <ModalForm>
        <div>
          <label style={labelStyle}>First name</label>
          <input type="text" id="user-firstname" style={inputStyle}></input>
        </div>
        <div>
          <label style={labelStyle}>Last name</label>
          <input type="text" id="user-lastname" style={inputStyle}></input>
        </div>
        <div>  
          <label style={labelStyle}>Email</label>
          <input type="text" id="user-email" style={inputStyle}></input>
        </div>
        <div>
          <label style={labelStyle}>Password (6 or more characters)</label>
          <input type="text" id="user-password" style={inputStyle}></input>
        </div>
        <div>
          <input type="submit" id="join-submit" value="Join Now"></input>
        </div>
      </ModalForm>
    
    
  </ModalOverlayWrapper>
)

export default Modal;