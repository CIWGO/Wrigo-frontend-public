import { Layout, theme } from "antd";
import styled from "styled-components";
import React, { useEffect } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { Outlet, useLocation } from "react-router-dom";

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const { Header, Content } = Layout;
const PageLayout = () => {
	const location = useLocation();
	let selectedTab = window.location.pathname?.split("/")[2];

	useEffect(() => {
		selectedTab = window.location.pathname?.split("/")[2];
	}, [location]);

	const {
		token: { colorBgContainer }
	} = theme.useToken();
	return (
		<StyledLayout>
			<SideBar selectedTab={selectedTab}/>

			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
						display: "flex"
					}}
				>

					<div style={{
						display: "flex",
						alignItems: "center",
						padding: "0 10px"
					}}>
						<SearchBar ></SearchBar>
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
							background: colorBgContainer
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</StyledLayout>
	);
};
export default PageLayout;
