import { GrammarContainer } from "../style";
import { Title } from "../component/title";

const WritingSampleSection = () => {
	const writing = "The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed. The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed.  The essay is well-structured and the ideas are clearly expressed. ";
	return (
		<GrammarContainer>
			<Title title="Writing Sample" />
			{writing}
		</GrammarContainer>

	);
};

export default WritingSampleSection;
