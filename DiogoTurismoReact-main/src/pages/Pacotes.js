import React from 'react';
import { MenuPacote } from '../helpers/MenuPacote';
import MenuItem from  '../components/MenuItem';
import '../styles/Pacotes.css';
import BannerImage from '../assets/Pacotes.jpg';

const Pacotes = () => {
  return (
  <div className="pacotes" style={{backgroundImage:`url(${BannerImage})`}}>
   <h1 className="pacotesTitle">Pacotes Promocionais</h1>
   <div className="menuList"> {MenuPacote.map((menuItem,key) => {
     return (<MenuItem 
      key={key} 
      image={menuItem.image} 
      name={menuItem.name} 
      price={menuItem.price}
      text={menuItem.text}/>
     );
})}
   </div>
  </div>
  );
}

export default Pacotes;

