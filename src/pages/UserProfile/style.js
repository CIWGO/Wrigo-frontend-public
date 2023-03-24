import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding:20px;
  aspect-ratio: 16 / 9;
  grid-template-rows:100%;
  grid-template-columns: 60% 38%;
  height:auto;
  width:auto;
  `;
// grid-auto-columns:  60% 40%;
// grid-auto-rows:auto;
// grid-template-columns: auto auto;
// grid-template-rows: auto;
// hight:700px;
// width:1245px;

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
  padding:10px;
`;
export const LeftGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  grid-template-rows: 30% auto;
  width:100%;
  height:100%;
  `;
export const RightGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  grid-template-rows: 50% auto;
  width:100%;
  height:100%;
  `;
export const Container = styled.div`
  background-color: #ccc;
  height:100%;
  width:100%;
  max-height:800px;
  `;
