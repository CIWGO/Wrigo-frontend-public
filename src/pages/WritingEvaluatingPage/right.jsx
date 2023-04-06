import PreFeedbackCard from "./preFeedbackCard";
import moment from "moment/moment";
import { useState } from "react";
import { Modal } from "antd";
import {
	FeedbackContainer,
	Group,
	LoadingContainer,
	NoFeed,
	RightCard
} from "../WritingEvaluatingPage/style";
import SubscribedUserRight from "./subscribedUserRight";
import { Button } from "./subscribedUserRight/style";
const RightComponent = ({ comment, mutation, preFeed, topic, content }) => {
	const [previous, setPrevious] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [clickedComment, setClickedComment] = useState("");
	if (mutation.isLoading) {
		return (
			<RightCard>
				<LoadingContainer>
					<div className="loader"></div>
					<div className="loading-text">Evaluating your writing...</div>
				</LoadingContainer>
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
	if (comment && comment.isSubscribed) {
		console.log(topic, content, comment.premiumFeedback);
		return (
			<SubscribedUserRight
				topic={topic}
				writing={content}
				premiumFeedback={comment.premiumFeedback}
				setPrevious={setPrevious}
			/>
		);
	}
	if (comment && !comment.isSubscribed) {
		const score = comment.response.scores;
		const numbers = [
			score.TaskResponse,
			score.CoherenceAndCohesion,
			score.LexicalResource,
			score.GrammarRangeAndAccuracy
		];
		const commentDetails = comment.response.feedback;

		function calOverall (numbers) {
			let sum = 0;
			for (let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			const avg = sum / numbers.length;
			return Math.round(avg * 2) / 2;
		}
		const categories = [
			{ label: "Task Response", score: score.TaskResponse, comment: commentDetails.TR },
			{ label: "Coherence and Cohesion", score: score.CC, comment: commentDetails.CC },
			{ label: "Lexical Resource", score: score.LR, comment: commentDetails.LR },
			{ label: "Grammar Accuracy", score: score.GRA, comment: commentDetails.GRA }
		];
		if (commentDetails.Overall !== undefined) {
			categories.push({
				label: "Overall",
				score: null,
				comment: commentDetails.Overall
			});
		}
		const handleModalCancel = () => {
			setModalVisible(false);
		};
		return (
			<RightCard>
				<FeedbackContainer>
					<p id="moment">
						Evaluated on {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}
					</p>
					<p>
						BAND<span>{calOverall(numbers)}</span>
					</p>
					{categories.map(({ label, score, comment }) => (
						<Group key={label}>
							<div className="scores">
								<h3>{score ? `${label}:${score}` : label}</h3>
							</div>
							<div className="comment">
								<h3
									className={`thin ${
										comment.toString().length > 145 ? "sliced" : ""
									}`}
									onClick={() => {
										setClickedComment(comment);
										setModalVisible(true);
									}}
								>
									{comment.toString().length > 145
										? comment.toString().slice(0, 145) + "..."
										: comment}{" "}
									{comment.toString().length > 145 && (
										<span>view full comment</span>
									)}
								</h3>
							</div>
						</Group>
					))}

					<Button onClick={() => setPrevious(true)}>previous feedback</Button>
					<Modal
						title="Comment"
						visible={modalVisible}
						onCancel={handleModalCancel}
						footer={null}
					>
						<p>{clickedComment}</p>
					</Modal>
				</FeedbackContainer>
			</RightCard>
		);
	}
	return (
		<RightCard>
			<NoFeed>no feed back yet...</NoFeed>
		</RightCard>
	);
};

export default RightComponent;
