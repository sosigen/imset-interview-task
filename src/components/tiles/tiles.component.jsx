import React from "react";
import AppTile from "../appTile/appTile.component";
import EarnMoreTile from "../earnMoreTile/earnMoreTile.component";
import NowInTVTile from "../nowInTVTile/nowInTVTile.component.jsx";
import PacketTile from "../packetTile/packetTile.component";
import PromotionTile from "../promotionTile/promotionTile.component";
import SupportTile from "../supportTile/supportTile.component";
import VodTile from "../vodTile/vodTile.component";
import { TilesContainer } from "./tiles.styles";

const Tiles = () => (
  <TilesContainer>
    <EarnMoreTile />
    <VodTile />
    <PacketTile />
    <NowInTVTile />
    <PromotionTile />
    <SupportTile />
    <AppTile />
  </TilesContainer>
);

export default Tiles;
