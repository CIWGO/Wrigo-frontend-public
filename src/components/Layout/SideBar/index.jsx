import {
	AppstoreOutlined,
	FormOutlined,
	FileTextOutlined,
	LogoutOutlined,
	UserOutlined,
	PieChartOutlined,
	CrownOutlined
} from "@ant-design/icons";
import { Layout, Menu, Modal } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { userLogout } from "../../../slice/userSlice";
import { useDispatch } from "react-redux";
import clearLocalStorage from "../../../features/clearLocalStorage";
import logo from "../../../pages/Landing/assets/logo.svg";
import logoAndName from "../../../pages/Landing/assets/logoName.svg";
import styled from "styled-components";

const Logo = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  width: 2rem;
`;

const LogoAndName = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  width: 6rem;
`;

export default function SideBar (props) {
	const dispatch = useDispatch();
	const { Sider } = Layout;
	const navigate = useNavigate();
	const { confirm } = Modal;
	const isMobile = useMediaQuery({ maxWidth: 992 });
	const handleLogout = () => {
		confirm({
			title: "Are you sure you want to log out?",
			okText: "Yes",
			cancelText: "Cancel",
			transitionName: "",
			onOk () {
				dispatch(userLogout());
				clearLocalStorage();
				navigate("/landing");
			}
		});
	};

	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="50"
			theme="light"
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				position: "fixed"
			}}
		>

			<div style={{ padding: "10px 0" }}>
				<Link
					to="/user/dashboard"
					style={{
						color: "#2F71DA",
						fontSize: "35px"
					}}
				>
					{isMobile ? <Logo src={logo}/> : <LogoAndName src={logoAndName}/>}
				</Link>
			</div>

			<Menu
				style={{
					height: "90%",
					display: "flex",
					flexDirection: "column",
					border: "none"
				}}
				mode="inline"
				defaultSelectedKeys={["dashboard"]}
				selectedKeys={[props.selectedTab]}
			>
				<Menu.ItemGroup style={{ flex: "9" }}>
					<Menu.Item
						key="dashboard"
						icon={<AppstoreOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="dashboard">Dashboard</NavLink>
					</Menu.Item>

					<Menu.Item
						key="writings"
						icon={<FormOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="writings">Writings</NavLink>
					</Menu.Item>

					<Menu.Item
						key="topics"
						icon={<FileTextOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="topics">Topics</NavLink>
					</Menu.Item>
					<Menu.Item
						key="analytics"
						icon={<PieChartOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="analytics">Analytics</NavLink>
					</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup style={{ flex: "1" }}>
					<Menu.Item
						key="infinite"
						icon={<CrownOutlined style={{ color: "#2F71DA" }}/>}
						style={{ textAlign: "left" }}
					>
						<NavLink to="infinite" style={{ color: "#2F71DA" }}>Wrigo Infinite</NavLink>
					</Menu.Item>

					<Menu.Item
						key="profile"
						icon={<UserOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="profile">Profile</NavLink>
					</Menu.Item>

					<Menu.Item
						key="logout"
						icon={<LogoutOutlined />}
						style={{ textAlign: "left" }}
						onClick={handleLogout}
					>
						Log out
					</Menu.Item>
				</Menu.ItemGroup>

				<style>{".ant-menu-item-group-title {display: none}"}</style>
			</Menu>
		</Sider>
	);
}
