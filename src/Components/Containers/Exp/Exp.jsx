import React from 'react'
import './Exp.css'
import pathImg from "../../../assets/Images/pathImg.png"; 
import cube from "../../../assets/Images/cube.png"; 
function Exp() {
  return (
    <div className="contain">
      <div className="Exp">
        <div className="exp-1">
          <img src={cube} alt="cube" />
          <div className="head-exp-1">
            Connect to <br />
            <div className="blue-box"></div>
          </div>

          <div className="exp-desc-1">
            Tap into popular data sources like Airtable <br />
            PostgreSQl and Lorem ipsum dolor
            <br /> Quae, culpa. Omnis iusto in hic ut atque consequuntur,{" "}
          </div>
          <div className="wrk-last">
            <button>See all integrations </button>
          </div>
        </div>
        <div className="exp-2">
          <img src={pathImg} alt="no img" />
        </div>
      </div>
    </div>
  );
}

export default Exp