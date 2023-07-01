import React from 'react'
import RestuarantData from '../restuarants.json'

const Title = () => {
    return (
        <a href='/'>
            <img className='logo' src='https://static.vecteezy.com/system/resources/previews/011/468/885/original/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg' alt='Food App' />
        </a>
    )
}

const Header = () => {
    return (
        <>
            <div className='header'>
                <Title />
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Body = () => {
    const restuarantJsonData = RestuarantData
    return (
        <>
            <div className='restuarant-list'>
                {
                    restuarantJsonData && restuarantJsonData.map(restuarant => (
                        <RestuarantCard {...restuarant.data}/>
                    ))
                }
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <h3>Footer</h3>
        </>
    )
}

// ?. ==>>> Optional chaining
const RestuarantCard = ({name, image, cuisines, avgRating, id}) => { // writing restuarant in this way means we are destructing the object
    // const {name, image, cuisines, avgRating, id} = restuarant  // destructing the object as we can easily use 
    return (
        <>
            <div className='card' key={id}>
                <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + image} alt='restuarant image' />
                <h2>{name}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{avgRating} stars</h4>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

export default AppLayout