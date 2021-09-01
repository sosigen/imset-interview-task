import styled from "styled-components";
const greenColor = "#84b82a";
const borderGray = "#a7ada9";
const whiteColor = "#fff";
export const SupportTileContainer = styled.div`
  background-image: url("./img/blur.jpg");
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1:nth-child(2) {
    color: ${greenColor};
  }
`;

export const SupportHeadersContainer = styled.div``;
export const SupportFooterContainer = styled.p`
  margin: 0;
  color: ${greenColor};
  text-align: center;
`;
export const SupportMainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ArticleLink = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  width: 100%;
  &:first-of-type {
    border-bottom: 1px solid ${borderGray};
  }
  i {
    font-size: 30px;
    color: ${whiteColor};
  }
`;

export const ArticleGroup = styled.div`
  width: 60%;
`;
