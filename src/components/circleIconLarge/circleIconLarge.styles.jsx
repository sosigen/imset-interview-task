import styled from "styled-components";
const borderColor = "#8cb0bf";
const whiteColor = "#fff";
const purpleColor = "#675190";
export const CircleIconLargeContainer = styled.div`
  box-sizing: border-box;
  padding: 15px;
  min-width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  background-clip: content-box;
  background-color: ${whiteColor};
  padding: 15px;
  align-items: center;
  border: 2px solid ${borderColor};
  border-radius: 50%;
  i {
    color: ${purpleColor};
    font-size: 50px;
  }
`;
