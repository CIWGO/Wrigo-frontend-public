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
  aspect-ratio: 4 / 3;
  grid-template-rows:100%;
  grid-template-columns:calc(65% - 10px) calc(35% - 10px);;
  width:100%;
  max-width:1300px;
  @media (max-width: 768px ) {
		grid-template-columns: 1fr;
    grid-template-rows:100%;
    max-width:1000px;
    width:100%;
    aspect-ratio: 4/5;
	}
  @media (max-width: 500px ) {
		grid-template-columns: 1fr;
    grid-template-rows:100%;
    max-width:1000px;
    width:100%;
    aspect-ratio: 3/5;
	}
  `;

export const GridItem = styled.div`
  display:flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  padding:10px;
  height:100%;
  width:100%;
`;

export const LeftGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-columns: 100%;
  grid-auto-rows: calc(40% - 10px) calc(60% - 10px);
  width:100%;
  height:100%;
  @media (max-width: 768px) {
  aspect-ratio: 1/ 4;
  width:100%;
	}
  `;

export const RightGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-columns: 100%;
  grid-auto-rows: calc(50% - 10px) calc(50% - 10px);
  width:100%;
  height:100%;
  @media (max-width: 768px) {
    aspect-ratio: 1 / 2;
    min-height:500px;
    width:100%;
	}
  `;
