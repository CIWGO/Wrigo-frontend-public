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

const ContentSection = () => {
	return (
		<>
			<BackButton />
			<StyledDiv>
				<LeftContainer />
				<RightContainer />
			</StyledDiv>
		</>
	);
};

export default ContentSection;
