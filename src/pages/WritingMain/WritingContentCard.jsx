import React from "react";
import Score from "./components/Score";
import SubmitTime from "./components/SubmitTime";
import Topic from "./components/Topic";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
const IconBox = styled.button`
  position: absolute;
  right: 12px;
  bottom: 10px;
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
	submitTime,
	handleDelete

}) => {
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");

	return (
		<>
			<Topic taskTopic={taskTopic}/>
			<Score id={id}/>
			<SubmitTime submitTime={submitTime}/>
			<IconBox>
				<DeleteOutlined onClick={(event) => handleDelete(token, uid, id, event)}/>

			</IconBox>

		</>
	);
};

export default WritingContentCard;
