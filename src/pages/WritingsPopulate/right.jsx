import { useState } from "react";
import {

	Loading,
	LoadingContainer,
	LoadingText,
	NoFeed,
	RightCard
} from "../WritingEvaluatingPage/style";
import SubscribedUserRight from "../WritingEvaluatingPage/subscribedUserRight";
import PreFeedbackCard from "../WritingEvaluatingPage/preFeedbackCard";
import FeedbackCard from "./FeedbackCard";
const RightComponent = ({
	comment,
	mutation,
	preFeed,
	subscribed,
	topic,
	content
}) => {
	const [previous, setPrevious] = useState(false);
	if (mutation.isLoading) {
		return (
			<RightCard>
				<Loading>
					<LoadingContainer>
						<div className="loader"></div>
						<LoadingText>Evaluating your writing...</LoadingText>
						<p>This process may take about a minute.</p>
					</LoadingContainer>
				</Loading>
			</RightCard>
		);
	}

	if (previous && !mutation.loading) {
		return (
			<PreFeedbackCard
				previous={previous}
				setPrevious={setPrevious}
				preFeed={preFeed}
			/>
		);
	}

	if (comment && subscribed) {
		return (
			<SubscribedUserRight
				topic={topic}
				writing={content}
				premiumFeedback={comment}
				setPrevious={setPrevious}
			/>
		);
	}

	if (comment && !subscribed) {
		return <FeedbackCard comment={comment} setPrevious={setPrevious}/>;
	}

	return (
		<RightCard>
			<NoFeed>Please submit your writing for evaluation. </NoFeed>
		</RightCard>
	);
};

export default RightComponent;
