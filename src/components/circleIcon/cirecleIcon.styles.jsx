import styled from "styled-components";
const borderColor = "#8cb0bf";
export const CircleIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${borderColor};
  border-radius: 50%;
  i {
    color: white;
    font-size: 20px;
  }
`;
