import React from "react";
import "./library.css";

function library() {
  return (
    <div className="library">
      {" "}
      <button className="btn-works">HOW IT WORKS</button>{" "}
      <div className="title-work-text">
        {" "}
        <div className="wrk-line1">Build experiences</div>
        <div className="wrk-line2">blazingly fast</div>
      </div>
      <div className="wrk-desc">
        Get started with a growing library of ready-made components and popular
        data and app integrations.<br /> Build custom experiences with interactions
        and dynamic values.
      </div>
      <div className="wrk-last buttons">
        <button>Connect</button>
        <button>Drag&Drop</button>
      </div>
    </div>
  );
}

export default library;
