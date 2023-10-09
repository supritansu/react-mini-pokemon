
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { link2 } from "../utils/constants";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}
export const PokemonThumbnail = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [datalist, setdatalist] = useState(null);
    var cp = ""
    var kp = " "
    const { newdata } = props;  //the newdata here must be same as the newdata which is sent as parametes
    console.log(newdata.url)

    const [Error, setError] = useState(null);
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
    if (datalist == null) {
        return <Shimmer />

    } else {

        //const each = datalist[0]?.type
        const findCss = (each) => {
            if (each === "fire") {
                cp = "bg-red-500"
                kp = "bg-red-100"

            }
            if (each === "grass") {

                cp = "bg-green-500"
                kp = "bg-green-100"

            }
            if (each === "water") {
                cp = "bg-blue-500"
                kp = "bg-blue-100"

            }
            if (each === "bug") {
                cp = "bg-amber-500"
                kp = "bg-amber-100"

            }
            if (each === "normal") {
                cp = "bg-pink-500"
                kp = "bg-pink-100"

            }
            if (each === "electric") {
                cp = "bg-yellow-100"
                kp = "bg-yellow-300"

            }
            if (each === "poison") {
                cp = "bg-purple-500"
                kp = "bg-purple-100"

            }
            if (each === "ground") {
                cp = "bg-orange-500"
                kp = "bg-orange-100"


            }
            if (each === "fairy") {
                cp = "bg-lime-500"
                kp = "bg-lime-100"


            }
            return cp

        }



        console.log(datalist[0]?.name.toUpperCase())
        return (

            <div className={`m-1 p-4  rounded-lg   relative z-10 flex flex-col items-center ${datalist[0]?.name.toUpperCase() == "VENUSAUR" ? "scale-125" : ""}  ${findCss(datalist[0]?.type)}`}  >

                <img className="res-logo h-[150px] w-[90%] justify-content-center "
                    alt="res-logo"
                    src={datalist[0]?.image} />


                <h3 className="font-bold text-[20px] underline">{datalist[0]?.name.toUpperCase()}</h3>

                <h4 className="text-[15px]">Type: {datalist[0]?.type.charAt(0).toUpperCase() + datalist[0]?.type.slice(1)}</h4>
                <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                    <button className={`py-2 my-3 w-[100%]  rounded-lg ${kp}`} onClick={() => setIsOpen(true)}>Know More..</button>

                    <Modal open={isOpen} color={cp} onClose={() => setIsOpen(false)}>
                        <div className={`flex ${kp}`}  >
                            <div className="w-1/4">
                                <img src={datalist[0]?.image} alt={datalist[0]?.name} />
                                <h3 className="font-bold underline">{datalist[0]?.name}</h3>
                            </div>
                            <div className="w-1/4">

                                <h4>Weight: {datalist[0]?.weight}</h4>
                                <h4>Height: {datalist[0]?.height}</h4>
                            </div>
                            <div className="w-1/4">
                                <h4>Stat1: {datalist[0]?.stats[0]?.stat?.name}</h4>
                                <h4>Stat2: {datalist[0]?.stats[1]?.stat?.name}</h4>
                                <h4>Stat3: {datalist[0]?.stats[2]?.stat?.name}</h4>
                                <h4>Stat4: {datalist[0]?.stats[3]?.stat?.name}</h4>
                                <h4>Stat5: {datalist[0]?.stats[4]?.stat?.name}</h4>
                                <h4>Stat6: {datalist[0]?.stats[5]?.stat?.name}</h4>
                            </div>
                            <div className="w-1/4">
                                <h4>bs1: {datalist[0]?.stats[0]?.base_stat}</h4>
                                <h4>bs2: {datalist[0]?.stats[1]?.base_stat}</h4>
                                <h4>bs3: {datalist[0]?.stats[2]?.base_stat}</h4>
                                <h4>bs4: {datalist[0]?.stats[3]?.base_stat}</h4>
                                <h4>bs5: {datalist[0]?.stats[4]?.base_stat}</h4>
                                <h4>bs6: {datalist[0]?.stats[5]?.base_stat}</h4>
                            </div>
                        </div>






                    </Modal>
                </div>
            </div >
        );
    }
};