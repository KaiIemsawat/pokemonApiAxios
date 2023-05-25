import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemons(props) {
    const { pokeList, setPokeList } = props;
    const [number, setNumber] = useState(5);

    const handleNumber = (e) => {
        e.perventDefault();
        setNumber(5);
    };

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
            // .then((res) => console.log(res)) // json structure is different from using fetch
            .then((response) => setPokeList(response.data.results)) // <-- this part will be different from using fetch
            .catch((err) => console.log(err));
    }, [number]);

    return (
        <div>
            <form onSubmit={(e) => handleNumber(e)}>
                <label>Number of Pokemons in display : </label>
                <input
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                />
            </form>
            {/* {pokeList.map((pokeRes, index) => (
                <p key={index}>{`Number : ${index + 1} - ${pokeRes.name}`}</p>
            ))} */}
        </div>
    );
}
