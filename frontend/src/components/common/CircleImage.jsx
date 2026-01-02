import React from "react";
import "./CircleImage.css";

const CircleImage = ({ src, alt, style }) => {
  return <img src={src} alt={alt} className="circleImage" style={style} />;
};

export default CircleImage;
