import {
	SignUpTag,
	LoginTag,
	Logo,
	Nav,
	NavContainer,
	NavItems,
	Title
} from "./style";
// import { defaultFrontEndPrefix } from "../../constants/index";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<>
			<header>
				<Nav>
					<NavContainer>
						<Logo>WRIGO</Logo>
						<NavItems>
							{/* <SignUpTag href={`http://${defaultFrontEndPrefix}/signup`}>
                Sign up
							</SignUpTag>
							<LoginTag href={`http://${defaultFrontEndPrefix}/login`}>
                Log in
							</LoginTag> */}

							<SignUpTag>
								<Link to="/signup">
                Sign up
								</Link>
							</SignUpTag>

							<Link to="/login">
								<LoginTag>
                Log in
								</LoginTag>
							</Link>

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
