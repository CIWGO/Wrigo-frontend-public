import { WritingPageDiv } from "../style";
import { PaidRight } from "./style";
import NavBar from "./rightNavNar/index";

const subscribedUserRight = () => {
	return (
		<WritingPageDiv>

			<PaidRight>
				<NavBar/>
			</PaidRight>
		</WritingPageDiv>
	);
};

export default subscribedUserRight;
