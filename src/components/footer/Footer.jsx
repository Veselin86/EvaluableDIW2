import classes from "./Footer.module.scss";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__links}>
          <a href="/">Política de Privacidad</a>
          <a href="/">Términos de Uso</a>
          <a href="/">Mapa del Sitio</a>
        </div>
        <img className={classes.footer__sm} src={facebook} alt="facebook" />
        <img className={classes.footer__sm} src={twitter} alt="twitter" />
        <img className={classes.footer__sm} src={instagram} alt="instagram" />
        <img className={classes.footer__sm} src={youtube} alt="youtube" />
      </div>
      <div className={classes.footer__rights}>
        © {new Date().getFullYear()} Maded by Veselin Vladimirov Veselinov. 
        Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
