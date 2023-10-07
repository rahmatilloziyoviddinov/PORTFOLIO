import React from 'react'
import "./Footer.css"
import { BiSolidUser } from 'react-icons/bi';
import { PiTelegramLogo } from 'react-icons/pi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RiTiktokLine } from 'react-icons/ri';
import { AiOutlineFacebook } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';

function Footer() {
  return (
    <div className="bigfooter">
      <div className='footer'>
        <div className="footername">
          <BiSolidUser />
          <p>RahmatilloZiyoviddinov</p>
        </div>
        <div className="footericon">
          <div className="footertelegram">
            <a target='blank' href="https://t.me/rahmatillo0077"><PiTelegramLogo /></a>
          </div>
          <div className="footerinstagram">
            <a target='blank' href="https://www.instagram.com/r_a_h_m_a_t_i_l_o"><BsInstagram /></a>
          </div>
          <div className="footeryoutube">
            <a target='blank' href="https://www.youtube.com/@rahmatilloziyoviddinov5988"><AiOutlineYoutube /></a>
          </div>
          <div className="footertiktok">
            <a target='blank' href="https://www.tiktok.com/rahmatilloziyoviddinov"><RiTiktokLine /></a>
          </div>
          <div className="footerfacebook">
            <a target='blank' href="https://www.facebook.com/profile.php?id=100086303611198&mibextid=ZbWKwL"><AiOutlineFacebook /></a>
          </div>
          <div className="footerlocatsiya">
            <a target='blank' href="https://maps.app.goo.gl/VHfbYUP9XNhe69mM7"><MdOutlineLocationOn /></a>
          </div>
          <div className="footerlinkedin">
            <a target='blank' href="https://www.linkedin.com/in/rahmatillo-ziyoviddinov-3b8683284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><CiLinkedin /></a>
          </div>
          <div className="footergithub">
            <a target='blank' href="https://www.github.com/rahmatilloziyoviddinov"><FiGithub /></a>
          </div>

        </div>
        <div className="footernumber">
          <a href="tel:+998941520131"><FiPhoneCall /> +998-94-152-01-31</a>
        </div>
      </div>
    </div>
  )
}

export default Footer