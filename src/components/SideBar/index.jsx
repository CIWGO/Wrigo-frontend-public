import styled from "styled-components";
import "./index.scss";

const StyledSideBar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
	position: fixed;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
`;

const SideBar = () => {
	return (
		<StyledSideBar>
			<h1 className="title">WRIGO</h1>

			<ul className="main">
				<li>
					<a href="">DashBoard</a>
				</li>
				<li>
					<a href="">Writings</a>
				</li>
				<li>
					<a href="">Topics</a>
				</li>
			</ul>

			<ul className="personal">
				<li>
					<a href="">Profile</a>
				</li>
				<li>
					<a href="">Log out</a>
				</li>
			</ul>
		</StyledSideBar>
	);
};

export default SideBar;
