import React from "react";
import {Link} from "react-router-dom";
import BannerImage from '../assets/Home.png';
import '../styles/Home.css';


function Home() {
  return (
  <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
    <div className="headerContainer">
    <h1>Bem vindo a Agência Diogo Turismo</h1>
    <br/>
    <p>Veja os nossos pacotes exclusivos de viagem</p>
    <Link to="/pacotes">
      <button>Reserve agora!</button>
    </Link>
    </div>
  </div>
  );
};

export default Home;
