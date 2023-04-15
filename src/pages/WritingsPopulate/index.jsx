import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import Left from "./Left";
import { WritingPageDiv } from "../WritingEvaluatingPage/style";
import { viewHistory } from "../../utils";
import RightComponent from "./right";
import { notification } from "antd";
// import { notification } from "antd";

function WritingsPopulate () {
	const { writingId } = useParams();
	const [content, setContent] = useState("");
	const [topic, setTopic] = useState("");
	const [comment, setComment] = useState("");
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const token = localStorage.getItem("token");
	const uid = localStorage.getItem("uid");
	const [subscribed, setSubscribed] = useState(null);

	useEffect(() => {
		async function fetchData () {
			try {
				const response = await viewHistory({ uid, writing_id: writingId, type: "writingDoc", token });
				setTopic(response.data._doc.task_topic);
				setContent(response.data._doc.writing_content);
				setSubscribed(response.data.isSubscribed);
				console.log(response, subscribed);
				const previousFeedResponse = await viewHistory({ uid, writing_id: writingId, type: "feedback", token });
				const previousFeed = previousFeedResponse.data;

				setPreFeed(previousFeed);
				setComment({
					CC: previousFeed[0].score_CC,
					GRA: previousFeed[0].score_GRA,
					LR: previousFeed[0].score_LR,
					TR: previousFeed[0].score_TR,
					commentCC: previousFeed[0].feedback_CC,
					commentGRA: previousFeed[0].feedback_GRA,
					commentLR: previousFeed[0].feedback_LR,
					commentTR: previousFeed[0].feedback_TR,
					commentOVR: previousFeed[0].feedback_overall ? previousFeed[0].feedback_overall : null
				});
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	const mutation = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onError: () => {	notification.error({ message: "Evaluator is busy, please retry." }); },
		onSuccess: async () => {
			setResubmit(true);
			console.log(0);
			const latestFeed = await viewHistory({ uid, writing_id: writingId, type: "feedback", token });

			// Update preFeed with the latest feedback data
			setPreFeed(latestFeed.data);

			// Update comment to display the latest feedback
			setComment({
				CC: latestFeed.data[0].score_CC,
				GRA: latestFeed.data[0].score_GRA,
				LR: latestFeed.data[0].score_LR,
				TR: latestFeed.data[0].score_TR,
				commentCC: latestFeed.data[0].feedback_CC,
				commentGRA: latestFeed.data[0].feedback_GRA,
				commentLR: latestFeed.data[0].feedback_LR,
				commentTR: latestFeed.data[0].feedback_TR,
				commentOVR: latestFeed.data[0].feedback_overall ? latestFeed.data[0].feedback_overall : null

			});
		}
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		mutation.mutate({ writing_id: writingId, content, topic, uid, token });
	};

	const wordCount = content.trim().split(/\s+/).length - 1;

	useEffect(() => {
		if (mutation.data && mutation.data.data.isSubscribed) {
			setSubscribed(true);
			console.log("PRE:", mutation.data);
			setComment(mutation.data.data.premiumFeedback);
		}
	}, [mutation.data]);

	return (
		<WritingPageDiv>
			<Link to={"/user/writings"}>
				<button className="back">
					<LeftOutlined />
					Back
				</button>
			</Link>

			<Left writingId={writingId} uid={uid} handleSubmit={handleSubmit} topic={topic} setTopic={setTopic} setContent={setContent} content={content} wordCount={wordCount} resubmit={resubmit} mutation={mutation}/>

			<RightComponent comment={comment} content={content} topic={topic} mutation={mutation} preFeed={preFeed} subscribed={subscribed} />
		</WritingPageDiv>
	);
}

export default WritingsPopulate;
