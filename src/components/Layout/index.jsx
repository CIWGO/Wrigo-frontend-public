import { Layout } from "antd";
import styled, { useTheme } from "styled-components";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { Outlet, useLocation } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const { Header, Content } = Layout;
const Container = styled(Layout)`
height:100vh;
background-color: rgb(245, 245, 245);
`;
const SubContainer = styled(Layout)`
background-color: rgb(245, 245, 245);
margin-left:  200px;
height: 100%;
@media (max-width: 992px) {
margin-left:  50px;
}
`;

const PageLayout = () => {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(
		window.location.pathname?.split("/")[2]
	);

	useEffect(() => {
		setSelectedTab(window.location.pathname?.split("/")[2]);
	}, [location]);

	// const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
	// Determine if the current route is /user/profile
	const isProfileRoute = location.pathname.includes("/user/profile");
	const isInfiniteRoute = location.pathname.includes("/user/infinite");

	const {
		background
	} = useTheme();

	return (
		<Container>
			<SideBar
				selectedTab={selectedTab}
			/>

			<SubContainer>
				<Header
					style={{
						padding: 0,
						background,
						display: "flex",
						height: "80px"
					}}
				>
					{/* Conditionally render the search bar or some texts */}
					{isProfileRoute
						? (<ProfileHeader/>)
						: isInfiniteRoute
							? ""
							: (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										padding: "0 10px"
									}}
								>
									<SearchBar />
								</div>
							)}

				</Header>

				<Content
					style={{
						margin: "0"
						// minHeight: "95vh"
						// backgroundColor: "grey"
					}}
				>
					<div
						style={{
							padding: 0,
							minHeight: 360,
							height: "100%",
							background
						}}
					>
						<Outlet />
					</div>
				</Content>
			</SubContainer>
		</Container>
	);
};
export default PageLayout;
