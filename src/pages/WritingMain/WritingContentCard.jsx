import React from "react";
import Score from "./components/Score";
import SubmitTime from "./components/SubmitTime";
import Topic from "./components/Topic";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
const IconBox = styled.button`
  position: absolute;
  right: 10px;
  bottom: 5px;
  color:#828080;
  &:hover{
    color:#000;
    font-weight: bold;
  }
  background-color: none;
  border:none;
  border-radius: 7px;
  cursor:pointer;
`;
const WritingContentCard = ({
	loading,
	id,
	taskTopic,
	writingContent,
	submitTime
}) => {
	return (
		<>
			<Topic taskTopic={taskTopic}/>
			<Score id={id}/>
			<SubmitTime submitTime={submitTime}/>
			<IconBox>
				<DeleteOutlined/>

			</IconBox>

		</>
	);
};

export default WritingContentCard;
