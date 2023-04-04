import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import BackButton from "./components/BackButton";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  background: #f5f5f5;
	min-height: 100%;
	overflow: auto;
`;

const ContentSection = (props) => {
	return (
		<>
			<BackButton />
			<StyledDiv>
				<LeftContainer topicId={props.topicId} />
				<RightContainer topicId={props.topicId}/>
			</StyledDiv>
		</>
	);
};

export default ContentSection;
