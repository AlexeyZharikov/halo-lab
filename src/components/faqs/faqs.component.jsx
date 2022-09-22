import React, { useState } from 'react';
import HeaderH2 from '../../elements/headerH2/headerh2.component';
import Button from '../../elements/button/button.component';
import AccordionItem from './accordionItems/aacccordionItems.component';
import items from './items';
import './faqs.scss';
import './faqs.mobile.scss';

const ItemsArr = items.map(item => <AccordionItem title={item.ttile} text={item.text} key={item.id}/>)

const Faqs = () => {
  return (
    <div className="faqs section" id="faqs">
      <div className="container">
        <div className="faqs-inner">
          <div className="header">
            <HeaderH2 title="Ready to Get started?" text="When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."/>
            <Button href="/" className="faqs-btn" title="Contact us"/>
          </div>
          <div className="accordion">
            {ItemsArr}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs;