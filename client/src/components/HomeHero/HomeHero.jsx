import classes from "./HomeHero.module.css";
import cprHero from "../../assets/cpr.png";
import { useContext } from "react";
import modalCtx from "../../store/modalCtx";
import quizCtx from "../../store/quizCtx";
import dummyData from "../../dummyDatabase/dummyDatabase";

const HomeHero = () => {
  const modalCtxManager = useContext(modalCtx);
  const ctxManager = useContext(quizCtx);

  const openModalHandler = () => {
    modalCtxManager.setIsModal((prev) => !prev);
    ctxManager.setCurrentIndex((prev) => prev + 1);
    ctxManager.setCurrentLesson(dummyData[0][ctxManager.currentIndex]);
  };
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.txtBox}>
          <h2 className={classes.h2}>Be a hero</h2>
          <p className={classes.p}>
            Learn the easy steps required to make a difference in people's
            lives. Hands-only CPR is the new way to save lives and learning
            takes 9 questions!
          </p>
          {ctxManager.hasLoaded ? (
            <button onClick={openModalHandler} className={classes.btn}>
              START
            </button>
          ) : (
            <p className={classes.loading}>LOADING...</p>
          )}
        </div>
        <img className={classes.img} src={cprHero} />
      </div>
    </section>
  );
};

export default HomeHero;
