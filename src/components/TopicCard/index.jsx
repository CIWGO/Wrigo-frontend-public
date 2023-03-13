import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
	&& {
		border-radius: 20px;
		width: 300px;
		height: 400px;
		margin-right: 16px;
		margin-bottom: 16px;
		display: inline-block;
	}
	&&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
`;

const TopicCard = (props) => {
	return (
		<StyledCard>
			<p>{props.topic}</p>
			<p>{props.sampleWriting}</p>
			<p>Sample writing score</p>
			<p>{props.score}</p>
		</StyledCard>
	);
};

export default TopicCard;
