import "./navbar.css";

function Navbar({ setIsCharactersOpen, setIsMoviesOpen, setIsComicsOpen }) {
  function handleCharactersPage() {
    setIsCharactersOpen((prev) => !prev);
    setIsMoviesOpen();
    setIsComicsOpen();
  }
  function handleMoviesPage() {
    setIsMoviesOpen((prev) => !prev);
    setIsCharactersOpen();
    setIsComicsOpen();
  }
  function handleComicsPage() {
    setIsComicsOpen((prev) => !prev);
    setIsCharactersOpen();
    setIsMoviesOpen();
  }
  return (
    <div className="vertical-navbar">
      <ul style={{ paddingLeft: "5px" }}>
        <button onClick={handleCharactersPage}>Characters</button>
        <button onClick={handleMoviesPage}>Marvel movies of characters</button>
        <button onClick={handleComicsPage}>Marvel comics of characters</button>
        <button>New books about marvel</button>
      </ul>
    </div>
  );
}

export default Navbar;
