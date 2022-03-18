import React from "react";
import DiogoTurismo from '../assets/Sobre.jpg';
import "../styles/Sobre.css";

function Sobre() {
  return (
    <div className="sobre">
      <div
        className="sobreTop"
        style={{ backgroundImage: `url(${DiogoTurismo})` }}
      ></div>
      <div className="sobreBottom">
        <h1>Sobre nós</h1>
        <p>
        Atenta às necessidades de seus clientes, em 2022, o Diogo  Turismo reformulou o seu portal, pensando em criar um diálogo entre o usuário e a empresa. Mais que um design arrojado, – o quinto desde a criação da primeira loja virtual, no ano de 2021– ele ganha uma nova dinâmica e um novo conceito de navegação, garantindo usabilidade e tecnologia.Isso graças, a parceria com a Recode!
        <br/>

A partir de agora, você confere visual moderno, navegação intuitiva, conteúdos ainda mais completos e atraentes, conceito editorial, produtos reunidos de maneira organizada para consulta ágil, sistema de busca inteligente com opção de refinamento e promoções imperdíveis. Destaque também à integração com as redes sociais.

Embarque nessa com a gente, aperte os cintos e excelente aventura!
        </p>
      </div>
    </div>
  );
}

export default Sobre;