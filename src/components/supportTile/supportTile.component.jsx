import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import CircleIconLarge from "../circleIconLarge/circleIconLarge.component";
import {
  ArticleGroup,
  ArticleLink,
  SupportFooterContainer,
  SupportHeadersContainer,
  SupportMainSection,
  SupportTileContainer,
} from "./supportTitle.styles";
const SupportTile = () => (
  <SupportTileContainer>
    <SupportHeadersContainer>
      <CustomHeader weight="600">nasz support</CustomHeader>
      <CustomHeader size="11" weight="500">
        propozycje naszego tv-maniaka na weekend
      </CustomHeader>
    </SupportHeadersContainer>

    <SupportMainSection>
      <CircleIconLarge icon="user"></CircleIconLarge>
      <ArticleGroup>
        <ArticleLink>
          <CustomHeader size="12">
            zobacz co kuba znalazł ciekawego na weekend
          </CustomHeader>
          <i className="fas fa-arrow-right"></i>
        </ArticleLink>
        <ArticleLink>
          <CustomHeader size="12">
            podyskutuj z nim o filmach już w piątek
          </CustomHeader>
          <i class="fas fa-comment-alt"></i>
        </ArticleLink>
      </ArticleGroup>
    </SupportMainSection>
    <SupportFooterContainer>
      Zostań naszym ekspertem i poprowadź przedweekendowy czat z użytkownikami
    </SupportFooterContainer>
  </SupportTileContainer>
);

export default SupportTile;
