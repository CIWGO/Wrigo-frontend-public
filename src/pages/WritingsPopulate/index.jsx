import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponet from "./right";
import axios from "axios";
import { WritingPageDiv } from "../Writing/EvaluatingPage/style.js";
import Left from "./Left";
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
		async function fetchData () {
			try {
				const response = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "writingDoc" });
				setTopic(response.data.task_topic);
				setContent(response.data.writing_content);

				const previousFeedResponse = await axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
				const previousFeed = previousFeedResponse.data;
				setPreFeed(previousFeed);
				console.log(previousFeed[0]);
				setComment({ TR: previousFeed[0].feedback_TR, CC: previousFeed[0].feedback_CC, GRA: previousFeed[0].feedback_GRA, LR: previousFeed[0].feedback_LR, OVR: previousFeed[0].feedback_overall });
				setScore({ TR: previousFeed[0].score_TR, CC: previousFeed[0].score_CC, GRA: previousFeed[0].score_GRA, LR: previousFeed[0].score_LR });
				console.log(comment);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
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
		e.preventDefault();
		mutationFeed.mutate({ writing_id: writingId, content, topic, uid });
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
			<Link to={"/user/writings"}>
				<button className="back">
					<LeftOutlined />
					Go Back
				</button>
			</Link>

			<Left handleSubmit={handleSubmit} topic={topic} setTopic={setTopic} setContent={setContent} content={content} wordCount={wordCount} resubmit={resubmit} mutationFeed={mutationFeed}/>

			<div className="right">
				<RightComponet comment={comment} score={score} mutation={mutationFeed} preFeed={preFeed} />
			</div>
		</WritingPageDiv>
	);
}

export default WritingsPopulate;
