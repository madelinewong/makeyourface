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
    return <img src={oilyMatte} />;
  }
  if (props.skinType === "oily" && props.finish === "Radiant") {
    return <img src={oilyRadiant} />;
  }
  if (props.skinType === "oily" && props.finish === "Smooth") {
    return <img src={oilyLightCoverage} />;
  }
  if (props.skinType === "oily" && props.finish === "Dewy") {
    return <img src={oilyDewy} />;
  }
  if (props.skinType === "combo" && props.finish === "Matte") {
    return <img src={comboMatte} />;
  }
  if (props.skinType === "combo" && props.finish === "Radiant") {
    return <img src={comboRadiant} />;
  }
  if (props.skinType === "combo" && props.finish === "Smooth") {
    return <img src={comboSmooth} />;
  }
  if (props.skinType === "combo" && props.finish === "Dewy") {
    return <img src={comboDewy} />;
  }
  if (props.skinType === "dry" && props.finish === "Matte") {
    return <img src={dryMatte} />;
  }
  if (props.skinType === "dry" && props.finish === "Radiant") {
    return <img src={dryRadiant} />;
  }
  if (props.skinType === "dry" && props.finish === "Smooth") {
    return <img src={dewySmooth} />;
  }
  if (props.skinType === "dry" && props.finish === "Dewy") {
    return <img src={dryDewy} />;
  } else {
    return <div>No Results</div>;
  }
};

export default Results;
