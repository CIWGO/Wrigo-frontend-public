import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
    position: absolute;
    top:10px;
    left:10px;
    font-size: .3rem;
    font-weight: 500;
    text-align: left;
  `;
const Topic = ({ taskTopic }) => {
	return (
		<TextBox>{taskTopic.slice(0, 100)}</TextBox>
	);
};

export default Topic;
