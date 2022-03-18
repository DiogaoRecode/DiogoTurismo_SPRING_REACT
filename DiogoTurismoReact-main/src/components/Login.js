import React ,{useState} from 'react';
import '../styles/Login.css';
import BannerImage from '../assets/Login.jpg';
import { useDispatch } from 'react-redux';
import {login} from "../features/userSlice";


const Login = () => {
  const [name,setName] = useState ("");
  const [email,setEmail] = useState ("");
  const [password,setPassword] = useState ("");

  const dispatch = useDispatch();

 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(login({
     name:name,
     email:email,
     password:password,
     loggedIn:true,
   })
   );
};


    return (
  <div className="login" style={{backgroundImage:`url(${BannerImage})`}}>
    <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
      <h1>Faça o seu login!</h1>
      <input 
      type="name" 
       placeholder="Nome"  
       value={name} 
       onChange ={(e) => setName(e.target.value)} />
      <input type="email"  
      placeholder="Email" value={email}
      onChange ={(e) => setEmail(e.target.value)} />
      <input type="password"  
      placeholder="Senha"  value={password}
      onChange ={(e) => setPassword(e.target.value)} />
      <button type="submit" className="submit_btn"> Logar </button>
    </form>

  </div>
  );
};

export default Login;
