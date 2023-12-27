import classes from "./Header.module.scss";
import logo from "/images/logo.png";
import tales from "../../talesDB/talesDB.json";
import sunIcon from "/images/sun.png";
import moonIcon from "/images/moon.png";

// import { logo } from "../../images/logo.png";
// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";

const Header = ({ onSelectTale, onSunClick, onMoonClick}) => {
  
  const imgStyle = { width: "80px", height: "80px"};
  
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__moon}>
          <img
            src={moonIcon}
            alt="Luna"
            onClick={onMoonClick}
            className={classes.background__night}
            style={imgStyle}
          />
        </div>
        <div className={classes.header__logo}>
          <h2>EL MUNDO DE CUENTOS</h2>
        </div>
        <div>
          <img src={logo} alt="logo" className={classes.header__logoImg} />
          {/* <div className={classes.header__particle} style={{ top: "10px", left: "20px" }}></div>
           <div className={classes.header__particle} style={{ top: "15px", left: "30px" }}></div> */}
        </div>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <select
                onChange={(e) => onSelectTale(parseInt(e.target.value, 10))}
                defaultValue="-1"
              >
                <option value="-1" disabled>
                  Cuentos
                </option>
                {tales.map((tale, index) => (
                  <option key={index} value={index}>
                    {tale.title}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <a href="/">Catalogo</a>
            </li>
          </ul>
        </nav>
        <div className={classes.header__sun}>
          <img
            src={sunIcon}
            alt="Sol"
            onClick={onSunClick}
            className={classes.background__day}
            style={imgStyle}
          />
        </div>
        {/* <div className={classes.header__button}>
           <BiMenuAltRight />
           <button>CTA Page</button>
         </div> */}
      </div>
    </header>
  );
};

export default Header;