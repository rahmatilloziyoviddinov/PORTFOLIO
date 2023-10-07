import React from 'react'
import './Mainpart11.css'
import TypeIt from "typeit-react";
import imgme from "../../images/me.png"
import Swiperslider from '../swiper/Swiperslider';
import bgvideo from '../../videos/bgvideo.mp4'

function Mainpart1() {

    return (
        <div className='Mainpart1'>
            <div className="left">

                <div className="text">
                    <p>Hello My friends &#128075;</p>
                    <h1>My name is: <TypeIt className='name'>Rahmatillo</TypeIt> </h1>
                    <h1>I am a: <br /><TypeIt className='name'>Web developer&#128187;</TypeIt></h1>
                </div>
                <div className="part2_of_text">
                    <p>Check out what programs or programming languages I can work on and the projects I've done &#128073;</p>
                    <Swiperslider />
                </div>
            </div>
            <div className="right">
                <video autoPlay muted loop src={bgvideo}></video>
                <img src={imgme} alt="" />
            </div>

        </div>
    )

}

export default Mainpart1