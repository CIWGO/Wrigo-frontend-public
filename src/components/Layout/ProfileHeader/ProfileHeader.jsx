import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	width: 100%;
	display: inline-block;
	border-radius: 0;
	border-color: #fff;
	background: linear-gradient(to right, #2f71da, #7baeff);
`;

const StyledContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

const StyledUsername = styled.div`
	color: #fff;
	font-size: 30px;
	margin-left: 30px;
`;

const ProfileHeader = () => {
	const [username, setUsername] = useState([]);
	useEffect(() => {
		const usernameStored = localStorage.getItem("username");
		if (usernameStored) {
			setUsername(usernameStored);
		}
	}, []);

	return (
		<StyledCard>
			<StyledContentContainer>
				<StyledUsername>@{username}</StyledUsername>
			</StyledContentContainer>
		</StyledCard>
	);
};

export default ProfileHeader;
