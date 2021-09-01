import React from "react";
import BurgerMenu from "../burgerMenu/burgerMenu.component";
import NavbarLinks from "../navbarLinks/navbarLinks.component";
import { TopNavbarContainer } from "./topNavbar.styles";
const TopNavbar = () => (
  <TopNavbarContainer>
    <BurgerMenu />
    <NavbarLinks />
  </TopNavbarContainer>
);

export default TopNavbar;
