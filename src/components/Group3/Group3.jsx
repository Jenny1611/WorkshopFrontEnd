/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";
import axios from "axios";

const Group_3 = () => {
  async function getPokemon() {
    const data = await axios.get(url).then((response) => response.data);
    setResult(data);
  }

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [result, setResult] = useState(undefined);

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
      <div className="card bg-light m-3">
        <div className="card-header">Gruppo 3</div>
        <div className="card-body">
          <h4 className="card-title">Pokedex con PokeApi e React</h4>
          <p className="card-text">
            Membri 2° anno: Mattia Pavan, Lorenzo Morici, Klevis Hasa.
            <br />
            Membri 1° anno: Marco Segato.
            <br />
          </p>
          <p>
            Questo piccolo progetto è stato realizzato con React e sfrutta la REST PokeApi per visualizzare i pokemon
            singoli.
            <br /> Usa la libreria axios per richiedere i dati all'API e sfrutta gli hook di React per aggiornare la
            grafica.
          </p>
        </div>
      </div>

      <div>
        <button className="prev" onClick={prevUrl}>
          Prev
        </button>
        <button className="next" onClick={nextUrl}>
          Next
        </button>

        <div className="">
          <ul>
            {result.results.map((element, index) => (
              <PokemonItem pokemonUrl={element.url} key={index} />
            ))}
          </ul>
        </div>
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
  }, []);

  if (!data) {
    return <h1>WAIT</h1>;
  }

  return (
    <div>
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
