import { useState, useEffect } from "react";
import classes from "./Body.module.scss";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import tales from "../../talesDB/talesDB.json";

const Body = ({ selectedTale }) => {
  const styleCover = { width: "500px", height: "700px" };
  const styleEndPage = { fontSize: "40px", textAlign: "center" };
  const styleBotton = { color: "rgb(61, 61, 128)", fontSize: "80px" };
  const [actualPage, setActualPage] = useState(0);
  const [actualTale, setActualTale] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  useEffect(() => {
    setActualTale(selectedTale);
    setActualPage(0);
  }, [selectedTale]);

  const openBook = () => {
    setButtonStyle({
      prevBtn: { transform: "translateX(-50px)", transition: "transform 0.5s" },
      nextBtn: { transform: "translateX(50px)", transition: "transform 0.5s" },
    });
  };

  const closeBook = () => {
    setButtonStyle({
      prevBtn: { transform: "translateX(0px)", transition: "transform 0.5s" },
      nextBtn: { transform: "translateX(0px)", transition: "transform 0.5s" },
    });
  };

  const nextPage = () => {
    if (actualPage < tales[actualTale].pages.length) {
      setActualPage((prev) => prev + 1);
      if (actualPage === tales[actualTale].pages.length || actualPage === 0) {
        openBook();
      }
      setFlipped(true);
    } else if (actualPage === tales[actualTale].pages.length) {
      setActualPage((prev) => prev + 1);
      closeBook();
      setFlipped(false);
    }
  };

  const prevPage = () => {
    if (actualPage > 0) {
      setActualPage((prev) => prev - 1);
      if (actualPage === 1) {
        closeBook();
      } else if (actualPage === tales[actualTale].pages.length + 1) {
        openBook();
      }
    }
    setFlipped(false);
  };

  const bookContent = () => {
    const isFlipped = (pageNumber) => {
      return actualPage >= pageNumber;
    };

    if (actualPage === 0) {
      return (
        <div className={classes.body__frontContent}>
          <img
            src={tales[actualTale].cover}
            alt="Portada del cuento"
            style={styleCover}
          />
        </div>
      );
    } else if (actualPage > tales[actualTale].pages.length) {
      const endPageLines = tales[actualTale].endPage.split("\n");
      return (
        <div
          className={classes.body__backContent}
          style={{ zIndex: isFlipped(1) ? 1 : 0 }}
        >
          {endPageLines.map((line, index) => (
            <p key={index} style={styleEndPage}>
              {line}
            </p>
          ))}
        </div>
      );
    } else {
      const page = tales[actualTale].pages[actualPage - 1];
      return (
        <div
          className={`${classes.body__content} ${
            flipped ? classes.body__content_flipped : ""
          }`}
        >
          <div
            className={classes.body__backContent}
            style={{ zIndex: isFlipped(1) ? 1 : 0 }}
          >
            {page.text.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div
            className={classes.body__frontContent}
            style={{ zIndex: isFlipped(1) ? 1 : 0 }}
          >
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
        <div className={classes.body__button} style={buttonStyle.prevBtn}>
          <button onClick={prevPage} style={styleBotton}>
            <FaChevronCircleLeft />
          </button>
        </div>

        <div className={classes.body__book}>{bookContent()}</div>

        <div className={classes.body__button} style={buttonStyle.nextBtn}>
          <button onClick={nextPage} style={styleBotton}>
            <FaChevronCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
