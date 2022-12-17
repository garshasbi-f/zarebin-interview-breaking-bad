import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { qoutesAction } from "../../features/Info/Action";
import classes from "./Quotes.module.css";
import { useNavigate } from "react-router-dom";

const Quotes = ({ quote }) => {
  const [searchParams] = useSearchParams();
  const [characterName, setCharacterName] = useState(searchParams.get("name"));
  const [isRandom, setIsRandom] = useState(false);
  const randomQuote = useSelector((state) => state.info.randomQuote);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRandom = () => {
    setIsRandom(true);
    dispatch(qoutesAction(characterName));
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes.QuoteCard}>
        <h1>{characterName}</h1>
        {isRandom ? <h3>{randomQuote.quote}</h3> : <h3>{quote.quote}</h3>}

        <div>
          <button
            className={classes["QuoteCard__newBtn"]}
            onClick={handleRandom}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className={classes["QuoteCard__backBtn"]}>
        <button onClick={handleBack}>Back</button>
      </div>
    </>
  );
};

export default Quotes;
