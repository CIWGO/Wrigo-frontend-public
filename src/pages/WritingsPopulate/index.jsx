import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import Left from "./Left";
import { WritingPageDiv } from "../WritingEvaluatingPage/style";
import { viewHistory } from "../../utils";
import RightComponent from "./right";
function WritingsPopulate () {
	const { writingId } = useParams();
	const [content, setContent] = useState("");
	const [topic, setTopic] = useState("");

	const [comment, setComment] = useState("");
	const [score, setScore] = useState(null);
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");

	const subscribed = false;
	useEffect(() => {
		async function fetchData () {
			try {
				const response = await viewHistory({ uid, writing_id: writingId, type: "writingDoc", token });
				// axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "writingDoc" });
				setTopic(response.data.task_topic);
				setContent(response.data.writing_content);
				console.log(response);
				const previousFeedResponse = await viewHistory({ uid, writing_id: writingId, type: "feedback", token });
				// axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
				const previousFeed = previousFeedResponse.data;

				setPreFeed(previousFeed);
				setComment({ TR: previousFeed[0].feedback_TR, CC: previousFeed[0].feedback_CC, GRA: previousFeed[0].feedback_GRA, LR: previousFeed[0].feedback_LR, OVR: previousFeed[0].feedback_overall });
				setScore({ TR: previousFeed[0].score_TR, CC: previousFeed[0].score_CC, GRA: previousFeed[0].score_GRA, LR: previousFeed[0].score_LR });
				console.log(comment, score);
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
			const previousFeed = await viewHistory({ uid, writing_id: writingId, type: "feedback" });
			// axios.post("http://localhost:3005/users/viewHistory", { uid, writing_id: writingId, type: "feedback" });
			setPreFeed(previousFeed.data);
		}
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		mutationFeed.mutate({ writing_id: writingId, content, topic, uid });
	};

	const wordCount = content.trim().split(/\s+/).length - 1;

	return (
		<WritingPageDiv>
			<Link to={"/user/writings"}>
				<button className="back">
					<LeftOutlined />
					Go Back
				</button>
			</Link>

			<Left writingId={writingId} uid={uid} handleSubmit={handleSubmit} topic={topic} setTopic={setTopic} setContent={setContent} content={content} wordCount={wordCount} resubmit={resubmit} mutationFeed={mutationFeed}/>

			<RightComponent comment={comment} content={content} topic={topic} score={score} mutation={mutationFeed} preFeed={preFeed} subscribed={subscribed} />
		</WritingPageDiv>
	);
}

export default WritingsPopulate;
