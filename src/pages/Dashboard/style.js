import styled from "styled-components";

const PopularTopicContainer = styled.div`
  position: relevant;
  width: 746px;
  height: 586px;
  left: 210px;
  top: 350px;
`;

const Background = styled.div`
  display: flex;
	flex-direction: column;
	background-color: #f2f2f2;
`;

const LineChartDiv = styled.div`
  margin-left:40px;
  position: relevant;
  width: 50%;
  height:586px;
`;

const RecentWritingBox = styled.div`
  display:flex;
  height:30vh;
  width:100%;
`;

const BottomRow = styled.div`
  margin-left:40px;
  display:flex;
  flex-direction:row;
  width:100%;
`;

export { PopularTopicContainer, Background, LineChartDiv, RecentWritingBox, BottomRow };
