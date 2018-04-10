import React from "react";
import dryDewy from "../images/dryDewy.jpg";
import oilyMatte from "../images/oilyMatte.jpg";

const Results = props => {
  if (props.skinType === "oily") {
    return (
        <img src={oilyMatte} />
    )
  } else {
    return <div></div>;
  }
  if (props.skinType === "dry") {
    return (
      <img src={dryDewy} />
    )
  } else {
    return <div></div>;
  }
};
export default Results;
