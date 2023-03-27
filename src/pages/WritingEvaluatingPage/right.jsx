import PreFeedbackCard from "./preFeedbackCard";
import moment from "moment/moment";
import { useState } from "react";
import { FeedbackContainer, Group, LoadingContainer, NoFeed } from "./style";
const RightComponet = ({ comment, score, mutation, preFeed }) => 	{
	const [previous, setPrevious] = useState(false);
	console.log(preFeed);
	if (mutation.isLoading) {
		return <LoadingContainer>
			<div className="loader"></div>
			<div className="loading-text">Loading... it will take few seconds</div>
		</LoadingContainer>;
	}
	if (previous && !mutation.loading) {
		return <PreFeedbackCard previous={previous} setPrevious={setPrevious} preFeed={preFeed}/>;
	}
	if (comment.TR) {
		const numbers = [score.TR, score.LR, score.GRA, score.CC];
		console.log(numbers);
		function calOverall (numbers) {
			let sum = 0;
			for (let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			const avg = sum / numbers.length;
			return Math.round(avg * 2) / 2;
		}

		return <FeedbackContainer>
			<p id="moment">Evaluted at {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}</p>
			<p>band<span>
				{calOverall(numbers)}
			</span>
			</p>
			<div className="group">
				<div className="scores">
					<h3>TR:{score.TR}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.TR}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3>CC:{score.CC}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.CC}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3>GRA:{score.GRA}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.GRA}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3 >LR:{score.LR}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.LR}</h3>
				</div>
			</div>
			<Group>
				<div className="scores">
					<h3>Overall</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.OVR}</h3>
				</div>
			</Group>
			<button onClick={() => setPrevious(true)}>previous feedback</button>

		</FeedbackContainer>;
	}; return <NoFeed>no feed back yet...</NoFeed>;
};

export default RightComponet;
