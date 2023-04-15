import NavBar from "./rightNavNar/index";
import { RightCard } from "../style";

const SubscribedUserRight = ({ writing, topic, premiumFeedback, setPrevious }) => {
	return (
		<RightCard>
			<NavBar text={writing} topic={topic} premiumFeedback={premiumFeedback} setPrevious={setPrevious}/>
		</RightCard>
	);
};

export default SubscribedUserRight;
