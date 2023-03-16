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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	p {
		text-align: left;
	}
`;

const StyledScore = styled.div`
	position: absolute;
	bottom: 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	color: #2F71DA;
`;

const TopicCard = (props) => {
	const MAX_LENGTH = 100;
	const truncatedTopic =
		props.topic.length > MAX_LENGTH
			? props.topic.slice(0, MAX_LENGTH) + "..."
			: props.topic;

	return (
		<StyledCard>
			<StyledCardContent>
				<div>
					<p>{truncatedTopic}</p>
				</div>
				<p>{props.sampleWriting}</p>
				<StyledScore>
					<p style={{ paddingTop: "10px" }}>Sample score</p>
					{/* <p>{props.score}</p> */}
					<p style={{ paddingLeft: "55px", fontSize: 30 }}>7.0</p>
				</StyledScore>
			</StyledCardContent>
		</StyledCard>
	);
};

export default TopicCard;
