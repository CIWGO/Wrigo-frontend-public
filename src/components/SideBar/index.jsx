import "./index.scss";
import React, { useState } from "react";
import { AppstoreOutlined, FormOutlined, FileTextOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
	const [activeMenu, setActiveMenu] = useState(0);

	return (
		<div className="side-bar">

			<h1 className="title">
				<a href="/dashboard">WRIGO</a>
			</h1>

			<ul className="main">
				<li>
					<Link
						className={activeMenu === 0 ? "active" : ""}
						onClick={() => setActiveMenu(0)}
						to={"/dashboard"}
					>
						<AppstoreOutlined className="icon"/>
						DashBoard
					</Link>
				</li>

				<li>
					<Link
						className={activeMenu === 1 ? "active" : ""}
						onClick={() => setActiveMenu(1)}
						to={"/writings/first"}
					>
						<FormOutlined className="icon" />
						Writings
					</Link>
				</li>

				<li>
					<Link
						className={activeMenu === 2 ? "active" : ""}
						onClick={() => setActiveMenu(2)}
						to={"/writings/second"}
					>
						<FileTextOutlined className="icon"/>
						Topics
					</Link>
				</li>
			</ul>

			<ul className="personal">
				<li>
					<Link
						className={activeMenu === 3 ? "active" : ""}
						onClick={() => setActiveMenu(3)}
						to={"/"}>
						<UserOutlined className="icon"/>
						Profile
					</Link>
				</li>

				<li>
					<a href="/signup">
						<LogoutOutlined className="icon"/>
						Log out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
