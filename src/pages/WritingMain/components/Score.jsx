import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScoreBox = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: rgb(55, 109, 196);
  position:absolute;
  bottom: 18px;
  left:14px;
  `;
const Draft = styled.div`
   font-size: 1rem;
  font-weight: 200;
  color: rgb(55, 109, 196);
	&:hover{
  color:rgb(27, 53, 95)
	}
  position:absolute;
  bottom: 23px;
  left:15px;
`;

const Score = ({ id }) => {
	const uid = "333";
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
				const previousFeedResponse = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: id, type: "feedback" });
				const previousFeed = previousFeedResponse.data;
				const numbers = [previousFeed[0].score_TR, previousFeed[0].score_LR, previousFeed[0].score_GRA, previousFeed[0].score_CC];
				setScore(calOverall(numbers));
				if (previousFeed) { setIsDraft(false); }
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);
	return (
		<>
			{isDraft ? <Draft><EditOutlined /></Draft> : <ScoreBox>{score}</ScoreBox>}
		</>
	);
};

export default Score;
