import styled from "styled-components";
export const CustomHeaderContainer = styled.h1`
  text-transform: uppercase;
  font-family: inherit;
  font-size: ${(props) => (props.size ? props.size : "30")}px;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "white")};
  margin: 0;
  letter-spacing: 2px;
`;
