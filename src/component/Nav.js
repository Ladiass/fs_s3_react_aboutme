import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <>
            <nav className="flex nowrap gap-2 bg-gray-800 py-4 px-5">
                <Link to="/" className="text-blue-400 hover:text-blue-500" >Home</Link>
                <Link to="/AboutMe" className="text-blue-400 hover:text-blue-500">About Me</Link>
                <Link to="/Hobby" className="text-blue-400 hover:text-blue-500">Hobby</Link>
                <Link to="/Images" className="text-blue-400 hover:text-blue-500">Images</Link>
            </nav>
        </>
    )
}

export default Nav
