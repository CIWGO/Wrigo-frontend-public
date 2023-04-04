import { useParams } from "react-router-dom";
import ContentSection from "../../components/EvaluationContent";
import styled from "styled-components";

const StyledDiv = styled.div`
	height: 100vh;
`;

const TopicContent = () => {
	const { topicId } = useParams();
	return (
		<StyledDiv>
			<ContentSection topicId={topicId}/>
		</StyledDiv>
	);
};

export default TopicContent;
