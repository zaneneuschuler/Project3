import React from "react";
// import ReactDOM from "react-dom";
// import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./ModalFormItem.css";

const CustomInput = styled('input')({
  padding: '5px 5px 5px 0',
  float: 'left',
  margin: '10px 0 20px 0',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.3)',
  width: 250,
  height: 20
})

const Label = styled('div')({
  fontSize: 10,
  padding: '5px 5px 5px 0',
  textAlign: 'left',
  width: 250,
  height: 20
})

<<<<<<< HEAD
const ModalFormItem = ({ label, name, value, type, onChangeFn }) => {
=======
const ModalFormItem = ({ label, name, value, onChangeFn, type }) => {
>>>>>>> master
  return (
    <div>
      <Label>{label}</Label>
      <CustomInput
        name={name}
        value={value}
        type={type}
        onChange={onChangeFn}
        type={type}
      />
    </div>
  )
}
export default ModalFormItem;
