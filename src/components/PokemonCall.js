import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const PokemonCall = (props) => {
    const [pokeList, setPokeList] = useState([]);

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            setPokeList(response.data.results)
        })
        .catch(err => {console.log(err.response)})
    }, [])

    return (
        <div>
            {pokeList.map( (pokemon, index) => {
                return <p key={index}>{pokemon.name}</p>
            } )}
        </div>
    )
}



export default PokemonCall;