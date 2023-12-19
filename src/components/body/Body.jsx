import { useState } from "react";
import classes from "./Body.module.scss";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import tales from "../../talesDB/talesDB.json";

const Body = () => {
  const styleBotton = { color: "rgb(61, 61, 128)", fontSize: "80px" };
  const [actualPage, setActualPage] = useState(0);
  const [actualTale, setActualTale] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const isCoverPage = actualPage === 0;

  const prevPage = () => {
    setActualPage((prev) => Math.max(prev - 1, 0));
    setFlipped(false);
  };

  const nextPage = () => {
    if (isCoverPage || actualPage < tales[actualTale].pages.length) {
      setActualPage((prev) => prev + 1);
    } else if (actualTale < tales.length - 1) {
      setActualTale((prev) => prev + 1);
      setActualPage(0);
      setFlipped(true);
    }
  };


  const pageContent = () => {
    if (isCoverPage) {
      return <img 
        src={"/tales/images/cover.png"} 
        alt="Portada del cuento" />;
    } else {
      const page = tales[actualTale].pages[actualPage - 1];
      return (
        <div className={classes.body__content}>
          <div className={classes.body__backContent}>
            {page.text.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className={classes.body__frontContent}>
            <img
              src={page.image}
              alt={`Ilustración de la página ${actualPage}`}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.body__content}>
        {/* Left Button */}
        <div className={classes.body__button}>
          <button onClick={prevPage}>
            <FaChevronCircleLeft style={styleBotton} />
          </button>
        </div>

        <div className={classes.body__book}>{pageContent()}</div>

        {/* Right Button */}
        <div className={classes.body__button}>
          <button onClick={nextPage}>
            <FaChevronCircleRight style={styleBotton} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
