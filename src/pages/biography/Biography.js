import React from 'react'
import './Biography.css'
// import img from '../../images/me.jpg'

function Biography() {
    return (
        <div className='Biography'>
            {/* <img src={img} alt="" /> */}
            <h1>About me</h1>
            <p>Mening ismim Rahmatillo. Familiyam Ziyoviddinov. Men 2005-yil 28-oktabrda Namangan shahrida tug'ilganman.
                Meni 7 yoshimda ya'ni 2012-Yil 25-Umumiy o'rta ta'lim maktabiga o'qishga berishdi va 2023-yil a'lo baholar bilan yakunladim.
                Hozirda oilamizda 5 kishi bor : Dadam, Onam, Men, Katta singlim va kichik singlim.
                2023-yil Yanvar oyida  Algoritm O'quv markaziga IT Web dasturlash kurslariga bora boshladim.
                U yerda 1 oy 'html' 2 oy 'css' 1 oy 'sass,tailwind,bootstrap' 2 oy 'JavaScript' 3 oy 'react.js' yo'nalishlarida taqsil oldim.
            </p>
        </div>
    )
}

export default Biography