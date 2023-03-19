import { Card } from "antd";
import SampleWriting from "./SampleWriting";
import SampleScore from "./SampleScore";
import styled from "styled-components";
import { useState } from "react";

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
	color: #2f71da;
`;

const TopicCard = (props) => {
	const maxLength = 100;
	const truncatedTopic =
		props.topic.length > maxLength
			? props.topic.slice(0, maxLength) + "..."
			: props.topic;

	const [scores, setScores] = useState([]);
	const scoreHandler = (data) => {
		let finalScore = 0;
		let scoreAverage = 0;

		if (!data) {
			scoreAverage = 0;
		} else {
			scoreAverage =
				(data.sampleScore_TR +
					data.sampleScore_CC +
					data.sampleScore_LR +
					data.sampleScore_GRA) /
				4;
		}

		if (scoreAverage % 1 > 0.5) {
			finalScore = Math.ceil(scoreAverage);
		} else if (scoreAverage % 1 < 0.5) {
			finalScore = Math.floor(scoreAverage);
		} else {
			finalScore = scoreAverage;
		}

		setScores(finalScore);
	};

	return (
		<StyledCard>
			<StyledCardContent>
				<div>
					<p>{truncatedTopic}</p>
				</div>
				<SampleWriting
					topicId={props.topicId}
					onTopicDataChange={scoreHandler}
				/>
				<StyledScore>
					<p style={{ paddingTop: "10px" }}>Sample score</p>
					<SampleScore score={scores} />
				</StyledScore>
			</StyledCardContent>
		</StyledCard>
	);
};

export default TopicCard;
