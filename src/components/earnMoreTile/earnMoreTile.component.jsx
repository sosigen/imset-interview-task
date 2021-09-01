import React from "react";
import CustomHeader from "../customHeader/customHeader.component";
import IconRow from "../iconRow/iconRow.component";
import {
  BotLeftSection,
  BotMiddleSection,
  BotRightSection,
  BotSection,
  Dot,
  EarnMoreTileContainer,
  TopSection,
} from "./earnMoreTile.styles";

const EarnMoreTile = () => (
  <EarnMoreTileContainer>
    <TopSection>
      <CustomHeader weight="600">zyskaj więcej</CustomHeader>
    </TopSection>
    <BotSection>
      <BotLeftSection>
        <IconRow icons={["wifi", "gift"]} />
        <CustomHeader weight="600" size="36">
          kup internet,
        </CustomHeader>
        <CustomHeader size="36">
          a <span style={{ color: "#675190" }}>hbo go</span>
        </CustomHeader>
        <CustomHeader size="25">dostaniesz za</CustomHeader>
      </BotLeftSection>
      <BotMiddleSection>
        <CustomHeader weight="600">
          <span style={{ color: "#aa2755", fontSize: "75px" }}>1</span>
          <span style={{ color: "#aa2755", fontSize: "25px" }}>zł</span>
        </CustomHeader>
      </BotMiddleSection>
      <BotRightSection>
        <Dot active />
        <Dot />
        <Dot />
      </BotRightSection>
    </BotSection>
  </EarnMoreTileContainer>
);

export default EarnMoreTile;
