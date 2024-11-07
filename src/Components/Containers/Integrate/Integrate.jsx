import React from "react";
import "./Integrate.css";
import pentagon from "../../../assets/Images/pentagon.png";
function Exp() {
  return (
    <div className="integrate">
      <div className="top-int">
        <button className="btn-power">
          <span>Power</span>
        </button>
        <br />
        <div className="int-title">
          Integrate with any <br />
          <span>codebase</span>
        </div>
        <div className="int-desc">
          Unlike other no-code and low-code builders, Plasmic integrates with
          your existing
          <br />
          codebase, so you're never confined to a walled garden.
        </div>
      </div>

      <div className="other-section-int">
        <div className="first-int">
          <div className="half">
            <img src={pentagon} alt="pentagon" />
            <div className="title-first-int">
              Build with your <br /><span>Components</span>
            </div>
            <div className="first-int-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              soluta veritatis minus eveniet a aut vel labore assumenda, illum
              culpa placeat deleniti inventore voluptatem iusto harum recusandae
              sit! Officiis, magni! Aliquam voluptas quisquam, aperiam esse
            </div>
          </div>
          <div className="second-half">.</div>
        </div>

        <div className="second-int">
          <div className="second-half"></div>

          <div className="half">
            <img src={pentagon} alt="logo" />
            <div className="title-second-int">
              Build with your <br /> <span>Components</span>
            </div>
            <div className="second-int-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              soluta veritatis minus eveniet a aut vel labore assumenda, illum
              culpa placeat deleniti inventore voluptatem iusto harum recusandae
              sit! Officiis, magni! Aliquam voluptas quisquam, aperiam esse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
