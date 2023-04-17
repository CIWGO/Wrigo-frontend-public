import React from "react";
import { FeedbackContainer, Group, RightCard } from "../WritingEvaluatingPage/style";
import moment from "moment";

const FeedbackCard = ({ comment, setPrevious }) => {
	console.log(88);
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
	const categories = [
		{ label: "Task Response", score: comment.TR, comment: comment.commentTR },
		{ label: "Coherence and Cohesion", score: comment.CC, comment: comment.commentCC },
		{ label: "Lexical Resource", score: comment.LR, comment: comment.commentLR },
		{ label: "Grammar Range and Accuracy", score: comment.GRA, comment: comment.commentGRA }
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
						BAND<span>{calOverall(numbers)}</span>
				</p>
				{categories.map(({ label, score, comment }) => (
					<Group key={label}>
						<div className="scores">
							<h3>{score ? `${label}: ${score}` : label}</h3>
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
};

export default FeedbackCard;
