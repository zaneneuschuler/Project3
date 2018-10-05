import React from "react";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'


const BodyWrapper = styled('bodymain')({
  width: '100%',
  height: 400,
  backgroundColor: 'rgba(0,0,0,.3);',
  textAlign: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '24 12px',
  backgroundImage: `url${collage}`
});

const FormWrapper = styled('form')({
  className: "login-form",
  flexWrap: 'wrap'
})


const BodyMain = () => (
  <BodyWrapper>
    {/* <h1>Main body</h1> */}
    <img src={collage} />
      
    
  </BodyWrapper>
)

export default BodyMain;