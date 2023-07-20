import React from 'react'
import Header from './header' // Default import i.e when we do export default "componentName"
import Body from './body'
import Footer from './footer'
import Logo from '../assets/food-logo.jpeg'
import { Link, Outlet } from 'react-router-dom'

export const Title = () => {
    return (
        <Link to='/'>
            <img className='logo' src={Logo} alt='Food App' />
        </Link>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
                {/* Outlet ===>>> It is a component to render conditional child  */}
                {/* All the children will go into Outlet */}
                <Outlet/>
            <Footer />
        </>
    )
}

export default AppLayout