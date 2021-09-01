import styled from "styled-components";
const lightGray = "#909090";
const green = "#84b82a";
const borderGray = "#848484";
export const NavbarLinksContainer = styled.ul`
  list-style: none;
  text-transform: uppercase;
  li {
    font-family: "Roboto";
    font-weight: 300;
    color: ${lightGray};
    display: inline-block;
    padding: 0 10px;
  }
  li:not(:last-child) {
    border-spacing: 10px;
    border-right: 1px solid ${borderGray};
  }
  span {
    margin-left: 10px;
    color: ${green};
    font-weight: bold;
  }
`;
