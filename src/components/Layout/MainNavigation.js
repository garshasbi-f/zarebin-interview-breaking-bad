import React from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../../features/Info/Slice";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const handleError = () => {
    dispatch(setErrorMessage(null));
  };
  return (
    <header className={classes.header}>
      <div onClick={handleError}>
        <Link to="/" className={classes["header__logo"]}>
          Breaking Bad{" "}
        </Link>
      </div>
    </header>
  );
};

export default MainNavigation;
