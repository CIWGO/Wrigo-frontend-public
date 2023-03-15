import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
	&& {
		border-radius: 20px;
		width: 250px;
		height: 350px;
		margin-right: 16px;
		margin-bottom: 16px;
		display: inline-block;
        justify-content: left;
	}
	&&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
`;

const StyledCardContent = styled.div`
	p {
		text-align: left;
	}
`;

const TopicCard = (props) => {
	return (
		<StyledCard>
			<StyledCardContent>
				<p>{props.topic}</p>
				<p>{props.sampleWriting}</p>
				<p>Sample writing score</p>
				<p>{props.score}</p>
			</StyledCardContent>
		</StyledCard>
	);
};

export default TopicCard;
