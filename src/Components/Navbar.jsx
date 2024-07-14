import "./navbar.css";

function Navbar({
  setIsCharactersOpen,
  setIsMoviesOpen,
  setIsComicsOpen,
  setIsSummaries,
}) {
  function handleCharactersPage() {
    setIsCharactersOpen((prev) => !prev);
    setIsMoviesOpen();
    setIsComicsOpen();
    setIsSummaries();
  }
  function handleMoviesPage() {
    setIsMoviesOpen((prev) => !prev);
    setIsCharactersOpen();
    setIsComicsOpen();
    setIsSummaries();
  }
  function handleComicsPage() {
    setIsComicsOpen((prev) => !prev);
    setIsCharactersOpen();
    setIsMoviesOpen();
    setIsSummaries();
  }
  function handleSummaries() {
    setIsSummaries((prev) => !prev);
    setIsCharactersOpen();
    setIsMoviesOpen();
    setIsComicsOpen();
  }
  return (
    <div className="vertical-navbar">
      <ul style={{ paddingLeft: "5px" }}>
        <button onClick={handleCharactersPage}>Characters</button>
        <button onClick={handleMoviesPage}>Marvel movies of characters</button>
        <button onClick={handleComicsPage}>Marvel comics of characters</button>
        <button onClick={handleSummaries}>Picked Marvel Movies</button>
      </ul>
    </div>
  );
}

export default Navbar;
