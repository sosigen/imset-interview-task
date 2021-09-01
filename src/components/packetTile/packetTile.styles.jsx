import styled from "styled-components";
const borderGray = "#a7ada9";
const whiteColor = "#fff";
const purpleColor = "#675190";
export const PacketTileContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${purpleColor};
  grid-column: span 2;
  width: 100%;
  height: 100%;
`;
export const CreatePacketSection = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin: 0;
    color: white;
  }
`;
export const CreatePacketButton = styled.button`
  border: 2px solid ${borderGray};
  text-transform: uppercase;
  color: ${whiteColor};
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5));
  background-color: Transparent;
  background-repeat: no-repeat;
  width: 100%;
  height: 40px;
`;
export const HeadersContainer = styled.div`
  align-self: flex-start;
`;

export const DescriptionSection = styled.div`
  position: relative;
  z-index: 1000;
  transform: translateY(-30px);
  background-color: ${purpleColor};
  display: flex;
  color: ${whiteColor};
  text-transform: uppercase;
  font-weight: 300;
  justify-content: space-around;
  p {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 157px;
  }
  span {
    text-align: center;
    width: 110px;
    font-weight: 500;
  }
`;
