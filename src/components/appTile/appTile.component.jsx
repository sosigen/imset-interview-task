import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import { AppTileContainer } from "./appTile.styles";

const AppTile = () => (
  <AppTileContainer>
    <CustomHeader weight="600">aplikacja</CustomHeader>
    <p>
      Bacon ipsum dolor amet biltong doner kevin buffalo t-bone. Doner ball tip
      swine shoulder jowl. Sirloin tongue beef ribs.
    </p>
  </AppTileContainer>
);

export default AppTile;
