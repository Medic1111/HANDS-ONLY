import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>
        - Learn <span className={classes.cpr}>CPR</span> ♥︎ save{" "}
        <span className={classes.lives}>LIVES</span> -
      </h1>
    </header>
  );
};

export default Header;
