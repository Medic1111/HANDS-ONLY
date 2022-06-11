import classes from "./AnswerBtn.module.css";
import { useContext } from "react";
import quizCtx from "../../store/quizCtx";
import dummyData from "../../dummyDatabase/dummyDatabase";
import modalCtx from "../../store/modalCtx";
import overCtx from "../../store/overCtx";

const AnswerBtn = ({ obj }) => {
  const ctxManager = useContext(quizCtx);
  const modalCtxManager = useContext(modalCtx);
  const overCtxManager = useContext(overCtx);

  const checkIfCorrectHandler = () => {
    if (ctxManager.currentIndex < dummyData[0].length) {
      if (obj.correct === true) {
        ctxManager.setCorrect(true);
        ctxManager.setCurrentIndex((prev) => prev + 1);
        ctxManager.setCurrentLesson(dummyData[0][ctxManager.currentIndex]);
      } else if (obj.correct !== true) {
        ctxManager.setCorrect(false);
      }
    } else {
      modalCtxManager.setIsModal((prev) => !prev);
      overCtxManager.setIsOver((prev) => !prev);
    }
  };

  return (
    <button onClick={checkIfCorrectHandler} className={classes.btn}>
      {obj.text}
    </button>
  );
};

export default AnswerBtn;
