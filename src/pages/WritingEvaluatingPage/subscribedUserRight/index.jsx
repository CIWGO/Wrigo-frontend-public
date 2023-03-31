import { WritingPageDiv, PaidRight } from "./style";
import NavBar from "./rightNavNar/index";

const subscribedUserRight = ({ writing, topic }) => {
	return (
		<WritingPageDiv>
			<PaidRight>
				<NavBar text={writing} topic={ topic} />
			</PaidRight>
		</WritingPageDiv>
	);
};

export default subscribedUserRight;
