import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

import React from "react";
import styled from "styled-components";
import BackButton from "./components/BackButton";

const StyledDiv = styled.div`
	&& {
		display: flex;
		background: #F5F5F5;
		height: 100%;
	}
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
