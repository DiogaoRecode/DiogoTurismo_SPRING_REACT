import React from 'react';
import '../styles/Logout.css';
import {logout,selectUser} from "../features/userSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BannerImage from '../assets/Login.jpg';

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
<div className="logout" style={{backgroundImage:`url(${BannerImage})`}}>
<form className="login_form">
  <h1>Bem vindo <span className="user_name">{user.name}</span> !
  </h1>
  <button className="logout_button" onClick={(e) => handleLogout(e)}>Logout</button>
  </form>
</div>
  );
};

export default Logout;