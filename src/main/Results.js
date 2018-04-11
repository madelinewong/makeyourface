import React from "react";

import oilyMatte from "../images/oilyMatte.jpg";
import oilyRadiant from "../images/oilyRadiant.jpg";
import oilyLightCoverage from "../images/oilyLightCoverage.jpg"; //oilySmooth
import oilyDewy from "../images/oilyDewy.jpg";

import dryMatte from "../images/dryMatte.jpg";
import dryRadiant from "../images/dryRadiant.jpg";
import dewySmooth from "../images/dewySmooth.jpg"; //drySmooth
import dryDewy from "../images/dryDewy.jpg";

import comboMatte from "../images/comboMatte.jpg";
import comboRadiant from "../images/comboRadiant.jpg";
import comboSmooth from "../images/comboSmooth.jpg";
import comboDewy from "../images/comboDewy.jpg";

const Results = props => {
  if (props.skinType === "oily" && props.finish === "Matte") {
    return <img src={oilyMatte} className="all" />;
  }
  if (props.skinType === "oily" && props.finish === "Radiant") {
    return <img src={oilyRadiant} className="all" />;
  }
  if (props.skinType === "oily" && props.finish === "Smooth") {
    return <img src={oilyLightCoverage} className="all" />;
  }
  if (props.skinType === "oily" && props.finish === "Dewy") {
    return <img src={oilyDewy} className="all" />;
  }
  if (props.skinType === "combo" && props.finish === "Matte") {
    return <img src={comboMatte} className="all" />;
  }
  if (props.skinType === "combo" && props.finish === "Radiant") {
    return <img src={comboRadiant} className="all" />;
  }
  if (props.skinType === "combo" && props.finish === "Smooth") {
    return <img src={comboSmooth} clasName="all" />;
  }
  if (props.skinType === "combo" && props.finish === "Dewy") {
    return <img src={comboDewy} className="all" />;
  }
  if (props.skinType === "dry" && props.finish === "Matte") {
    return <img src={dryMatte} className="all" />;
  }
  if (props.skinType === "dry" && props.finish === "Radiant") {
    return <img src={dryRadiant} className="all" />;
  }
  if (props.skinType === "dry" && props.finish === "Smooth") {
    return <img src={dewySmooth} className="all" />;
  }
  if (props.skinType === "dry" && props.finish === "Dewy") {
    return <img src={dryDewy} className="all" />;
  } else {
    return <div>No Results</div>;
  }
};

export default Results;
