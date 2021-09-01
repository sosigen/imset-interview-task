import styled from "styled-components";
const greenColor = "#84b82a";
const purpleColor = "#675190";
const grayColor = "#262626";
const whiteColor = "#fff";
export const PromotionTileContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  background-color: ${grayColor};
  color: ${whiteColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PromotionHeadersContainer = styled.div`
  h1:nth-child(1) {
    color: ${greenColor};
  }
  h1:nth-child(2) {
    color: ${purpleColor};
  }
`;

export const PromotionDescription = styled.div`
  font-size: 16px;
  ul {
    list-style-type: square;
  }
  li::marker {
    color: ${greenColor};
  }
`;
export const PromotionPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${greenColor};
  h1 {
    display: flex;
    align-items: center;
    color: ${greenColor};
    width: 40%;
  }
`;

export const PriceContainer = styled.div`
  font-size: 60px;
  width: 30%;
  color: ${purpleColor};
`;
