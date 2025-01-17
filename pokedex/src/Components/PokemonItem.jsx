import axios from "axios";
import { useEffect, useState } from 'react'


export const PokemonItem =  ({pokemonUrl})=>{
    const [data, setData] = useState(undefined);
    
    async function getPokemon(url) {
        const result = await axios.get(url).then((response) => response.data);
        setData(result);
    }

    useEffect(() => {
        getPokemon(pokemonUrl);
      }, []);

    if (!data) {
        return <h1>WAIT</h1>
      }

    return(
        <div>
            {data.id}
            <img src={data.sprites.other["official-artwork"].front_default}/>
            <p>{data.name}</p>
            <ul>
                {data.types.map((element, index)=><li key={index}>{element.type.name}</li>)}
            </ul>
        </div>
    );
}