import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
    position: absolute;
    top:20px;
    left:22px;
    right:22px;
    font-size: 14px;
    text-align: left;
    line-height:20px;
  `;
const Topic = ({ taskTopic }) => {
	return (
		<TextBox>{taskTopic.slice(0, 100)}...</TextBox>
	);
};

export default Topic;
