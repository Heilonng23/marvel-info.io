import "./App.css";
import Characters from "./Components/Characters";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import HorizontalNavbar from "./Components/HorizontalNavbar";
import Movies from "./Components/Movies";
import Comics from "./Components/Comics";

function App() {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isComicsOpen, setIsComicsOpen] = useState(false);
  const totalCharacters = 20; // Define totalCharacters as needed

  return (
    <div className="app-container">
      <HorizontalNavbar />
      <div className="main-content">
        <Navbar
          setIsCharactersOpen={setIsCharactersOpen}
          setIsMoviesOpen={setIsMoviesOpen}
          setIsComicsOpen={setIsComicsOpen}
        />

        <div className="content">
          {isCharactersOpen && <Characters totalCharacters={100} />}
        </div>
        <div className="content">
          {isMoviesOpen && <Movies totalCharacters={totalCharacters} />}
        </div>
        <div className="content">
          {isComicsOpen && <Comics totalCharacters={totalCharacters} />}
        </div>
      </div>
    </div>
  );
}

export default App;
