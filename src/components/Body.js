import { data } from "../utils/constants";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { PokemonThumbnail } from "./PokemonThumbnail";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";

export const Body = () => {
    const [list_rest, setlist_rest] = useState([]);
    const [err, setError] = useState(null);
    const [page, setPage] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"); // Track the current page
    const [temppage, settemppage] = useState("");

    useEffect(() => {
        fetchData();
    }, [page]); // Trigger fetchData when the page state changes

    const fetchData = async () => {
        try {
            const response = await fetch(
                page
            );

            const json = await response.json();
            const nextlink = json[0]?.next;
            settemppage(nextlink);
            const newPokemonList = json[0]?.results;
            const nn = list_rest.concat(newPokemonList);
            // Append the new data to the existing list_rest
            const newlist = [...list_rest, ...newPokemonList]
            console.log(newPokemonList);
            setlist_rest(nn);

        } catch (err) {
            setError("We will be back shortly");
        }
    };

    const handleLoadMoreClick = () => {
        setPage(temppage);
        console.log(temppage); // Increment the page when "More Pokemons" is clicked
    };

    return list_rest.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="flex flex-col items-center container mx-auto px-10">
            <div className="flex flex-wrap mx-auto">
                {list_rest.map((each) => (
                    <PokemonThumbnail newdata={each} key={each.id} />
                ))}
            </div>
            <button className="m-4 p-4 border border-solid-black bg-slate-200" onClick={handleLoadMoreClick}>
                More Pokemons
            </button>
        </div>
    );
};
