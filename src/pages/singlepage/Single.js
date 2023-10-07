import React from 'react'
import './Single.css'
import { useLocation } from 'react-router-dom'

function Single() {
    const product = useLocation().state
    console.log(product)
    return (
        <div className='Singlepage'>
            <div className="leftjs"><img src={product.image} alt="" /></div>
            <div className="rightjs">
                <h1 className='title'>{product.title}</h1>
                <h1 className='longtitle'>{product.longtitle}</h1>
                <div className="dadofp">
                    <p>{product.text}</p>
                </div>

            </div>
        </div>
    )
}

export default Single