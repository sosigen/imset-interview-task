import React from "react";
import { CircleIconLargeContainer } from "./circleIconLarge.styles";

const CircleIconLarge = ({ icon }) => {
  return (
    <CircleIconLargeContainer>
      <i className={`fas fa-${icon}`}></i>
    </CircleIconLargeContainer>
  );
};

export default CircleIconLarge;
