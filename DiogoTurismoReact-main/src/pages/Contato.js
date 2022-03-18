import BannerImage from '../assets/Contato.jpg';
import '../styles/Contato.css';
import React, { useEffect, useState } from 'react';
import ContatoService from '../services/ContatoService';
import {useParams} from 'react-router-dom'; 
import {toast} from 'react-toastify';

const AddContatoComponent = () => {

  const [nomeCompleto,setNomeCompleto] = useState('')
  const [emailId,setEmailId] = useState('')
  const [mensagemId,setMensagemId] = useState('')
  //const navigate = useNavigate();    //Antes usava o comando useHistory
  const {id} = useParams();
 
 
  //adicionar  ou atualizar formulario
  const saveOrUpdateContato = (e) =>{
  e.preventDefault();
 
   const contato = {nomeCompleto, emailId, mensagemId}
 
 if(id){
   ContatoService.updateContato(id, contato).then((response) => {
    toast.success("Contato atualizado com sucesso!")

 }).catch(error => {
     console.log(error)
 })
 }else{
   ContatoService.createContato(contato).then((response) =>{
    
     console.log(response.data)
     toast.success("Contato adicionado com sucesso!")
     //navigate('/')  //comando que volta a página de lista de formulario
 
   }).catch(error => {
     console.log(error)
   })

 }
 
  }
 
 
 //busca formulario para edita lo
 
 
 useEffect (() =>  {
 
   
 ContatoService.getContatoById(id).then((response) => {
 setNomeCompleto(response.data.nomeCompleto)
 setEmailId(response.data.emailId)
 setMensagemId(response.data.mensagemId)
 

 }).catch(error => {
   console.log(error)
 })
 },[])
 
 //usei esse método para mudar o texto de adicionar p/ editar
 const title = () => {     
 
   if(id){
       return <h1 className = "text-center">Editar Contato</h1>
   }else{
       return <h1 className = "text-center">Adicionar Contato</h1>
   }
 }
 





  return (
  <div className="contact">
<div className= "leftSide" style={{backgroundImage:`url(${BannerImage})`}}></div>
<div className="rightSide">
<h1> <span>Contato</span></h1>
<form id="contact-form" method="POST">
<label htmlFor="name">Nome completo</label>
<input
                  type= "text"
                  placeholder= "Escreva o seu nome completo"
                  name="nomeCompleto"
                  className="form-control"
                  value = {nomeCompleto}
                  onChange = {(e) => setNomeCompleto(e.target.value)}
                  >
                  </input>
<label htmlFor="email">Email</label>
<input
                  type= "email"
                  placeholder= "Escreva o seu email"
                  name="emailId"
                  className="form-control"
                  value = {emailId}
                  onChange = {(e) => setEmailId(e.target.value)}
                  >
                  </input>
<label htmlFor="message">Messagem</label>
<input
                  type= "text"
                  placeholder= "Deixe a sua mensagem"
                  name="mensagemId"
                  className="form-control"
                  value = {mensagemId}
                  onChange = {(e) => setMensagemId(e.target.value)}
                  >
                  </input>
                  <button className="btn btn-primary" onClick={(e) => saveOrUpdateContato(e)}>Enviar</button>
                

</form>

</div>
  </div>
  );
};

export default AddContatoComponent;
