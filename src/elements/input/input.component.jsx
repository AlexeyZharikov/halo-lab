import React from 'react';
import './input.scss';

const Input = (props) => {
  return (
    <input type="text" placeholder={props.placeholder}/>
  )
}

export default Input;