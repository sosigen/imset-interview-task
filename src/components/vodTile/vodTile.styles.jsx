import styled from "styled-components";
const borderGray = "#a7ada9";
const whiteColor = "#fff";
export const VodTileContainer = styled.div`
  font-family: "Roboto";
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url("./img/cap.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover button {
    visibility: visible;
  }
`;

export const HeadersContainer = styled.div``;
export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    color: ${whiteColor};
    font-size: 30px;
  }
`;
export const NavigationButton = styled.button`
  border: 2px solid ${borderGray};
  text-transform: uppercase;
  color: ${whiteColor};
  visibility: hidden;
  cursor: pointer;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5));
  background-color: Transparent;
  background-repeat: no-repeat;
  width: 40%;
  height: 50px;
`;
export const FooterContainer = styled.div`
  display: flex;

  p {
    color: ${whiteColor};
    font-weight: 500;
  }
`;
export const ViewCountContainer = styled.div`
  p:nth-child(1) {
    font-size: 10px;
    text-align: center;
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

export const SubinfoContainer = styled.p`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
`;
