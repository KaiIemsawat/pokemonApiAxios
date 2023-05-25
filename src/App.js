import { useState } from "react";
import Pokemons from "./components/Pokemons";
import PokemonList from "./components/PokemonList";

export default function App() {
    const [pokeList, setPokeList] = useState([]);
    return (
        <>
            <Pokemons pokeList={pokeList} setPokeList={setPokeList} />
            <PokemonList pokeList={pokeList} setPokeList={setPokeList} />
        </>
    );
}
