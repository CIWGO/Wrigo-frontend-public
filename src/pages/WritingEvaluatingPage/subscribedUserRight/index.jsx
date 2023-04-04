import { Button, PaidRight } from "./style";
import NavBar from "./rightNavNar/index";

const SubscribedUserRight = ({ writing, topic, premiumFeedback, setPrevious }) => {
	console.log(writing, topic, premiumFeedback);
	return (
		<PaidRight>
			<NavBar text={writing} topic={topic} premiumFeedback={premiumFeedback} />
			<Button onClick={() => setPrevious(true)}>previous feedback</Button>
		</PaidRight>
	);
};

export default SubscribedUserRight;
