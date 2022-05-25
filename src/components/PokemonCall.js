import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const PokemonCall = (props) => {
    const [pokeList, setPokeList] = useState([]);

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {setPokeList(response.data.results)})
        .then(pokeList.map( (index, pokemon) => {
            return ({pokeList})
            
        }))
    }, [])
    return (
        <div>
            <p></p>
        </div>
    )
}



export default PokemonCall;