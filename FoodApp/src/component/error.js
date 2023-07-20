import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    return (
        <>
            <h1 style={{textAlign: "center"}}>Ooops!!! Something went wrong</h1>
            <h3 style={{textAlign: "center"}}>{error.data}</h3>
            <h3 style={{textAlign: "center"}}>{error.status + ' : ' + error.statusText}</h3>
            <img className= "error-img" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000"></img>
        </>
    )
}

export default Error