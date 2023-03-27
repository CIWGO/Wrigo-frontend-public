import { getTopic } from "../../../../../../utils";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
	display: flex;
	justify-content: end;
  margin-right: 20px;
  margin-top: 25px;
	gap: 10px;
`;

const Band = styled.div`
	font-size: 24px;
	color: #2F71DA;
	align-self: end; 
  font-weight: 700;
`;

const Score = styled.div`
	font-size: 62px;
	color: #2F71DA;
	line-height: 1;
	font-weight: 700;
`;

const ScoreIcon = (props) => {
	const [scores, setScores] = useState(["Not available"]);
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

	useEffect(() => {
		// topic_id: "29dae72e-f633-432c-a105-b0e40f562710" (props.topicID)
		getTopic({ type: "oneTopic", topic_id: "29dae72e-f633-432c-a105-b0e40f562710" }).then((response) => {
			if (response.status === 200 && response.data.oneSampleWithFeedback) {
				scoreHandler(response.data.oneSampleWithFeedback);
			} else if (response.status === 500) {
				alert("Something is wrong network, please retry.");
			}
		});
	}, []);
	return (
		<StyledDiv>
			<Band>BAND</Band>
			<Score>{scores}</Score>
		</StyledDiv>
	);
};

export default ScoreIcon;
