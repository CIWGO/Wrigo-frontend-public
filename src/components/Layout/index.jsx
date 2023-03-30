import { Layout } from "antd";
import { useTheme } from "styled-components";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Header, Content } = Layout;
const PageLayout = () => {
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(
		window.location.pathname?.split("/")[2]
	);
	const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });
	useEffect(() => {
		setSelectedTab(window.location.pathname?.split("/")[2]);
	}, [location]);

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
						display: "flex"
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							padding: "0 10px"
						}}
					>
						<SearchBar></SearchBar>
					</div>
				</Header>

				<Content
					style={{
						margin: "0"
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
