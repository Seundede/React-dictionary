import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from './components/Body/index'

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
   
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {}
  };


  useEffect(() => {
    word && dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="app"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Body word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
