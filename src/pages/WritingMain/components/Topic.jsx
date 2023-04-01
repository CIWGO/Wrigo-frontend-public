import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
    position: absolute;
    top:14px;
    left:12px;
    right:8px;
    font-size: .3rem;
    font-weight: 500;
    text-align: left;
    line-height:13px;
  `;
const Topic = ({ taskTopic }) => {
	return (
		<TextBox>{taskTopic.slice(0, 100)}...</TextBox>
	);
};

export default Topic;
