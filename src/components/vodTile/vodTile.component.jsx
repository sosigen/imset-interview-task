import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import {
  FooterContainer,
  HeadersContainer,
  MovieInfoContainer,
  NavigationButton,
  NavigationContainer,
  SubinfoContainer,
  ViewCountContainer,
  VodTileContainer,
} from "./vodTile.styles";

const VodTile = () => (
  <VodTileContainer>
    <HeadersContainer>
      <CustomHeader weight="600">VOD</CustomHeader>
      <CustomHeader size="12">video na żądanie</CustomHeader>
    </HeadersContainer>
    <NavigationContainer>
      <i className="fas fa-arrow-left"></i>
      <NavigationButton>kup film</NavigationButton>
      <i className="fas fa-arrow-right"></i>
    </NavigationContainer>
    <FooterContainer>
      <MovieInfoContainer>
        <p>Kapitan Ameryka: Zimowy Żołnierz</p>
        <SubinfoContainer>
          <span style={{ color: "#688b2c", textTransform: "uppercase" }}>
            Nowości - Akcja
          </span>
          <span style={{ color: "#2c8fbd" }}>14,00 zł</span>
        </SubinfoContainer>
      </MovieInfoContainer>
      <ViewCountContainer>
        <p>film obejrzy</p>
        <p>125</p>
        <p>
          <i className="fas fa-users"></i>
        </p>
      </ViewCountContainer>
    </FooterContainer>
  </VodTileContainer>
);

export default VodTile;
