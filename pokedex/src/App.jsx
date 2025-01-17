import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { PokemonItem } from './Components/PokemonItem'

function App() {
  async function getPokemon() {
    const data = await axios.get(url).then((response) => response.data);
    setResult(data);
  }

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
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
    return <h1>WAIT</h1>
  }
  
  return (
    <>
      <div>
        <button className="prev" onClick={prevUrl}>Prev</button>
        <button className="next" onClick={nextUrl}>Next</button>

        <div className="">
          <ul>
            {
              result.results.map((element, index) => <PokemonItem pokemonUrl={element.url} key={index}/>)
            }
          </ul>
        </div>

      </div>
    </>
  )
}

export default App
