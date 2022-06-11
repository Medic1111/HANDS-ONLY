import MainPortal from "../../portals/MainPortal";
import classes from "./Over.module.css";
import overCtx from "../../store/overCtx";
import quizCtx from "../../store/quizCtx";
import { useContext } from "react";

const Over = () => {
  const overCtxManager = useContext(overCtx);
  const quizCtxManager = useContext(quizCtx);

  const closeOverHandler = () => {
    overCtxManager.setIsOver();
    quizCtxManager.setCurrentIndex(0);
  };

  const subscribeHandler = (event) => {
    event.preventDefault();
    console.log("Subscribing");
    // Not subscribed? Form
    // Subscribed? p confirm
  };

  return (
    <MainPortal>
      <section className={classes.section}>
        <h3>Quiz is Over, Congrats!</h3>
        <form>
          <p>Subcribe to our newsletter to keep informed!</p>
          <input type="email" placeholder="Email" />
          <button onClick={subscribeHandler}>Subscribe</button>
        </form>
        <button onClick={closeOverHandler}>Return Home</button>
      </section>
    </MainPortal>
  );
};

export default Over;
