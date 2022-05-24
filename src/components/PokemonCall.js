import React, { useState } from "react";
import { useEffect } from "react";

const PokemonCall = (props) => {
    const [pokeList, setPokeList]= useState([])

    useEffect( () => {
        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => setPokeList(response.results))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <form onSubmit={PokemonCall}>
                <button>Get Pokemon</button>
            {pokeList.map( (pokemon, index) => {
                return (<p key={index}>{pokemon.name}</p>)
            })}
            </form>
        </div>
    )
}

export default PokemonCall;