import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
    position: absolute;
    top:20px;
    left:22px;
    right:22px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    line-height: 18px;
  `;
const Topic = ({ taskTopic }) => {
	return (
		<TextBox>
			{/* {taskTopic.slice(0, 100)}... */}
			{taskTopic ? (taskTopic.length > 110 ? `${taskTopic.slice(0, 110)}...` : taskTopic) : ""}
		</TextBox>
	);
};

export default Topic;
