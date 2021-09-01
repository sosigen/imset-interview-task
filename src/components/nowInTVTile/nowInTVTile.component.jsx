import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import {
  FooterInfoContainer,
  HeaderContainer,
  MovieInfoContainer,
  NavigationButton,
  NavigationContainer,
  NowInTVTileContainer,
  ViewCountContainer,
} from "./nowInTVTile.styles";

const NowInTVTile = () => (
  <NowInTVTileContainer>
    <HeaderContainer>
      <MovieInfoContainer>
        <CustomHeader weight="600">teraz w tv online</CustomHeader>
      </MovieInfoContainer>
      <ViewCountContainer>
        <p>teraz ogląda</p>
        <p>158</p>
        <p>
          <i className="fas fa-users"></i>
        </p>
      </ViewCountContainer>
    </HeaderContainer>

    <NavigationContainer>
      <i className="fas fa-arrow-left"></i>
      <NavigationButton>
        <i class="fas fa-play"></i>
      </NavigationButton>
      <i className="fas fa-arrow-right"></i>
    </NavigationContainer>
    <FooterInfoContainer>
      <p>Anatomia Magii</p>
      <p>Discovery Channel</p>
    </FooterInfoContainer>
  </NowInTVTileContainer>
);

export default NowInTVTile;
