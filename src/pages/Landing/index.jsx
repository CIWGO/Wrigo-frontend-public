import {
	SignUpTag,
	LoginTag,
	Logo,
	Nav,
	NavContainer,
	NavItems,
	Title
} from "./style";
import { defaultFrontEndPrefix } from "../../constants/index";

const LandingPage = () => {
	return (
		<>
			<header>
				<Nav>
					<NavContainer>
						<Logo>WRIGO</Logo>
						<NavItems>
							<SignUpTag href={`http://${defaultFrontEndPrefix}/signup`}>
                Sign up
							</SignUpTag>
							<LoginTag href={`http://${defaultFrontEndPrefix}/users/login`}>
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
