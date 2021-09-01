import React from "react";
import { ReactComponent as BurgerMenuIcon } from "./burgerMenu.svg";
import { BurgerMenuContainer } from "./burgerMenu.styles";

const burgerMenu = () => (
  <BurgerMenuContainer>
    <BurgerMenuIcon />
  </BurgerMenuContainer>
);

export default burgerMenu;
