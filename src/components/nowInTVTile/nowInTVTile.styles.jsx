import styled from "styled-components";
const mainColor = "#84b82a";
const buttonGray = "#a7ada9";
const whiteColor = "#fff";
export const NowInTVTileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./img/magic.jpg");
  background-position: 0 70px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavigationContainer = styled.div`
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  i {
    color: ${whiteColor};
    font-size: 30px;
  }
`;

export const NavigationButton = styled.button`
  border: 2px solid ${buttonGray};
  text-transform: uppercase;
  border-radius: 50%;
  color: ${whiteColor};
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5));
  background-color: Transparent;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 15px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  background-color: ${mainColor};
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  p {
    margin: 0;
    color: ${whiteColor};
    font-weight: 500;
  }
  &:after {
    content: "";
    position: relative;
    left: -50%;
    top: 130%;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid ${mainColor};
    clear: both;
  }
`;
export const ViewCountContainer = styled.div`
  p:nth-child(1) {
    text-align: center;
    font-size: 10px;
  }
  p {
    margin: 3px;
  }
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
export const MovieInfoContainer = styled.div`
  box-sizing: border-box;
  padding-right: 60px;
  font-size: 20px;
  width: 80%;
  border-right: 1px solid ${whiteColor};
  font-weight: 500;
`;

export const FooterInfoContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.48503151260504207) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  p {
    font-size: 20px;
    color: white;
    margin: 3px;
  }
  p:nth-child(2) {
    font-size: 10px;
    text-transform: uppercase;
    color: ${mainColor};
  }
`;
