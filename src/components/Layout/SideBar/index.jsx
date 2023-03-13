import {
	AppstoreOutlined,
	FormOutlined,
	FileTextOutlined,
	LogoutOutlined,
	UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, Modal } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
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
			<div style={{ flex: "1", color: "#2F71DA", fontSize: "35px" }}>
				{isMobile ? "W" : "WRIGO"}
			</div>

			<Menu
				style={{
					flex: "9",
					height: "90%",
					display: "flex",
					flexDirection: "column",
					border: "none"
				}}
				mode="inline"
				defaultSelectedKeys={["1"]}
			>
				<Menu.ItemGroup style={{ flex: "9" }}>
					<Menu.Item
						key="1"
						icon={<AppstoreOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="dashboard">Dashboard</NavLink>
					</Menu.Item>

					<Menu.Item
						key="2"
						icon={<FormOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="writings">Writings</NavLink>
					</Menu.Item>

					<Menu.Item
						key="3"
						icon={<FileTextOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="topic">Topics</NavLink>
					</Menu.Item>
				</Menu.ItemGroup>

				<Menu.ItemGroup style={{ flex: "1" }}>
					<Menu.Item
						key="4"
						icon={<UserOutlined />}
						style={{ textAlign: "left" }}
					>
						<NavLink to="profile">Profile</NavLink>
					</Menu.Item>

					<Menu.Item
						key="5"
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
		</Sider>
	);
}
