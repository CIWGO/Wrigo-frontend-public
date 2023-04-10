import styled from "styled-components";

const PopularTopicContainer = styled.div`
  // position: relevant;
  // width: 746px;
  // height: 586px;
  // left: 210px;
  // top: 350px;
  width:100%;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  height: auto;
  padding: 0 20px 20px 20px;
  background-color: #f5f5f5;
`;

const RecentWritingBox = styled.div`
  display:flex;
  flex-direction:row;
  height:30vh;
  width:100%;
  background-color: red;
`;

const BottomRow = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:row;
  width:100%;
  height:auto;
  // display: grid;
  // grid-gap: 20px;
  // grid-template-columns: 1fr 1fr;
  // grid-auto-rows: calc(40% - 10px) calc(60% - 10px);
  // width:100%;
  // height:100%;
  // @media (max-width: 768px) {
  // aspect-ratio: 1/ 4;
  // width:100%;
`;

const LineChartDiv = styled.div`
  padding-left:20px;
  width: 100%;
  min-height:586px;
  height:auto;
`;

const LineChartBackground = styled.div`
  display:flex;
  margin-top:10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius:20px;
  height:75svh;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: rgb(47, 113, 218);
  height: 30px;
  text-align: start;
`;

const UtilityCardWrap = styled.div`
  padding-right:10px;
`;

const UtilityCardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.primaryColor};
  margin-top: 20px;
`;

const RecentDiv = styled.div`
	display:flex;
	align-items:left;
	flex-direction: column;
`;

const GridItem = styled.div`
  display:flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  padding:10px;
  height:100%;
  width:100%;
`;

export { PopularTopicContainer, Background, LineChartDiv, RecentWritingBox, BottomRow, LineChartBackground, Title, UtilityCardWrap, UtilityCardsWrapper, RecentDiv, GridItem };
