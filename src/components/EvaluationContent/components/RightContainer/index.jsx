import CommentRow from "./components/CommentRow";
import ScoreIcon from "./components/ScoreIcon";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  background: white;
  border-radius: 20px;
  margin-left: 30px;
  margin-top: 76px;
  margin-bottom: 25px;
  margin-right: 70px;
	width: 830px;
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
