import React from "react";
import {
  AppSection,
  FooterSectionContainer,
  Helpline,
  TopLeftSection,
  Navbar,
  SocialIcons,
  LeftSection,
  BotLeftSection,
  ClientService,
} from "./footerSection.styles";

const FooterSection = () => (
  <FooterSectionContainer>
    <LeftSection>
      <TopLeftSection>
        <AppSection>
          <p>aplikacja vectra</p>
          <div>
            <i class="fas fa-tablet"></i>
            <span>pobierz</span>
          </div>
        </AppSection>
        <Helpline>
          <p>infolinia sprzedażowa</p>
          <div>
            <i class="fas fa-mobile-alt"></i>
            <span>601 601 601</span>
          </div>
        </Helpline>
      </TopLeftSection>
      <BotLeftSection>
        <Navbar>
          <ul>
            <li>o nas</li>
            <li>kontakt</li>
            <li>kariera</li>
            <li>dla mediów</li>
          </ul>
        </Navbar>
        <SocialIcons>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-youtube"></i>
        </SocialIcons>
      </BotLeftSection>
    </LeftSection>
    <ClientService>
      <p>pomoc techniczna</p>
      <div>
        <i class="fas fa-phone"></i>
        <span>800 800 800</span>
      </div>
    </ClientService>
  </FooterSectionContainer>
);

export default FooterSection;
