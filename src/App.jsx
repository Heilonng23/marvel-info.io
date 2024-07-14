import "./App.css";
import Characters from "./Components/Characters";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import HorizontalNavbar from "./Components/HorizontalNavbar";
import Movies from "./Components/Movies";
import Comics from "./Components/Comics";
import Summaries from "./Components/Summaries";

function App() {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isComicsOpen, setIsComicsOpen] = useState(false);
  const [isSummaries, setIsSummaries] = useState(false);

  return (
    <div className="app-container">
      <HorizontalNavbar />
      <div className="main-content">
        <Navbar
          setIsCharactersOpen={setIsCharactersOpen}
          setIsMoviesOpen={setIsMoviesOpen}
          setIsComicsOpen={setIsComicsOpen}
          setIsSummaries={setIsSummaries}
        />

        <div className="content">
          {isCharactersOpen && <Characters totalCharacters={100} />}
          {isMoviesOpen && <Movies totalCharacters={20} />}
          {isComicsOpen && <Comics totalCharacters={20} />}
          {isSummaries && <Summaries totalCharacters={100} />}
        </div>
      </div>
    </div>
  );
}

export default App;
