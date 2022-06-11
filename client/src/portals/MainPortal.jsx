import React from "react";
import ReactDOM from "react-dom";
import classes from "./MainPortal.module.css";

const portal = document.getElementById("learnPortal");

const PortalWrapper = (props) => {
  return <article className={classes.article}>{props.children}</article>;
};

const MainPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <PortalWrapper>{props.children}</PortalWrapper>,
        portal
      )}
    </React.Fragment>
  );
};

export default MainPortal;
