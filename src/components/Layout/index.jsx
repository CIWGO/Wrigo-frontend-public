import { Layout } from "antd";
import { useTheme } from "styled-components";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const { Header, Content } = Layout;
const PageLayout = () => {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(
		window.location.pathname?.split("/")[2]
	);

	useEffect(() => {
		setSelectedTab(window.location.pathname?.split("/")[2]);
	}, [location]);

	const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
	// Determine if the current route is /user/profile
	const isProfileRoute = location.pathname.includes("/user/profile");
	const isInfiniteRoute = location.pathname.includes("/user/infinite");

	const {
		background
	} = useTheme();

	return (
		<Layout>
			<SideBar
				selectedTab={selectedTab}
			/>

			<Layout style={{ marginLeft: isDesktopOrLaptop ? 200 : 50 }}>
				<Header
					style={{
						padding: 0,
						background,
						display: isInfiniteRoute ? "none" : "flex",
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
						margin: "0",
						minHeight: "90vh"
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
			</Layout>
		</Layout>
	);
};
export default PageLayout;
