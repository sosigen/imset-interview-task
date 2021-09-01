import styled from "styled-components";
export const EarnMoreTileContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("./img/globe.jpg");
  grid-column: span 2;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
`;
export const TopSection = styled.div``;

export const BotSection = styled.div`
  display: flex;
`;

export const BotLeftSection = styled.div``;
export const BotMiddleSection = styled.div`
  align-self: flex-end;
  transform: translate(-70%, 10%);
`;

export const BotRightSection = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  align-items: flex-end;
`;
const activeColor = "#fff";
const inactiveColor = "#6e777a";
export const Dot = styled.div`
  margin: 0 3px;
  background-color: ${(props) => (props.active ? activeColor : inactiveColor)};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
