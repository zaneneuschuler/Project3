import React from "react";
// import ReactDOM from "react-dom";
// import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import "./ModalFormItem.css";

const CustomInput = styled('input')({
  padding: '0px 5px 5px 0',
  float: 'left',
  margin: '5px 0 20px 0',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.3)',
  width: 250,
})

const Label = styled('div')({
  fontSize: 14,
  textAlign: 'left'
})

const ModalFormItem = ({ label, name, value, type, onChangeFn }) => {
  return (
    <div>
      <Label>{label}</Label>
      <CustomInput
        name={name}
        value={value}
        type={type}
        onChange={onChangeFn}
      />
    </div>
  )
}
export default ModalFormItem;
