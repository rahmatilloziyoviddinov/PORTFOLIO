import React from 'react'
import './Shadoweffect.css'

function Shadoweffect() {
    let title = document.querySelector("h1");
    document.addEventListener("mousemove", e => {
        let x = e.clientX;
        let y = e.clientY;
        title.style.setProperty("--x", `${(x - window.innerWidth / 2) / 100}px`);
        title.style.setProperty("--y", `${(y - window.innerHeight / 2) / 100}px`);
    });

    return (
        <div>

            <h1>CSS!</h1>
            <link href="https://fonts.googleapis.com/css?family=Bungee+Outline" rel="stylesheet"></link>
        </div>
    )
}

export default Shadoweffect