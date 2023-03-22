import HeadingComponent from "../../components/Heading/index.jsx";
import PopularTopics from "../../components/PopularTopics/index.jsx";
import { withTheme } from "styled-components";

const popularTopicsCard = () => {
	return (
		<div>
			<HeadingComponent displayValue={"Popular Topics"} />
			<PopularTopics>

			</PopularTopics>
		</div>
	);
};
export default withTheme(popularTopicsCard);
