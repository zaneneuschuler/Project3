import React from "react";
import styled from 'react-emotion';
import "./ContactForm.css";

const FormInputItem = styled('input')({
  width: 400,
  height: 20,
  marginBottom: 5
})
const TextAreaInput = styled('input')({
  width: 400,
  height: 200,
  marginBottom: 5
})

export const FormInput = ({ label, name, value, type, placeHolder, onChangeFn }) => {
  return (
    <div>
      <FormInputItem
        label={label}
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
      <TextAreaInput
        label={label}
        name={name}
        value={value}
        type={type}
        placeholder={placeHolder}
        onChange={onChangeFn}
      />
    </div>
  )
}
