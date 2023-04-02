import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponent from "./right";
import { WritingPageDiv } from "./style";
import Left from "./Left";
import { viewHistory } from "../../utils";
// import subscribedUserRight from "./subscribedUserRight";

const WritingPage = () => {
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");
	const [comment, setComment] = useState("");
	const [score, setScore] = useState(null);
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const uid = localStorage.getItem("uid");

	// const token = localStorage.getItem("token");

	const writingId = uid.substring(0, 5).toLowerCase() + topic.toLowerCase().replace(/\s+/g, "").substring(0, 16);
	const mutation = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onSuccess: async () => {
			setResubmit(true);
			const previousFeed = await viewHistory({
				uid,
				writing_id: writingId,
				type: "feedback"
			});
			// axios.post(
			// 	"http://localhost:3005/users/viewHistory",
			// 	{
			// 		uid,
			// 		writing_id: writingId,
			// 		type: "feedback"
			// 	}
			// );
			console.log(preFeed);
			setPreFeed(previousFeed.data);
		}
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		mutation.mutate({ writing_id: writingId, content, topic, uid });
	};

	// const { data } = mutation;

	useEffect(() => {
		console.log(mutation.data);
		if (mutation.data) {
			setComment({
				TR: mutation.data.data.feedback.TR,
				CC: mutation.data.data.feedback.CC,
				GRA: mutation.data.data.feedback.GRA,
				LR: mutation.data.data.feedback.LR,
				OVR: mutation.data.data.feedback.Overall
			});
			setScore({
				TR: mutation.data.data.scores.TaskResponse,
				CC: mutation.data.data.scores.CoherenceAndCohesion,
				GRA: mutation.data.data.scores.GrammarRangeAndAccuracy,
				LR: mutation.data.data.scores.LexicalResource
			});
		}
	}, [mutation.data]);

	const wordCount = content.trim().split(/\s+/).length - 1;

	return (
		<WritingPageDiv>
			<Link to={"/user/writings"}>
				<button className="back">
					<LeftOutlined />
					Go Back
				</button>
			</Link>

			<Left writingId={writingId} uid={uid} handleSubmit={handleSubmit} topic={topic} setTopic={setTopic} setContent={setContent} content={content} wordCount={wordCount} resubmit={resubmit} mutation={mutation}/>
			<div className="right">
				<RightComponent
					comment={comment}
					score={score}
					mutation={mutation}
					preFeed={preFeed}
				/>
			</div>
		</WritingPageDiv>
	);
};

export default WritingPage;
