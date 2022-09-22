import React from 'react';

const SliderItem = (props) => (
    <div className='item' style={{ position: "relative" }}>
      <img src={props.src} className="tns-lazy-img" alt="slider item" />
     </div>
  )

export default SliderItem;