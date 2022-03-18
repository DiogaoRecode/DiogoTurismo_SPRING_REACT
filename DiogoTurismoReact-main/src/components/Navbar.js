import React, {useState} from 'react';
import Logo from '../assets/diogoLogo.png';
import {Link} from 'react-router-dom';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import '../styles/Navbar.css';
import LoginIcon from '@mui/icons-material/Login';


function Navbar ()  {
  const [openLinks,setOpenLinks] = useState(false); //pelos states consigo definir o que será mostrado
  const toggleNavbar = () => {
setOpenLinks(!openLinks);
}
  return (
  <div className="navbar">
  <div className="leftSide" id={openLinks ? "open" : "close"}> {/*id funciona como if, nesse caso*/}
    <img src={Logo} />
    <div className="hiddenLinks">
    <Link to="/"> Home</Link>
  <Link to="/pacotes"> Pacotes</Link>
  <Link to="/sobre"> Sobre</Link>
  <Link to="/contato"> Contato</Link>
  <Link to="/lista"> Lista</Link>
  <Link to="/login"> <LoginIcon /></Link>
    </div>
  </div>
  <div className="rightSide">
  <Link to="/"> Home</Link>
  <Link to="/pacotes"> Pacotes</Link>
  <Link to="/sobre"> Sobre</Link>
  <Link to="/contato"> Contato</Link>
  <Link to="/lista"> Lista</Link>
  <Link to="/login"> <LoginIcon /></Link>
  <button onClick={toggleNavbar}>
  <ViewModuleIcon />
  </button>
  </div>
  </div>
  );
};

export default Navbar;



//import LoginIcon from '@mui/icons-material/Login';
//<Link to="/login"> <LoginIcon /></Link>