import CryptoJS from "crypto-js";
import { useState, useEffect } from "react";
import "./characters.css";

const PUBLIC_APIKEY = "ca43d501fdb17d19a1e82cb7f9275425";
const PRIVATE_APIKEY = "f100d4e0635c30faef3acc0063b4e06daff46e89";
function Characters({ totalCharacters }) {
  const [characters, setCharacter] = useState([]);
  const [copyright, setCopyright] = useState("");
  const [loading, setLoading] = useState(true);

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
          const filteredCharacters = result.data.results.filter((character) => {
            return (
              character.thumbnail &&
              character.thumbnail.path &&
              !character.thumbnail.path.includes("image_not_available") &&
              character.description.trim().length > 0
            );
          });
          setCharacter(filteredCharacters);
          setCopyright(result.copyright); // Set the copyright from the API response
        }
        setLoading(false);
      } catch (error) {
        console.log("error occured while fetching");
        setLoading(false);
      }
    };
    fetchData();
  }, [totalCharacters]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="characters">
          {characters.map((character) => (
            <li className="character" key={character.id}>
              <div>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <div className="nameAndDesc">
                  <p>{character.name}</p>
                  <span style={{ height: "200px" }}>
                    {character.description}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {copyright && <p style={{ textAlign: "center" }}>{copyright}</p>}
    </div>
  );
}

export default Characters;
