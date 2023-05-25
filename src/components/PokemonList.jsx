import Pokemons from "./Pokemons";
import React from "react";

export default function PokemonList(props) {
    const { pokeList, setPokeList } = props;

    return (
        <div>
            <h3>Pokemon List</h3>
            {pokeList.map((pokeRes, index) => (
                <p key={index}>{`Number : ${index + 1} - ${pokeRes.name}`}</p>
            ))}
        </div>
    );
}
