import classes from "./Aside.module.scss";

const Aside = () => {
  return (
    <aside>
      <div className={classes.aside}>
        <div className={classes.aside__content}>
          <div className={classes.aside__links}>
            <a href="/">Libro 1</a>
            <a href="/">Libro 2</a>
            <a href="/">Libro 3</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
