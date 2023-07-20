import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const RestuarantMenu = () => {
    const { id } = useParams()
    const [menu, setMenu] = useState({})

    useEffect(() => {
        fetchResturantMenu()
    }, [])

    const fetchResturantMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.96056&lng=73.1275844&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await response.json()
        console.log(json)
        setMenu(json?.data?.cards[0]?.card?.card?.info)
    }

    return (
        <>
            <div>
                <div className="menu-container">
                    <img className="menu-image" src={IMG_CDN_URL + menu.cloudinaryImageId} alt='restuarant image' />
                    <div>
                        <h2>{menu?.name}</h2>
                        <p>{menu?.cuisines?.toString()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestuarantMenu 