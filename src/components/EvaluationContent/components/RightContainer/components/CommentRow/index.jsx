import CriteriaMark from "./components/CriteriaMark";
import Comment from "./components/Comment";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
	background: white;
	border: none;
`;

const StyledDiv = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  font-weight: 500;
  color: #2f71da;
  line-height: 54px;
`;

const CommentRow = () => {
	return (
		<StyledCard>
			<CriteriaMark criteria = "TR"/>
			<Comment />
			<CriteriaMark criteria = "CC"/>
			<Comment />
			<CriteriaMark criteria = "LR"/>
			<Comment />
			<CriteriaMark criteria = "GRA"/>
			<Comment />
			<StyledDiv>
				Overall
			</StyledDiv>
			<Comment />
		</StyledCard>
	);
};

export default CommentRow;
