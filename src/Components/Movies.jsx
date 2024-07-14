import CryptoJS from "crypto-js";
import { useState, useEffect } from "react";
import "./movies.css";

const PUBLIC_APIKEY = "ca43d501fdb17d19a1e82cb7f9275425";
const PRIVATE_APIKEY = "f100d4e0635c30faef3acc0063b4e06daff46e89";

function Movies({ totalCharacters }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + PRIVATE_APIKEY + PUBLIC_APIKEY).toString();
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_APIKEY}&hash=${hash}&limit=${totalCharacters}`
        );
        const result = await response.json();

        if (result.data.results && result.data.results.length > 0) {
          const filteredCharacters = result.data.results.filter(
            (character) =>
              character.thumbnail &&
              character.thumbnail.path &&
              !character.thumbnail.path.includes("image_not_available")
          );
          setCharacters(filteredCharacters);
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
        // Handle error state here (e.g., setCharacters([]) and show error message)
      }
    };

    fetchData();
  }, [totalCharacters]);

  return (
    <div>
      <ul className="charactersOfMovies">
        {characters.length > 0 ? (
          characters.map((character) => (
            <li className="characterWithMovies" key={character.id}>
              <div>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <div className="nameAndMovies">
                  <span>{character.name}</span>
                  <ul>
                    {character.series.items.slice(0, 5).map((story, index) => (
                      <li key={index}>{story.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default Movies;
