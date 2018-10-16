import React from "react";
import styled from 'react-emotion';
import "./ContactFormItem.css";

const FormInputItem = styled('input')({
  padding: '0px 5px 5px 0',
  float: 'left',
  margin: '5px 0 20px 0',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.3)',
  width: 250,
})
const TextAreaInput = styled('input')({
  padding: '0px 5px 5px 0',
  float: 'left',
  margin: '5px 0 20px 0',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.3)',
  width: 250,
  height: 200,
  marginBottom: 5
})

const Label = styled('div')({
  fontSize: 14,
  textAlign: 'left'
})

export const FormInput = ({ label, name, value, type, placeHolder, onChangeFn }) => {
  return (
    <div>
      <Label>{label}</Label>
      <FormInputItem
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={onChangeFn}
      />
    </div>
  )
}

export const FormTextArea = ({ label, name, value, type, placeHolder, onChangeFn }) => {
  return (
    <div>
      <Label>{label}</Label>
      <TextAreaInput
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={onChangeFn}
      />
    </div>
  )
}
