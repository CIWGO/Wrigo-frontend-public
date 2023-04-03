import PreFeedbackCard from "./preFeedbackCard";
import moment from "moment/moment";
import { useState } from "react";
import { Modal } from "antd";
import { FeedbackContainer, Group, LoadingContainer, NoFeed } from "../WritingEvaluatingPage/style";
const RightComponet = ({ comment, score, mutation, preFeed }) => 	{
	const [previous, setPrevious] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [clickedComment, setClickedComment] = useState("");
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
		function calOverall (numbers) {
			let sum = 0;
			for (let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			const avg = sum / numbers.length;
			return Math.round(avg * 2) / 2;
		}
		console.log(comment);
		const categories = [
			{ label: "TR", score: score.TR, comment: comment.TR },
			{ label: "CC", score: score.CC, comment: comment.CC },
			{ label: "GRA", score: score.GRA, comment: comment.GRA },
			{ label: "LR", score: score.LR, comment: comment.LR }
		];
		if (comment.OVR !== undefined) {
			categories.push({ label: "Overall", score: null, comment: comment.OVR });
		}
		const handleModalCancel = () => {
			setModalVisible(false);
		};
		return <FeedbackContainer>
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
							className={`thin ${comment?.toString().length > 145 ? "sliced" : ""}`}
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
	}; return <NoFeed>no feed back yet...</NoFeed>;
};

export default RightComponet;
