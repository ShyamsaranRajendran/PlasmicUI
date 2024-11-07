import React from "react";
import "./Partner.css";
import Partner1 from "../../../assets/Images/partner-1.png";
import Partner2 from "../../../assets/Images/partner-2.png";
import Partner3 from "../../../assets/Images/partner-1.png";
import Partner4 from "../../../assets/Images/partner-1.png";
import Partner5 from "../../../assets/Images/partner-5.png";
import Partner6 from "../../../assets/Images/partner-6.png";
function Partner() {
  return (
    <div className="Partner">
      <div className="Partner-text">Loved by teams around the world</div>
      <div className="partner-logos">
        <div className="partner-part-1">
          <img src={Partner1} alt="" />
          <img src={Partner2} alt="" />
          <img src={Partner3} alt="" />
          <img src={Partner4} alt="" />
          <img src={Partner5} alt="" />
          <img src={Partner6} alt="" />
        </div>
        <div className="partner-part-1">
          <img src={Partner1} alt="" />
          <img src={Partner2} alt="" />
          <img src={Partner3} alt="" />
          <img src={Partner4} alt="" />
          <img src={Partner5} alt="" />
        </div>
        <div className="partner-part-1">
          <img src={Partner1} alt="" />  <img src={Partner3} alt="" />
        
          <img src={Partner5} alt="" />
          <img src={Partner6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partner;
