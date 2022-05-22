import React, { useState } from "react";
import { useEffect } from "react";

const PokemonCall = (props) => {
    const [pokeList, setPokeList]= useState("")

    useEffect( () => {
        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => setPokeList(response.results))

    }, [])

    return (
        <div>
            {pokeList.map( (pokemon, index) => {
                return (<p key={index}>{pokemon.name}</p>)
            })}
        </div>
    )
}

export default PokemonCall;