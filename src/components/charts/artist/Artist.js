import React, { useState } from "react";
import { Img } from "react-image";
import Summary from "./Summary";
import Increase from "../../../assets/artist-ranking/increase.svg";
import Decrease from "../../../assets/artist-ranking/decrease.svg";
import NoChange from "../../../assets/artist-ranking/no-change.svg";
import NotFound from "../../../assets/artist-ranking/not-found.svg";
import ArrowExpand from "../../../assets/arrow-expand.svg";
import "../../../styles/charts/artist.scss";

const Artist = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`artist-row ${expanded ? "expanded" : ""}`}>
      <div className="row">
        <Img
          className="photo"
          src="https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6"
          loading="lazy"
          alt="artist"
        />

        <div className="row-info" onClick={() => setExpanded(!expanded)}>
          <div className="collapsed-ranking">
            <p className="ranking">2</p>
            <Increase className="change-icon" />
          </div>

          <h2 className="artist-name">Ed Sheeran</h2>

          <p className="monthly-listeners">74,383,532 Monthly Listeners</p>
          <div className="divider"></div>
          <ArrowExpand className="arrow-expand" />
        </div>
      </div>

      <div className="expanded-content">
        <div className="left">
          <div className="ranking">asdddddddddddd</div>
          <Summary></Summary>
        </div>
      </div>
    </div>
  );
};

export default Artist;
