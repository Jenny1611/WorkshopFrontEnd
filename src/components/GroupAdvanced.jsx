/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./GroupAdvanced.module.css";

const Group_3 = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [result, setResult] = useState(undefined);

  async function getPokemon() {
    const data = await axios.get(url).then((response) => response.data);
    setResult(data);
  }

  function nextUrl() {
    if (result.next) {
      setUrl(result.next);
    }
  }

  function prevUrl() {
    if (result.previous) {
      setUrl(result.previous);
    }
  }

  useEffect(() => {
    getPokemon();
  }, [url]);

  if (!result) {
    return <h1>WAIT</h1>;
  }

  return (
    <>
      <div className={styles.buttons}>
        <button className="prev" onClick={prevUrl}>
          Prev
        </button>
        <button className="next" onClick={nextUrl}>
          Next
        </button>
      </div>

        <div className={styles.pokeList}>
          <ul>
            {result.results.map((element, index) => (
              <PokemonItem pokemonUrl={element.url} key={index} />
            ))}
          </ul>
        </div>
    </>
  );
};

const PokemonItem = ({pokemonUrl}) => {
  const [data, setData] = useState(undefined);

  async function getPokemon(url) {
    const result = await axios.get(url).then((response) => response.data);
    setData(result);
  }

  useEffect(() => {
    getPokemon(pokemonUrl);
  }, [pokemonUrl]);

  if (!data) {
    return <h1>WAIT</h1>;
  }

  return (
    <div className={styles.pokeItem}>
      {data.id}
      <img src={data.sprites.other["official-artwork"].front_default} />
      <p>{data.name}</p>
      <ul>
        {data.types.map((element, index) => (
          <li key={index}>{element.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Group_3;
