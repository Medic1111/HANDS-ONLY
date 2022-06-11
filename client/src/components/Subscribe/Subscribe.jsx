import classes from "./Subscribe.module.css";
import overCtx from "../../store/overCtx";
import quizCtx from "../../store/quizCtx";
import { useContext } from "react";
import axios from "axios";
import { useState } from "react";

const Subcribe = () => {
  const overCtxManager = useContext(overCtx);
  const quizCtxManager = useContext(quizCtx);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [lastInvalid, setLastInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [userInfo, setUserInfo] = useState({
    FNAME: "",
    LNAME: "",
    email_address: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const subscribeHandler = (event) => {
    event.preventDefault();
    if (
      userInfo.FNAME.length > 0 &&
      userInfo.LNAME.length > 0 &&
      userInfo.email_address.includes("@")
    ) {
      axios
        .post("/api/subscribe", userInfo)
        .then((serverRes) => {
          overCtxManager.setIsOver();
          quizCtxManager.setCurrentIndex(0);
        })
        .catch((err) => console.log(err.response.message));
    } else {
      userInfo.FNAME.length <= 0 ? setNameInvalid(true) : setNameInvalid(false);
      userInfo.LNAME.length <= 0 ? setLastInvalid(true) : setLastInvalid(false);
      userInfo.email_address.includes("@")
        ? setEmailInvalid(false)
        : setEmailInvalid(true);
    }
  };

  return (
    <form className={classes.form}>
      <p className={classes.p}>Subcribe to our newsletter to keep informed!</p>
      <input
        className={classes.input}
        type="email"
        placeholder="Email"
        name="email_address"
        value={userInfo.email_address}
        onChange={inputChangeHandler}
      />
      {emailInvalid && <p>Please enter a valid email</p>}
      <input
        className={classes.input}
        type="text"
        placeholder="First Name"
        name="FNAME"
        value={userInfo.FNAME}
        onChange={inputChangeHandler}
      />
      {nameInvalid && <p>First name is required</p>}

      <input
        className={classes.input}
        type="text"
        placeholder="Last Name"
        name="LNAME"
        value={userInfo.LNAME}
        onChange={inputChangeHandler}
      />
      {lastInvalid && <p>Last name is required</p>}

      <button className={classes.btn} onClick={subscribeHandler}>
        Subscribe
      </button>
    </form>
  );
};

export default Subcribe;
