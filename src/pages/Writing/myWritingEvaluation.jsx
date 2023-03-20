import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponet from "./right";
import axios from "axios";
import { WritingPageDiv } from "./style.js";

const WritingPage = () => {
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");
	const [comment, setComment] = useState("");
	const [score, setScore] = useState(null);
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const uid = "userid";
	const writingId = uid + topic.slice(0, 16);

	const mutation = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onSuccess: async () => {
			setResubmit(true);
			const previousFeed = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
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
		if (mutation.data) {
			setComment({ TR: mutation.data.data.feedback.TR, CC: mutation.data.data.feedback.CC, GRA: mutation.data.data.feedback.GRA, LR: mutation.data.data.feedback.LR, OVR: mutation.data.data.feedback.Overall });
			setScore({ TR: mutation.data.data.scores.TaskResponse, CC: mutation.data.data.scores.CoherenceAndCohesion, GRA: mutation.data.data.scores.GrammarRangeAndAccuracy, LR: mutation.data.data.scores.LexicalResource });
		}
	}, [mutation.data]);

	const wordCount = content.trim().split(/\s+/).length - 1;

	return (
		<WritingPageDiv>
			<Link to={"/writings"}>
				<button className="back">
					<LeftOutlined />
					Go Back
				</button>
			</Link>

			<div className="left">
				<div>
					<form onSubmit={handleSubmit} className="form">
						<div>
							<textarea
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
								className="topic"
								placeholder="IELTS writing task 2 topic goes here"
								disabled={resubmit}
							></textarea>
						</div>
						<hr />
						<div className="flex-col">
							<textarea
								value={content}
								onChange={(e) => setContent(e.target.value)}
								className="content"
								placeholder="Write here"
							></textarea>
							<div className="wordCount">{wordCount} words</div>
							<button className="submit" disabled={mutation.isLoading}>{resubmit ? "resubmit" : "submit"}</button>
						</div>
					</form>
				</div>
			</div>

			<div className="right">
				<RightComponet comment={comment} score={score} mutation={mutation} preFeed={preFeed} />
			</div>
		</WritingPageDiv>
	);
};

export default WritingPage;
