
import React from 'react';


const MenuItem = ({image,text,name,price}) => {
  return (
  <div className="menuItem">
    <div style={{backgroundImage:`url(${image})`}}></div>
    <h1>{name}</h1>
    <p>{text}</p>
    <h2><span>R$ {price}</span></h2>
    
  </div>
  );
};

export default MenuItem;
