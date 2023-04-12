import moment from "moment/moment";
import { useState } from "react";
import {
	FeedbackContainer,
	Group,
	Loading,
	LoadingContainer,
	LoadingText,
	NoFeed,
	RightCard
} from "../WritingEvaluatingPage/style";
import SubscribedUserRight from "../WritingEvaluatingPage/subscribedUserRight";
import PreFeedbackCard from "../WritingEvaluatingPage/preFeedbackCard";
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
		const numbers = [
			Number(comment.CC),
			Number(comment.GRA),
			Number(comment.LR),
			Number(comment.TR)
		];
		function calOverall (numbers) {
			let sum = 0;
			for (let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			const avg = sum / numbers.length;
			return Math.round(avg * 2) / 2;
		}
		console.log(comment.TR.length);
		const categories = [
			{ label: "TR", score: comment.TR, comment: comment.commentTR },
			{ label: "CC", score: comment.CC, comment: comment.commentCC },
			{ label: "GRA", score: comment.GRA, comment: comment.commentGRA },
			{ label: "LR", score: comment.LR, comment: comment.commentLR }
		];
		if (comment.OVR !== undefined) {
			categories.push({
				label: "Overall",
				score: null,
				comment: comment.commentOVR
			});
		}
		return (
			<RightCard>
				<FeedbackContainer>
					<p id="moment">
						Evaluated on {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}
					</p>
					<p>
						band<span>{calOverall(numbers)}</span>
					</p>
					{categories.map(({ label, score, comment }) => (
						<Group key={label}>
							<div className="scores">
								<h3>{score ? `${label}:${score}` : label}</h3>
							</div>
							<div className="comment">
								<h3
									className="thin">
									{comment}
								</h3>
							</div>
						</Group>
					))}

					<button onClick={() => setPrevious(true)}>previous feedback</button>
				</FeedbackContainer>
			</RightCard>
		);
	}

	return (
		<RightCard>
			<NoFeed>Please submit your writing for evaluation. </NoFeed>
		</RightCard>
	);
};

export default RightComponent;
