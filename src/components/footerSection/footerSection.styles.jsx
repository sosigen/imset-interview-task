import styled from "styled-components";
const purpleColor = "#675190";
const greenColor = "#84b82a";
const grayColor = "#5c5c5c";
const borderGray = "#848484";

export const FooterSectionContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
export const LeftSection = styled.div`
  width: 50%;
  margin-right: 80px;
  div {
    padding: 10px 0;
  }
`;
export const TopLeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppSection = styled.div`
  p {
    color: ${grayColor};
  }
  div {
    i {
      margin-right: 10px;
    }
    font-size: 30px;
    color: ${purpleColor};
  }
`;

export const Helpline = styled.div`
  p {
    color: ${grayColor};
  }
  div {
    i {
      margin-right: 10px;
    }
    font-size: 30px;
    color: ${greenColor};
  }
`;

export const BotLeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${borderGray};
  font-size: 12px;
`;

export const Navbar = styled.div`
  width: 40%;
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li {
      color: ${grayColor};
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  width: 10%;
  color: white;
`;

export const ClientService = styled.div`
  p {
    color: ${grayColor};
  }
  div {
    i {
      margin-right: 10px;
    }
    font-size: 30px;
    color: ${greenColor};
  }
`;
