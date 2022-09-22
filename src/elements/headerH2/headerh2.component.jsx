import React from 'react';
import './headerH2.scss';

const HeaderH2 = (props) => {
  return (
    <div className="section-header">
      <h2 className='header-title'>{props.title}</h2>
      <div className="text">{props.text}</div>
    </div>
  )
}

export default HeaderH2;