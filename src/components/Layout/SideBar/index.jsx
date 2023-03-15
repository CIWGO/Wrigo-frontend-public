import {
	AppstoreOutlined,
	FormOutlined,
	FileTextOutlined,
	LogoutOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, Modal } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function SideBar () {
	const { Sider } = Layout;
	const navigate = useNavigate();
	const { confirm } = Modal;

	const handleLogout = () => {
		confirm({
			title: "Are you sure you want to log out?",
			okText: "Yes",
			cancelText: "Cancel",
			onOk () {
				navigate("/landing");
			}
		});
	};
	const isMobile = useMediaQuery({ maxWidth: 992 });

	const defaultTab = window.location.pathname?.split("/").pop() || "dashboard";

	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="50"
			theme="light"
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Link to="/user/dashboard" style={{ flex: "1", color: "#2F71DA", fontSize: "35px" }}>
				{isMobile ? "W" : "WRIGO"}
			</Link>

			<Menu
				style={{
					flex: "9",
					height: "90%",
					display: "flex",
					flexDirection: "column",
					border: "none"
				}}
				mode="inline"
				defaultSelectedKeys={defaultTab}
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
				</Menu.ItemGroup>

				<Menu.ItemGroup style={{ flex: "1" }}>
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

				<style>
					{".ant-menu-item-group-title {display: none}"}
				</style>
			</Menu>

			{/* <Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={defaultTab}
				items={[
					{
						key: "dashboard",
						icon: <AppstoreOutlined />,
						label: <NavLink to="dashboard">Dashboard</NavLink>
					},
					{
						key: "writings",
						icon: <FormOutlined />,
						label: <NavLink to="writings">Writings</NavLink>
					},
					{
						key: "topic",
						icon: <FileTextOutlined />,
						label: <NavLink to="topic">Topics</NavLink>
					}
				]}
			/> */}
		</Sider>
	);
}