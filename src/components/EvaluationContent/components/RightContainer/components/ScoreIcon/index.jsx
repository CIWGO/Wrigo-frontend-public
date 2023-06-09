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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: "Roboto", sans-serif;
	font-size: 20px;
	color: #2F71DA;
	align-self: end; 
  font-weight: 400;
`;

const Score = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
font-family: "Roboto", sans-serif;
	font-size: 60px;
	color: #2F71DA;
	line-height: 1;
	font-weight: 500;
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
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		getTopic({ token, uid, type: "oneTopic", topic_id: props.topicId }).then((response) => {
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
