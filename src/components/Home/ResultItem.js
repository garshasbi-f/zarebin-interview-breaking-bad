import React from "react";
import classes from "./ResultItem.module.css";
import { createSearchParams, useNavigate } from "react-router-dom";

const ResultItem = ({ resultItem }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: "quote",
      search: `?${createSearchParams({
        name: resultItem.name,
      })}`,
    });
  };

  return (
    <button onClick={handleClick} className={classes.card}>
      <div className={classes["card__info"]}>
        <h1>{resultItem.name}</h1>
        <h3>{resultItem.nickname}</h3>
        <h3>{resultItem.birthday}</h3>
      </div>
      <div className={classes["card__img"]}>
        <img src={resultItem.img} alt="" />
      </div>
    </button>
  );
};

export default ResultItem;
