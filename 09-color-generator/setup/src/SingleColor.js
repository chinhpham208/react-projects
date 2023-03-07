import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor, type }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeOut =setTimeout(() => {
      setAlert(false)
    },3000)
    return ()=> {clearTimeout(timeOut)}
  },[alert])
  return (
    <article
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() =>{ setAlert(true);
      navigator.clipboard.writeText(hexValue)}}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
