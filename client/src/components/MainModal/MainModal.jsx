import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./MainModal.module.css";
import MainPortal from "../../portals/MainPortal";
import { useContext } from "react";
import quizCtx from "../../store/quizCtx";
import AnswerBtn from "../AnswerBtn/AnswerBtn";

const MainModal = () => {
  const ctxManager = useContext(quizCtx);

  return (
    <MainPortal>
      <Header />
      <main className={classes.main}>
        <section className={classes.section}>
          <p className={classes.h3}>{ctxManager.currentLesson.explanation}</p>
          <p className={classes.p}>{ctxManager.currentLesson.question}</p>
          <div className={classes.btnBox}>
            {ctxManager.correct || <p>TRY AGAIN</p>}
            {ctxManager.currentLesson.answers.map((obj, index) => {
              return (
                <AnswerBtn index={index} obj={obj} key={`answer_${index}`} />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </MainPortal>
  );
};

export default MainModal;
