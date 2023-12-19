import classes from "./Header.module.scss";
import logo from "../../images/logo.png";
// import tale from '../../tales/talesDB.json';

// import { logo } from "../../images/logo.png";
// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__logo}>
          <img className={classes.header__logoImg} src={logo} alt="logo" />
          <h2>Cuentos infantiles</h2>
        </div>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <a href="/">Cuento 1</a>
            </li>
            <li>
              <a href="/">Cuento 2</a>
            </li>
            <li>
              <a href="/">Cuento 3</a>
            </li>
          </ul>
        </nav>
        {/* <div className={classes.header__button}>
          <BiMenuAltRight />
          <button>CTA Page</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;