import React from "react";
import { CustomHeaderContainer } from "./customHeader.styles";

const CustomHeader = ({ children, ...props }) => (
  <CustomHeaderContainer {...props}>{children}</CustomHeaderContainer>
);
export default CustomHeader;
