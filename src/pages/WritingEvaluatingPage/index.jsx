import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponent from "./right";
import { WritingPageDiv } from "./style";
import Left from "./Left";
import { getPreviousFeed } from "../../utils/API";
// import { getUser } from "../../utils";

const WritingPage = () => {
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");
	const [comment, setComment] = useState("");
	const [resubmit, setResubmit] = useState(false);
	const [preFeed, setPreFeed] = useState("");
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");
	const { writingId } = useParams();
	const mutation = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onSuccess: async () => {
			setResubmit(true);	const previousFeed = await getPreviousFeed({ uid, writing_id: writingId, type: "feedback", token });
			console.log(previousFeed);
			setPreFeed(previousFeed.data);
		}
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		mutation.mutate({ writing_id: writingId, content, topic_content: topic, uid, token });
	};

	// const { data } = mutation;

	useEffect(() => {
		if (mutation.data) {
			console.log(mutation.data);
			setComment(mutation.data.data);
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

			<RightComponent comment={comment} content={content} topic={topic} mutation={mutation} preFeed={preFeed} />

		</WritingPageDiv>
	);
};

export default WritingPage;
