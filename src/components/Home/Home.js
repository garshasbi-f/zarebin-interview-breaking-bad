import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Home.module.css";
import ResultItem from "./ResultItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = ({ resultsList }) => {
  const [list, setList] = useState(resultsList);
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  const handleChange = (e) => {
    setSortType(e.target.value);
  };

  useEffect(() => {
    const sortArray = (type) => {
      const sorted = [...list].sort((a, b) => {
        if (type == "name") {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        }

        if (type == "nickname") {
          if (a.nickname.toLowerCase() < b.nickname.toLowerCase()) return -1;
          if (a.nickname.toLowerCase() > b.nickname.toLowerCase()) return 1;
          return 0;
        }

        if (type == "birthday") {
          if (new Date(a.birthday) < new Date(b.birthday)) return 1;
          if (new Date(a.birthday) > new Date(b.birthday)) return -1;
          return 0;
        }
      });
      setList(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    const filteredCharacter = resultsList.filter(
      ({ name, nickname }) =>
        name.toLowerCase().includes(searchText.toLowerCase()) ||
        nickname.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredCharacter);
  }, [searchText]);

  return (
    <>
      <div className={classes.main}>
        <div className={classes["main__filterBox"]}>
          <div className={classes["main__filterBox__filterItem"]}>
            <TextField
              id="outlined-basic"
              label="search"
              value={searchText}
              variant="outlined"
              onChange={({ target }) => setSearchText(target.value)}
              fullWidth
            />
          </div>
          <div className={classes["main__filterBox__filterItem"]}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="sort"
                value={sortType}
                onChange={handleChange}
              >
                <MenuItem value="name">name</MenuItem>
                <MenuItem value="nickname">nickname</MenuItem>
                <MenuItem value="birthday">birthday</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={classes["main__characterList"]}>
          {list.map((result) => (
            <ResultItem resultItem={result} key={Math.random()} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
