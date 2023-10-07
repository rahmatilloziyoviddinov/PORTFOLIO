import React from 'react'
import './Foricon.css'
import { BiLogoTelegram } from 'react-icons/bi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { BsArrowUp } from 'react-icons/bs'
import { Link } from 'react-router-dom';



function Foricon() {
    return (
        <div className='icons'>
            <a href="#"><div className="arrow">
                <BsArrowUp />
            </div></a>
            <a target='blank' href="https://t.me/rahmatillo0077"><div className="telegram">
                <BiLogoTelegram />
            </div></a>
            <a target='blank' className="phone" href="tel:+998941520131"><div className="phone">
                <BsFillTelephoneOutboundFill />
            </div></a>
        </div>
    )
}

export default Foricon