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
	top: 250px;
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

	const scorePlaceHolder = 0;
	const scoreWithDecimal = scorePlaceHolder.toFixed(1);
	const [scores, setScores] = useState([scoreWithDecimal]);
	const scoreHandler = (data) => {
		let finalScore = 0;
		let scoreAverage = 0;

		scoreAverage =
			((data.sampleScore_TR +
				data.sampleScore_CC +
				data.sampleScore_LR +
				data.sampleScore_GRA) /
			4).toFixed(1);

		if (scoreAverage % 1 > 0.5) {
			finalScore = Math.ceil(scoreAverage).toFixed(1);
		} else if (scoreAverage % 1 < 0.5) {
			finalScore = Math.floor(scoreAverage).toFixed(1);
		} else {
			finalScore = scoreAverage.toFixed(1);
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
