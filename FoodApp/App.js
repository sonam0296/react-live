import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from './src/component/appLayout-component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./src/component/about";
import Contact from "./src/component/contact";
import Error from "./src/component/error";
import Body from "./src/component/body";
import RestuarantMenu from "./src/component/restrauntMenu";


{
    /**
     * ************************ COMPONENT STRUCTURE ************************ *
     * Header Component
     *      - Logo
     *      - Nav Items 
     *      - Cart
     * Body Component
     *      - Search Bar
     *      - List of Restuarant  
     *              - Restuarant Card
     *              - Image
     *              - Restuarant Name, Price, Ratings, Cuisine
     *      
     * 
     * Footer Component
     *      - Ref Links
     */
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restuarant/:id",
                element: <RestuarantMenu/>
            }
        ]
    },
])

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(<RouterProvider router={appRouter}/>)

