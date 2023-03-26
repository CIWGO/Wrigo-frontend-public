/* eslint-disable no-undef */
import React from "react";
import { Card } from "antd";
import styled from "styled-components";
// import WritingScore from "./WritingScore";

const { Meta } = Card;

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
    cursor: pointer;
  }
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .score {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  p {
    text-align: left;
	word-wrap: break-word;
	white-space: normal;
  }
`;

const WritingCard = ({ taskTopic, writingContent, onClick, selected }) => {
	const maxLength = 100;
	const truncatedContent =
		writingContent.length > maxLength
			? writingContent.slice(0, maxLength) + "..."
			: writingContent;

	return (
		<StyledCard onClick={onClick} className={selected ? "selected" : ""}>
			<StyledCardContent>
				<Meta title={taskTopic} description={truncatedContent} />
				{/* <div className="score">
					<WritingScore score={score} />
				</div> */}
			</StyledCardContent>
		</StyledCard>
	);
};

export default WritingCard;
