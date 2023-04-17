import styled from "styled-components";

const PopularTopicContainer = styled.div`

  display:flex-column;
  height:100%;
  width:100%;
  @media (max-width: 768px ) {
    display:flex-column;
		grid-template-columns:100%;
    grid-template-rows:auto auto;
    max-width:1000px;
    width:100%;
	}

`;

const Background = styled.div`
  display: flex-column;
  min-height: calc(100vh - 80px);
  height: 100%;
  width: 100%;
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
  margin-top:10px;
  display:grid;
  grid-template-rows:100%;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);

  @media (max-width: 768px ) {
    diplay:grid;
		grid-template-columns:100%;
    grid-template-rows:auto auto;
    aspect-ratio: 2/ 2.8;
	}
`;

const LineChartDiv = styled.div`
  padding-left:20px;
  width: 100%;
  display:flex-column;
  @media (max-width: 768px ) {
    width: 100%;
    padding-left:0px;
    margin-top:20px;
	}
`;

const LineChartBackground = styled.div`
  display:flex-column;
  margin-top:10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius:20px;
  aspect-ratio: 4 /3;

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
