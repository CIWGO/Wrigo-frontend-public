import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponet from "./right";
import axios from "axios";
import { WritingPageDiv } from "../Writing/style.js";
function WritingsPopulate () {
	const { writingId } = useParams();
	const [content, setContent] = useState("");
	const [topic, setTopic] = useState("");

	const [comment, setComment] = useState("");
	const [score, setScore] = useState(null);
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const uid = "userid";

	useEffect(() => {
		const mutationInitial = axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "writingDoc" })
			.then((response) => {
				console.log(mutationInitial);
				setTopic(response.data.task_topic);
				setContent(response.data.writing_content);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const mutationFeed = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onSuccess: async () => {
			setResubmit(true);
			const previousFeed = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
			setPreFeed(previousFeed.data);
			console.log(preFeed);
		}
	});
	const handleSubmit = async (e) => {
		const previousFeed = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
		setPreFeed(previousFeed.data);
		console.log(preFeed);
	};

	useEffect(() => {
		if (mutationFeed.data) {
			setComment({ TR: mutationFeed.data.data.feedback.TR, CC: mutationFeed.data.data.feedback.CC, GRA: mutationFeed.data.data.feedback.GRA, LR: mutationFeed.data.data.feedback.LR, OVR: mutationFeed.data.data.feedback.Overall });
			setScore({ TR: mutationFeed.data.data.scores.TaskResponse, CC: mutationFeed.data.data.scores.CoherenceAndCohesion, GRA: mutationFeed.data.data.scores.GrammarRangeAndAccuracy, LR: mutationFeed.data.data.scores.LexicalResource });
		}
	}, [mutationFeed.data]);

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
								disabled= {true}
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
							<button className="submit" disabled={mutationFeed.isLoading}>{resubmit ? "resubmit" : "submit"}</button>
						</div>
					</form>
				</div>
			</div>

			<div className="right">
				<RightComponet comment={comment} score={score} mutation={mutationFeed} preFeed={preFeed} />
			</div>
		</WritingPageDiv>
	);
}

export default WritingsPopulate;
