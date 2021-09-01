import styled from "styled-components";
const hoverColor = "#3c3c3c";
export const BurgerMenuContainer = styled.div`
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${hoverColor};
    cursor: pointer;
  }
`;
