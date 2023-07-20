import { useState } from "react"
import { Title } from "./appLayout-component" // Named import i.e when we do export const "COMPONENT_NAME"
import { Link } from "react-router-dom"


const Header = () => {
    const [isLoginClicked, setIsLoginClicked] = useState(false)

    return (
        <>
            <div className='header'>
                <Title />
                <div className='nav-items'>
                    <ul>
                        <li>
                            <Link to='/' className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className="link">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className="link">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
                {
                    isLoginClicked ? <button className="logout" onClick={() => setIsLoginClicked(false)}>Logout</button> : <button className="logout" onClick={() => setIsLoginClicked(true)}>Login</button>
                }
            </div>
        </>
    )
}

export default Header