import React, { useState, useEffect } from "react";
import Quotes from "../components/Quotes/Quotes";
import Error from "../components/Error/Error";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { qoutesAction } from "../features/Info/Action";

const QuotesPage = () => {
  const [searchParams] = useSearchParams();
  const [characterName, setCharacterName] = useState(searchParams.get("name"));
  const errorMessage = useSelector((state) => state.info.errorMessage);
  const isLoading = useSelector((state) => state.info.isLoading);
  const quote = useSelector((state) => state.info.randomQuote);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(qoutesAction(characterName));
  }, []);

  let content = <Quotes quote={quote} />;

  if (errorMessage) {
    content = <Error />;
  }

  if (isLoading) {
    content = (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return <>{content}</>;
};

export default QuotesPage;
