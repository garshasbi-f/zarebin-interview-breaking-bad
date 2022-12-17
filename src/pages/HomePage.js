import React, { useState, useEffect } from "react";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { allCharactersAction } from "../features/Info/Action";

const HomePage = () => {
  const errorMessage = useSelector((state) => state.info.errorMessage);
  const isLoading = useSelector((state) => state.info.isLoading);
  const resultsList = useSelector((state) => state.info.charactersList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCharactersAction());
  }, []);

  let content = <Home resultsList={resultsList} />;

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

export default HomePage;
