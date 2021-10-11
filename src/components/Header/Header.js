import React from "react";
import { TextField, createTheme, ThemeProvider, MenuItem } from "@mui/material";
import "./Header.css";
import Category from "../Data/Category";

const Header = ({ category = "", setCategory, word = "", setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ffff",
      },
      mode: "dark",
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>

      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            variant="standard"
            label="Search a Word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {Category.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
