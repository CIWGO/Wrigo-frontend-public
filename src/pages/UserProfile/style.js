import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  hight:700px;
  width:1245px;
  align-items: center;
  justify-items: center;
  padding:20px;
  `;
// grid-template-columns: 745px 480px;
// grid-template-rows: 200px 480px;

export const GridItem = styled.div`
  display:flex;
  background-color: #fff;
  ${({ width, height }) => `
    width: ${width};
    height: ${height};
  `};
  align-items: center;
  justify-content: center;
  border-radius:10px;
`;
export const SubGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  `;

export const Container = styled.div`
  background-color: #ccc;
`;
