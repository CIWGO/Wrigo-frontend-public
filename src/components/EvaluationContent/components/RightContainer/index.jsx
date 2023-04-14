import CommentRow from "./components/CommentRow";
import ScoreIcon from "./components/ScoreIcon";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  background: white;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 60px;
  margin-bottom: 25px;
  margin-right: 20px;
	width: 830px;
	padding-left: 20px;
	padding-right: 20px;

	@media (max-width: 580px) {
		padding-left: 0;
		padding-right: 0;
	  }
`;
const RightContainer = (props) => {
	return (
		<StyledCard>
			<ScoreIcon topicId={props.topicId} />
			<CommentRow topicId={props.topicId} />
		</StyledCard>
	);
};

export default RightContainer;
