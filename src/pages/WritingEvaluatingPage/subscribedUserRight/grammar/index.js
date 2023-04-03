import { Title } from "../component/title";
import CheckedGrammar from "./checkedGrammar";
import { GrammarContainer } from "../style";

const GrammarSection = ({ text, checkedText }) => {
	return (
		<GrammarContainer>
			<Title title="Grammar" />
			<CheckedGrammar text={text} checkedText={ checkedText} />
		</GrammarContainer>
	);
};

export default GrammarSection;
