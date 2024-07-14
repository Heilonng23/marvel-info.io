import CryptoJS from "crypto-js";
import { useState, useEffect } from "react";
import "./summaries.css";

const PUBLIC_APIKEY = "ca43d501fdb17d19a1e82cb7f9275425";
const PRIVATE_APIKEY = "f100d4e0635c30faef3acc0063b4e06daff46e89";

function Summaries({ totalCharacters }) {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSeries = async () => {
      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + PRIVATE_APIKEY + PUBLIC_APIKEY).toString();

      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${PUBLIC_APIKEY}&hash=${hash}&limit=${totalCharacters}`
        );
        const result = await response.json();

        if (result.data.results) {
          const filteredSeries = result.data.results.filter((series) => {
            return (
              series.description &&
              series.description.trim().length > 0 &&
              series.characters.items.length > 0
            );
          });
          setSeries(filteredSeries);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSeries();
  }, [totalCharacters]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error : {error.message}</p>
      ) : (
        <ul className="summariesOfMovies">
          {series.map((serie) => (
            <li key={serie.id} className="summaryWithMovies">
              <div className="titleOfAll">
                <img
                  src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                  alt={serie.title}
                />{" "}
                <div>
                  <span>{serie.title}</span>
                  <p style={{ padding: "4px 10px " }}>{serie.description}</p>
                  {serie.characters.items && <span>Stars: </span>}{" "}
                  {serie.characters.items
                    .slice(0, 3)
                    .map((character, index) => (
                      <>
                        <ul key={index}>
                          <li style={{ padding: "4px 10px " }} key={index}>
                            {character.name}
                            {index < serie.characters.items.length - 1
                              ? ", "
                              : ""}
                          </li>
                        </ul>
                      </>
                    ))}{" "}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Summaries;
