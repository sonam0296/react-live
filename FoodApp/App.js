import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./component/appLayout-component";

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

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))

reactRoot.render(<AppLayout/>)

