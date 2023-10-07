import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import rlogo from "../../images/rlogo.png"
import namelogo from "../../images/logoname.png"

function Navbar() {
    return (
        <div className="bgnavbar">
            <div className='navbar'>
                <div className="logo">
                    <img src={rlogo} alt="" />
                    <img src={namelogo} alt="" /></div>
                <ul>
                    <li>
                        <Link to={"/App"}>Home</Link>
                        <div className="lieffect"></div>
                    </li>
                    <li>
                        <Link to={"/About"}>Amaliyot</Link>
                        <div className="lieffect"></div>
                    </li>
                    <li>
                        <Link to={"/Biography"}>Biography</Link>
                        <div className="lieffect"></div>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                        <div className="lieffect"></div>
                    </li>
                </ul>
                <div className=""></div>
            </div>
        </div>
    )
}

export default Navbar