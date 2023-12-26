import classes from "./Catalogue.module.scss";
import tales from "../../talesDB/talesDB.json";

const Catalogue = ({ onSelectTale }) => {
  return (
    <div className={classes.catalogue}>
      {tales.map((tale, index) => (
        <div
          key={index}
          className={classes.catalogue__card}
          onClick={() => onSelectTale(index)}
        >
          <div className={classes.catalogue__cardContent}>
            <div className={classes.catalogue__cardFront}>
              <img
                src={tale.cover}
                alt={`Portada de ${tale.title}`}
                className={classes.catalogue__taleCover}
              />
            </div>
            <div className={classes.catalogue__cardBack}>
              <p>Pincha sobre la tarjeta</p>
              <h3 className={classes.taleTitle}>{tale.title}</h3>
              <p className={classes.taleTitle}>{tale.endPage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
