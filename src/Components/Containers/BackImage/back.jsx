import React from 'react'
import './back.css'
import backimg from "../../../assets/Images/background.png"; 

function back() {
  return (
    <div className='backImage'>
        <img src={backimg} alt="no back img" />
    </div>
  )
}

export default back