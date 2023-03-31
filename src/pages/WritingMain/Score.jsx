import React from "react";
import styled from "styled-components";
const ScoreBox = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: rgb(55, 109, 196);
  position:absolute;
  bottom: 13px;
  left:20px;
  `;

const Score = () => {
	return (
		<ScoreBox>7.5</ScoreBox>
	);
};

export default Score;
