import Overlay1 from "./Overlay";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { link2 } from "../utils/constants";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
export const PokemonThumbnail = (props) => {
    const [datalist, setdatalist] = useState(null);
    const { newdata } = props;  //the newdata here must be same as the newdata which is sent as parametes
    console.log(newdata.url)
    useEffect(() => {
        fetchpok();

    }, [])
    const fetchpok = async () => {
        try {
            const data = await fetch(
                newdata.url
            );

            const json = await data.json();
            console.log(json);
            setdatalist(json);
        } catch (err) {
            setError("We will be back shortly");
        }
    };

    function showlay(each) {
        console.log(each);
        return <Overlay1 newdata1={each} />;
        console.log("it is done");
    }
    if (datalist == null) {
        return <Shimmer />

    } else {


        return (
            <div className="res-card" onClick={() => showlay(datalist[0].stats)}>
                <img className="res-logo"
                    alt="res-logo"
                    src={datalist[0]?.image} />

                <h3>{datalist[0]?.name}</h3>
                {console.log(datalist[0]?.name)}
                <h4>{datalist[0]?.type}</h4>

            </div>
        );
    }
};