// import styled from "styled-components";
import "./index.scss";
import React, { useState } from "react";

// const StyledSideBar = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// 	position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #f5f5f5;
// `;

const SideBar = () => {
	const [activeMenu, setActiveMenu] = useState(0);

	const handleMenuClick = (index) => {
		setActiveMenu(index);
	};

	return (
		<div className="side-bar">

			<h1 className="title">
				<a href="/dashboard">WRIGO</a>
			</h1>

			<ul className="main">
				<li>
					<a
						href="/dashboard"
						className={activeMenu === 0 ? "active" : ""}
						onClick={() => handleMenuClick(0)}
					>
						DashBoard
					</a>
				</li>
				<li>
					<a
						className={activeMenu === 1 ? "active" : ""}
						onClick={() => handleMenuClick(1)}
					>
						Writings
					</a>
				</li>
				<li>
					<a
						className={activeMenu === 2 ? "active" : ""}
						onClick={() => handleMenuClick(2)}
					>
						Topics
					</a>
				</li>
			</ul>

			<ul className="personal">
				<li>
					<a
						className={`${activeMenu === 3 ? "active" : ""}`}
						onClick={() => handleMenuClick(3)}
					>
						Profile
					</a>
				</li>
				<li><a href="/signup">Log out</a></li>
			</ul>

		</div>
	);
};

export default SideBar;
