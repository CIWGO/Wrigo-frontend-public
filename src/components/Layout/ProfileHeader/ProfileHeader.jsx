import { Button } from "antd";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const StyledButtonContainer = styled.div`
	display: flex;
	padding-top: 13px;
`;

const StyledButton = styled(Button)`
	height: 25px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	border-color: #fff;
	background: none;
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
				<StyledButtonContainer>
					{/* <StyledButton type="primary">
						<NavLink to="edit" style={{ fontSize: "12px", fontWeight: 700 }}>Edit profile</NavLink>
					</StyledButton> */}
					<StyledButton type="primary">
						<NavLink to="wrigoinfinite" style={{ fontSize: "12px", fontWeight: 700 }}>Wrigo Infinite</NavLink>
					</StyledButton>
				</StyledButtonContainer>
			</StyledContentContainer>
		</StyledCard>
	);
};

export default ProfileHeader;
