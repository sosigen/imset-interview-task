import React from "react";
import { CircleIconContainer } from "./cirecleIcon.styles";

const CircleIcon = ({ icon }) => {
  return (
    <CircleIconContainer>
      <i className={`fas fa-${icon}`}></i>
    </CircleIconContainer>
  );
};

export default CircleIcon;
