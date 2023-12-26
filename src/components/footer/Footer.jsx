import { useState, useEffect } from 'react';
import classes from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__links}>
          <a href="/">Política de Privacidad</a>
          <a href="/">Términos de Uso</a>
          <a href="/">Mapa del Sitio</a>
        </div>
        <div className={classes.footer__sm}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className={classes.footer__rights}>
          <p>© {dateTime.getFullYear()} Maded by Veselin Vladimirov Veselinov</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
      <div className={classes.footer__datetime}>
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </div>
    </footer>
  );
};

export default Footer;