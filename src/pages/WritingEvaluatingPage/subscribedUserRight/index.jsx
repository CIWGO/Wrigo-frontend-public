import { Button } from "./style";
import NavBar from "./rightNavNar/index";
import { RightCard } from "../style";

const SubscribedUserRight = ({ writing, topic, premiumFeedback, setPrevious }) => {
	return (
		<RightCard>
			<NavBar text={writing} topic={topic} premiumFeedback={premiumFeedback} />
			<Button onClick={() => setPrevious(true)}>Previous feedback</Button>
		</RightCard>
	);
};

export default SubscribedUserRight;
