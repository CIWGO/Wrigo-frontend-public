import Spline from "@splinetool/react-spline";
import {
	AppContainer,
	Header,
	Main,
	H1,
	SubTitle,
	Footer,
	Logo,
	Navbar,
	NavMenu,
	NavMenuItem,
	NavLink,
	SignUpTag,
	LoginTag
} from "./style.js";

import FeatureSection from "./components/FeatureSection.jsx";
import PriceWrap from "./components/PriceSection.jsx";
import AboutCard from "./components/AboutCard.jsx";
import Download from "./components/Download.jsx";
import logo from "./assets/logoName.svg";

const LandingPage = () => {
	return (
		<AppContainer>
			<Navbar>
				<NavMenu>
					<Logo src={logo} />
				</NavMenu>
				<NavMenu>
					<NavMenuItem>
						<NavLink
							href="#home"
						>
							Home
						</NavLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavLink href="#features">Features</NavLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavLink href="#pricing">Pricing</NavLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavLink href="#download">Download</NavLink>
					</NavMenuItem>
					<NavMenuItem>
						<NavLink href="#about">Team</NavLink>
					</NavMenuItem>
				</NavMenu>
				<NavMenu>
					<NavMenuItem>
						<SignUpTag to="/signup">Sign up</SignUpTag>
					</NavMenuItem>
					<NavMenuItem>
						<LoginTag to="/login">Log in</LoginTag>
					</NavMenuItem>
				</NavMenu>
			</Navbar>
			<div
				style={{
					position: "relative",
					width: "100%",
					minHeight: "100vh",
					overflow: "hidden"
				}}
			>
				<Spline
					scene="https://prod.spline.design/X77p9eQPZldGbZLZ/scene.splinecode"
					spline-resize="maxWidth: 1024, maxHeight: 768"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
				/>
				<div style={{ position: "relative", zIndex: 1 }}>
					<Header id ="home">
						<H1>Wrigo</H1>
						<SubTitle>
							Unlock the full potential <br />
							with your IELTS Writing Partner
						</SubTitle>
					</Header>
				</div>
			</div>

			<Main>
				<FeatureSection />
				<PriceWrap />
				<Download/>
				<AboutCard />
			</Main>
			<Footer>
				<p>&copy; {new Date().getFullYear()} Wrigo. All rights reserved.</p>
			</Footer>
		</AppContainer>
	);
};
export default LandingPage;
