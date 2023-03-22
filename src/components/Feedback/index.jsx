import { TopicFeedback, Feedback, Group, Scores, Comment } from "./style";

const FeedbackComponent = (props) => {
	return (
		<TopicFeedback>
			<Feedback>
				<p>band<span>
					{props.overall}
				</span>
				</p>
				<Group>
					<Scores>
						<h3>TR:{props.data.score_TR}</h3>
					</Scores>
					<Comment>
						{props.data.feedback_TR}
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>CC:{props.data.score_CC}</h3>
					</Scores>
					<Comment>
						{props.data.feedback_CC}
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>GRA:{props.data.score_GRA}</h3>
					</Scores>
					<Comment>
						{props.data.feedback_GRA}
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3 >LR:{props.data.score_LR}</h3>
					</Scores>
					<Comment>
						{props.data.feedback_LR}
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>Overall</h3>
					</Scores>
					<Comment>
						{props.data.feedback_overall}
					</Comment>
				</Group>
			</Feedback>
		</TopicFeedback>);
};

export default FeedbackComponent;
