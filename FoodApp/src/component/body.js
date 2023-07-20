import React, { useEffect, useRef, useState } from 'react'
import { IMG_CDN_URL, RestuarantData } from '../constant'
import Shimmer from './shimmer'
import { Link } from 'react-router-dom'

// ?. ==>>> Optional chaining
const RestuarantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => { // writing restuarant in this way means we are destructing the object
    // const {name, image, cuisines, avgRating, id} = restuarant  // destructing the object as we can easily use 
    return (
        <>
            <Link to={`/restuarant/${id}`}>
                <div className='card' key={id}>
                    <img src={IMG_CDN_URL + cloudinaryImageId} alt='restuarant image' />
                    <div className="card__details">
                        <div className="name">{name}</div>
                        <p className='tags'>{cuisines.join(', ')}</p>
                        <span className='rating'>⭐ {avgRating}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

const Body = () => {
    const [restuarantJsonData, setRestaurantJsonData] = useState([])
    const [filterRestuarant, setFilteredRestaurant] = useState([])
    const [search, setSearch] = useState('')

    const filterData = () => {
        if (search !== '') {
            const filtered = restuarantJsonData.filter(restuarant => restuarant.data.name.toLowerCase().includes(search.toLowerCase()))
            setFilteredRestaurant(filtered)
            console.log(filtered)
        }
        else {
            setFilteredRestaurant(restuarantJsonData)
        }
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    const fetchApiData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.96056&lng=73.1275844&page_type=DESKTOP_WEB_LISTING")
        const jsonResponse = await response.json()
        setRestaurantJsonData(jsonResponse?.data?.cards[0]?.data?.data?.cards)
        setFilteredRestaurant(jsonResponse?.data?.cards[0]?.data?.data?.cards)
    }

    // Early return
    if (!restuarantJsonData) return null
    return (
        <>
            {
                restuarantJsonData?.length === 0 ? <><Shimmer /></> :
                    <>
                        <div className='container'>
                            {/* <div className="search-container"> */}
                            <input type="text" name="search" placeholder="Search..." className="search-input"
                                value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={filterData} />
                            <a href="#" className="search-btn">
                                <i className="fas fa-search"></i>
                            </a>
                            {/* </div> */}
                        </div>
                        <div className='restuarant-list'>
                            {
                                filterRestuarant && filterRestuarant.length > 0 ?
                                    (filterRestuarant && filterRestuarant.map(restuarant => (
                                        <RestuarantCard {...restuarant.data} />
                                    )))
                                    : (
                                        <>
                                            <h3>No result found!!</h3>
                                        </>
                                    )
                            }
                        </div>
                    </>
            }
        </>
    )
}

export default Body