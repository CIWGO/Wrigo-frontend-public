import {
	SignUpTag,
	LoginTag,
	Logo,
	Nav,
	NavContainer,
	NavItems,
	Title
} from "./style";

const LandingPage = () => {
	return (
		<>
			<header>
				<Nav>
					<NavContainer>
						<Logo>WRIGO</Logo>
						<NavItems>
							<SignUpTag to="/signup">
                Sign up
							</SignUpTag>

							<LoginTag to="/login">
                Log in
							</LoginTag>
						</NavItems>
					</NavContainer>
				</Nav>
			</header>
			<main>
				<Title>Landing Page</Title>
			</main>
		</>
	);
};

export default LandingPage;
