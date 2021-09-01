import React from "react";
import { NavbarLinksContainer } from "./navbarLinks.styles";
const NavbarLinks = () => (
  <NavbarLinksContainer>
    <li>
      centrum obsługi klienta
      <span>
        <i className="fas fa-phone-alt"></i> 800 080 800
      </span>
    </li>
    <li>
      <i className="fas fa-search"></i> szukaj
    </li>
    <li>
      <i className="fas fa-user"></i> strefa abonenta
    </li>
  </NavbarLinksContainer>
);

export default NavbarLinks;
