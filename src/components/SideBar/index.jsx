import React from "react";
import { AppstoreOutlined, FormOutlined, FileTextOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";

const SideBar = () => {
	return (
		<div className="side-bar">

			<Link className="title" to="dashboard"><h3>WRIGO</h3></Link>

			<ul className="main">
				<li>
					<NavLink to="dashboard">
						<AppstoreOutlined className="icon"/>
						DashBoard
					</NavLink>
				</li>

				<li>
					<NavLink to="writings">
						<FormOutlined className="icon" />
						Writings
					</NavLink>
				</li>

				<li>
					<NavLink to="topic">
						<FileTextOutlined className="icon"/>
						Topics
					</NavLink>
				</li>
			</ul>

			<ul className="personal">
				<li>
					<NavLink to="userprofile">
						<UserOutlined className="icon"/>
						Profile
					</NavLink>
				</li>

				<li>
					<Link to="/landing">
						<LogoutOutlined className="icon"/>
						Log out
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
