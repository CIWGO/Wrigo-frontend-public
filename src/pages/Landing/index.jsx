// import {
// 	SignUpTag,
// 	LoginTag,
// 	Logo,
// 	Nav,
// 	NavContainer,
// 	NavItems,
// 	Title
// } from "./style";
import Spline from "@splinetool/react-spline";
import {
	AppContainer,
	Header,
	Main,
	Section,
	H1,
	SubTitle,
	Footer,
	Navbar,
	NavMenu,
	NavMenuItem,
	NavLink,
	AboutTitle,
	AboutSection,
	TeamSection,
	TeamTitle,
	TeamList,
	IconTeam,
	TeamMember,
	SignUpTag,
	LoginTag
} from "./style.js";

import FeatureSection from "./components/FeatureSection.jsx";
import PriceWrap from "./components/PriceSection.jsx";

import DevIcon from "./assets/developer.png";
import DevopsIcon from "./assets/devops.png";
import TechIcon from "./assets/support.png";

const LandingPage = () => {
	const developers = [
		"Hai Yang (Leo)",
		"Zihan Zhou",
		"Eric Li",
		"Shuchen Wu",
		"Amber Xu",
		"Albert Yu",
		"Renee Zheng",
		"Chang Liu",
		"Yinghe Zhou",
		"Zizhen Luo",
		"Lucas Lin"
	];
	const devops = [
		"Jerry Hu",
		"Gary Xiong",
		"Zhongxian Shen",
		"Zixin Wang",
		"Lawrence Li",
		"Joe Jia"
	];
	return (
		<AppContainer>
			{/* <div style={{ width: "100 %", height: "100%" }}>
				<Header>
					<H1>Welcome to Wrigo: Your Ultimate IELTS Writing Partner</H1>
				</Header>
				<Spline scene="https://prod.spline.design/2402yDMIzA267Ci0/scene.splinecode" />
			</div> */}
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
				<Navbar>
					<NavMenu>
						<NavMenuItem>
							<NavLink href="#home">Home</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#features">Features</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#pricing">Pricing</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#about">About</NavLink>
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
				<div style={{ position: "relative", zIndex: 1 }}>
					<Header>
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
			</Main>
			<Footer>
				<p>&copy; {new Date().getFullYear()} Wrigo. All rights reserved.</p>
			</Footer>
		</AppContainer>
	);
};
<Section id="about">
	<AboutTitle>About the team</AboutTitle>
	<AboutSection>
		<TeamSection>
			<TeamTitle>Tech Consultants</TeamTitle>
			<TeamList>
				<TeamMember>
					<IconTeam src={TechIcon} alt="Tech" />
          Jason Haixin
				</TeamMember>
				<TeamMember>
					<IconTeam src={TechIcon} alt="Tech" />
          Genesis
				</TeamMember>
			</TeamList>
		</TeamSection>
		<TeamSection>
			<TeamTitle>Development Team</TeamTitle>
			<TeamList>
				{developers.map((developer, index) => (
					<TeamMember key={index}>
						<IconTeam src={DevIcon} alt="Developer" />
						{developer}
					</TeamMember>
				))}
			</TeamList>
		</TeamSection>
		<TeamSection>
			<TeamTitle>DevOps Team</TeamTitle>
			<TeamList>
				{devops.map((devops, index) => (
					<TeamMember key={index}>
						<IconTeam src={DevopsIcon} alt="Devops" />
						{devops}
					</TeamMember>
				))}
			</TeamList>
		</TeamSection>
	</AboutSection>
</Section>;
export default LandingPage;
