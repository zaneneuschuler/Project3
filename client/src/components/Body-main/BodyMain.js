import React from "react";
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./BodyMain.css";
import collage from '../../images/collage.jpg'


const BodyWrapper = styled('bodymain')({
  width: '100%',
  height: 550,
  backgroundColor: 'rgba(0,0,0,.3);',
  textAlign: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '24 12px',
  backgroundSize: 'cover',
  background: `url("${collage}")`,
  opacity: '0.8'
});

const BodyMain = () => (
  <BodyWrapper>
    <h1></h1>
  </BodyWrapper>
)

export default BodyMain;