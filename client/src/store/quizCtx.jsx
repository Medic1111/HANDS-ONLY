import { createContext } from "react";

const quizCtx = createContext({
  currentLesson: {},
  setCurrentLesson: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
  hasLoaded: false,
  setHasLoaded: () => {},
  correct: true,
  setCorrect: () => {},
});

export default quizCtx;
