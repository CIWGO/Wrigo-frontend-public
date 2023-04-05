import PreFeedbackCard from "./preFeedbackCard";
import moment from "moment/moment";
import { useState } from "react";
import { Modal } from "antd";
import { FeedbackContainer, Group, LoadingContainer, NoFeed, RightCard } from "../WritingEvaluatingPage/style";
import SubscribedUserRight from "../WritingEvaluatingPage/subscribedUserRight";
const RightComponent = ({ comment, mutation, preFeed, subscribed, topic, content }) => 	{
	const [previous, setPrevious] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [clickedComment, setClickedComment] = useState("");
	console.log(comment, subscribed);
	if (mutation.isLoading) {
		return <RightCard>
			<LoadingContainer>
				<div className="loader"></div>
				<div className="loading-text">Loading... it will take few seconds</div>
			</LoadingContainer>;
		</RightCard>;
	}
	if (previous && !mutation.loading) {
		return <PreFeedbackCard previous={previous} setPrevious={setPrevious} preFeed={preFeed}/>;
	}
	if (comment && subscribed) { console.log(topic, content, comment); return <SubscribedUserRight topic={topic} writing={content} premiumFeedback={comment} setPrevious={setPrevious} />; };

	if (comment && !subscribed) {
		console.log(comment);
		const numbers = [Number(comment.CC), Number(comment.GRA), Number(comment.LR), Number(comment.TR)];
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
			categories.push({ label: "Overall", score: null, comment: comment.commentOVR });
		}
		const handleModalCancel = () => {
			setModalVisible(false);
		};
		return <RightCard>

			<FeedbackContainer>
				<p id="moment">Evaluted at {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}</p>
				<p>band<span>
					{calOverall(numbers)}
				</span>
				</p>
				{categories.map(({ label, score, comment }) => (
					<Group key={label}>
						<div className="scores">
							<h3>{score ? `${label}:${score}` : label}</h3>
						</div>
						<div className="comment">
							<h3
								className={`thin ${comment.toString().length > 145 ? "sliced" : ""}`}
								onClick={() => {
									setClickedComment(comment);
									setModalVisible(true);
								}}
							>
								{comment.toString().length > 145
									? comment.toString().slice(0, 145) + "..."
									: comment} {comment.toString().length > 145 && <span>view full comment</span>}
							</h3>
						</div>
					</Group>
				))}

				<button onClick={() => setPrevious(true)}>previous feedback</button>
				<Modal
					title="Comment"
					visible={modalVisible}
					onCancel={handleModalCancel}
					footer={null}
				>
					<p>{clickedComment}</p>
				</Modal>
			</FeedbackContainer>;
		</RightCard>;
	};
	return <RightCard>
		<NoFeed>no feed back yet...</NoFeed>
	</RightCard>;
};

export default RightComponent;
