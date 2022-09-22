import React, { useState } from 'react';
import Button from '../../../elements/button/button.component';
import './accordionItem.scss'

const AccordionItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="item-header" onClick={() => setIsActive(!isActive)}>
        <h4>{props.title}</h4>
        <Button className="accordion-btm" title={isActive ? '-' : '+'}/>
        {/* <div className='accordion-btm'>{isActive ? '-' : '+'}</div> */}
      </div>
      {isActive && <div className="item-text">
        {props.text}
      </div>}

    </div>
  )
}

export default AccordionItem;