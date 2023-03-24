import styled from "styled-components";
export const Container = styled.div`
  background-color: #ccc;
  height:100%;
  width:100%;
  `;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding:20px;
  aspect-ratio: 16 / 9;
  grid-template-rows:100%;
  grid-template-columns: 60% 38%;
  width:100%;
  max-height:800px;
  max-width:1300px;
  `;

export const GridItem = styled.div`
  display:flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  padding:10px;
  height:auto;
  width:auto;
`;
export const LeftGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-columns: 100%;
  grid-auto-rows: 30% 65%;
  width:100%;
  height:100%;
  `;
export const RightGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-columns: 100%;
  grid-auto-rows: 45% 50%;
  width:100%;
  height:100%;
  `;
