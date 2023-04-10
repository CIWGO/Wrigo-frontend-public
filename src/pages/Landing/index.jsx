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
	H2,
	SubTitle,
	Footer,
	Navbar,
	NavMenu,
	NavMenuItem,
	NavLink,
	SectionList,
	Feature,
	FeatureTitle,
	FeatureDescription,
	TeamSection,
	TeamTitle,
	TeamList,
	TeamMember,
	PriceSection,
	PriceCard,
	PriceTitle,
	PriceValue,
	PriceFeatures,
	SignUpTag,
	LoginTag
} from "./style.js";

const LandingPage = () => {
	return (
		<AppContainer>

			{/* <div style={{ width: "100 %", height: "100%" }}>
				<Header>
					<H1>Welcome to Wrigo: Your Ultimate IELTS Writing Partner</H1>
				</Header>
				<Spline scene="https://prod.spline.design/2402yDMIzA267Ci0/scene.splinecode" />
			</div> */}
			<div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
				<Spline
					scene="https://prod.spline.design/2402yDMIzA267Ci0/scene.splinecode"
					spline-resize="maxWidth: 1024, maxHeight: 768"
					style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
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
						<SubTitle>Unlock the full potential <br />
  with your IELTS Writing Partner
						</SubTitle>
					</Header>
				</div>
			</div>

			<Main>
				<Section id="features">
					<Header>
						Revolutionize your IELTS writing preparation with Wrigo, the
						cutting-edge web app powered by OpenAI services. Our platform
						utilizes ChatGPT to automatically grade your written English
						language tasks, providing personalized feedback that enhances your
						preparation for IELTS assessments. At Wrigo, our mission is to
						transform the language assessment landscape, ensuring every
						individual can realize their full language learning potential.
					</Header>
					<H2>Features</H2>
					<Feature>
						<FeatureTitle>Free User Benefits</FeatureTitle>
						<SectionList>
							<li>
								<FeatureDescription>
									IELTS Writing Grading: Receive accurate and objective grading
									for your IELTS writing tasks, helping you understand your
									current level and areas of improvement.
								</FeatureDescription>
							</li>
							<li>
								<FeatureDescription>
									Evaluation and Feedback: Get feedback based on official IELTS
									criteria, tailored to your specific needs.
								</FeatureDescription>
							</li>
							<li>
								<FeatureDescription>
									Writing Performance Analytics: Monitor your progress over
									time, track your improvements, and stay focused on your IELTS
									writing goals.
								</FeatureDescription>
							</li>
						</SectionList>
					</Feature>
					<Feature>
						<FeatureTitle>Wrigo Infinite Benefits</FeatureTitle>
						<p>
							Unlock the full potential of Wrigo with our Infinite subscription,
							offering an unparalleled IELTS writing experience.
						</p>
						<SectionList>
							<li>
								<FeatureDescription>
									Detailed Feedback: Dive deeper into each IELTS writing
									criteria with specific content analysis from your submitted
									tasks.
								</FeatureDescription>
							</li>
							<li>
								<FeatureDescription>
									Grammar Fix: Sharpen your grammar skills with expert guidance
									and personalized recommendations.
								</FeatureDescription>
							</li>
							<li>
								<FeatureDescription>
									Writing Reasoning and Supporting Example Suggestions: Receive
									tailored suggestions based on the relevant IELTS writing
									topic, helping you build stronger arguments and present
									clearer ideas.
								</FeatureDescription>
							</li>
						</SectionList>
					</Feature>
				</Section>
				<Section id="pricing">
					<H2>Price Comparison</H2>
					<PriceSection>
						<PriceCard>
							<PriceTitle>Free User</PriceTitle>
							<PriceValue>$0.00</PriceValue>
							<PriceFeatures>
								<li>IELTS Writing Grading</li>
								<li>Evaluation and Feedback</li>
								<li>Writing Performance Analytics</li>
							</PriceFeatures>
						</PriceCard>
						<PriceCard>
							<PriceTitle>Wrigo Infinite</PriceTitle>
							<PriceValue>$9.99</PriceValue>
							<PriceFeatures>
								<li>All Free User Features</li>
								<li>Detailed Feedback on Criteria</li>
								<li>Grammar Fix</li>
								<li>Writing Reasoning and Suggestions</li>
							</PriceFeatures>
						</PriceCard>
					</PriceSection>
				</Section>
				<Section>
					<H2>Join Wrigo Today and Transform Your IELTS Writing Preparation</H2>
					<p>
						Let us empower your IELTS writing journey with our innovative
						approach, designed to help you achieve test-ready status and
						demonstrate your true capabilities. Experience the difference that a
						commitment to inclusivity, accessibility, and cutting-edge
						technology can make in your IELTS writing preparation.
					</p>
				</Section>
				<Section id="about">
					<H2>About</H2>
					<TeamSection>
						<TeamTitle>Tech Consultants</TeamTitle>
						<TeamList>
							<TeamMember>Tech Consultant 1</TeamMember>
							<TeamMember>Tech Consultant 2</TeamMember>
						</TeamList>
					</TeamSection>
					<TeamSection>
						<TeamTitle>Development Team</TeamTitle>
						<TeamList>
							{Array.from({ length: 10 }, (_, i) => (
								<TeamMember key={i}>Full-stack Engineer {i + 1}</TeamMember>
							))}
						</TeamList>
					</TeamSection>
					<TeamSection>
						<TeamTitle>DevOps Team</TeamTitle>
						<TeamList>
							{Array.from({ length: 6 }, (_, i) => (
								<TeamMember key={i}>DevOps Engineer {i + 1}</TeamMember>
							))}
						</TeamList>
					</TeamSection>
				</Section>
			</Main>
			<Footer>
				<p>&copy; {new Date().getFullYear()} Wrigo. All rights reserved.</p>
			</Footer>
		</AppContainer>
	);
};

export default LandingPage;
