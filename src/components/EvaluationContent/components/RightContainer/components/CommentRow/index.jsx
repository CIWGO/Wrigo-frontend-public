import CriteriaMark from "./components/CriteriaMark";
import Comment from "./components/Comment";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
	background: white;
	border: none;
`;

const CommentRow = () => {
	return (
		<StyledCard>
			<CriteriaMark />
			<Comment />
			<CriteriaMark />
			<Comment />
			<CriteriaMark />
			<Comment />
			<CriteriaMark />
			<Comment />
			<CriteriaMark />
			<Comment />
		</StyledCard>
	);
};

export default CommentRow;
