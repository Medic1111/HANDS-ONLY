import MainPortal from "../../portals/MainPortal";
import classes from "./Over.module.css";
import overCtx from "../../store/overCtx";
import quizCtx from "../../store/quizCtx";
import { useContext } from "react";
import Subcribe from "../Subscribe/Subscribe";

const Over = () => {
  const overCtxManager = useContext(overCtx);
  const quizCtxManager = useContext(quizCtx);

  const closeOverHandler = () => {
    overCtxManager.setIsOver();
    quizCtxManager.setCurrentIndex(0);
  };

  return (
    <MainPortal>
      <section className={classes.section}>
        <h3 className={classes.h3}>Quiz is Over, Congrats!</h3>
        <Subcribe />
        <button className={classes.btn} onClick={closeOverHandler}>
          Return Home
        </button>
      </section>
    </MainPortal>
  );
};

export default Over;
