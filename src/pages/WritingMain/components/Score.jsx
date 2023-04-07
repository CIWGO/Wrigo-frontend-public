import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { viewHistory } from "../../../utils";

const ScoreBox = styled.div`
	font-size: 30px;
	font-weight: 400;
	color: #2f71da;
	position: absolute;
	bottom: 25px;
	left: 22px;
`;

const Draft = styled.div`
	font-size: 20px;
	font-weight: 200;
	color: #2f71da;
	&:hover {
		color: rgb(27, 53, 95);
	}
	position: absolute;
	bottom: 28px;
	left: 22px;
`;

const Score = ({ id }) => {
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	const [score, setScore] = useState("");
	const [isDraft, setIsDraft] = useState(true);
	function calOverall (numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		const avg = sum / numbers.length;
		return Math.round(avg * 2) / 2;
	}
	useEffect(() => {
		async function fetchData () {
			try {
				const previousFeedResponse = await viewHistory({
					token,
					uid,
					writing_id: id,
					type: "feedback"
				});
				const previousFeed = previousFeedResponse.data;
				const numbers = [
					previousFeed[0].score_TR,
					previousFeed[0].score_LR,
					previousFeed[0].score_GRA,
					previousFeed[0].score_CC
				];
				setScore(calOverall(numbers));
				if (previousFeed) {
					setIsDraft(false);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);
	return (
		<>
			{isDraft
				? (
					<Draft>
						<EditOutlined />
					</Draft>
				)
				: (
					<ScoreBox>{score}</ScoreBox>
				)}
		</>
	);
};

export default Score;
