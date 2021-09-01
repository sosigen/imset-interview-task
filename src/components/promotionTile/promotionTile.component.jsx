import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import {
  PriceContainer,
  PromotionDescription,
  PromotionHeadersContainer,
  PromotionPrice,
  PromotionTileContainer,
} from "./promotionTile.styles";
const PromotionTile = () => (
  <PromotionTileContainer>
    <PromotionHeadersContainer>
      <CustomHeader size="30" weight="600">
        pakiet 20gb lte
      </CustomHeader>
      <CustomHeader size="15" weight="600">
        promocja
      </CustomHeader>
    </PromotionHeadersContainer>
    <PromotionDescription>
      <p>Dla tych, którzy nie wyobrażają sobie życia bez internetu:</p>
      <ul>
        <li>oglądaj filmy umieszczone w sieci</li>
        <li>ściągaj duże pliki</li>
        <li>korzystaj z poczty, komunikatora</li>
        <li>surfuj swobodnie</li>
      </ul>
    </PromotionDescription>
    <PromotionPrice>
      <CustomHeader size="16" weight="600">
        swoboda i mobilność za
      </CustomHeader>
      <PriceContainer>
        <span>50</span>zł
      </PriceContainer>
    </PromotionPrice>
  </PromotionTileContainer>
);
export default PromotionTile;
