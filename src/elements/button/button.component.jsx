import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
      <button className={props.className}>{props.title}</button>
    
  )
}

export default Button;