import React from 'react';
import '../styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
  <div className="footer">
    <div className="redeSocial">
      <WhatsAppIcon />
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
    </div>
    <p> &copy; 2021 DiogoTurismo</p>
  </div>
  );
}

export default Footer;
