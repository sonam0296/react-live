import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const RestuarantMenu = () => {
    const { id } = useParams()
    const [menu, setMenu] = useState({})
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        fetchResturantMenu()
    }, [])

    const fetchResturantMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.96056&lng=73.1275844&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await response.json()
        // console.log(json)
        setMenu(json?.data?.cards[0]?.card?.card?.info)
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap)
        setMenuData(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
    }

    return (
        <>
            <div>
                <div className="menu-container">
                    <img className="menu-image" src={IMG_CDN_URL + menu?.cloudinaryImageId} alt='restuarant image' />
                    <div>
                        <h2>{menu?.name}</h2>
                        <p>{menu?.cuisines?.toString()}</p>
                        <p>{menu?.areaName}, {menu?.city}</p>
                        <p>⭐ {menu?.avgRating}</p>
                        <p>{menu?.costForTwoMessage}</p>
                    </div>
                </div>
                <div className='meal-container'>
                {menuData?.map((meal) => (
                    <div key={meal?.card?.info?.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {meal?.card?.info?.imageId ?  <img src={meal?.card?.info?.imageId} alt='img' className='img' /> : ''}
                            <div className=" flex flex-col">
                                <div className='title-price'>
                                    <h5>{meal?.card?.info?.name}</h5>
                                    <small>{meal?.card?.info?.price}</small>
                                </div>
                                <div>
                                    <small className='ml-3 w-full'>--------------------------</small>
                                    <p className='para-menu'>{meal?.card?.info?.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                {/* <div className="menu-list">
                    <ul>
                        {
                            menuData && menuData.map(data =>
                            (
                                <>
                                    <li >
                                        <div key={data?.card?.info?.id}>
                                            <p>
                                                {data?.card?.info?.name}
                                            </p>
                                            <p>
                                                {data?.card?.info?.price}
                                            </p>
                                            {
                                                data?.card?.info?.imageId ? <img src={IMG_CDN_URL + data?.card?.info?.imageId} style={{ width: '100px', height: '100px' }} /> : ''
                                            }
                                        </div>
                                    </li>
                                </>
                            )
                            )
                        }
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default RestuarantMenu 