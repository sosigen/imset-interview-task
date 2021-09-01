import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import IconRow from "../iconRow/iconRow.component";
import {
  CreatePacketButton,
  CreatePacketSection,
  DescriptionSection,
  HeadersContainer,
  PacketTileContainer,
} from "./packetTile.styles";

const PacketTile = () => (
  <PacketTileContainer>
    <HeadersContainer>
      <CustomHeader weight="600">stwórz swój własny pakiet</CustomHeader>
      <CustomHeader size="10">telewizja - internet - telefon</CustomHeader>
    </HeadersContainer>
    <IconRow icons={["tv", "server", "phone", "wifi"]} size="large"></IconRow>
    <DescriptionSection>
      <p>
        wybierz <span>ulubione kanały tv</span>
      </p>
      <p>
        wybierz <span>prędkość internetu</span>
      </p>
      <p>
        wybierz <span>ilość minut na rozmowy</span>
      </p>
      <p>
        wybierz <span>internet mobilny</span>
      </p>
    </DescriptionSection>
    <CreatePacketSection>
      <CreatePacketButton>stwórz pakiet</CreatePacketButton>
      <p>lub wybierz pakiet, przygotowany przez nas</p>
    </CreatePacketSection>
  </PacketTileContainer>
);

export default PacketTile;
