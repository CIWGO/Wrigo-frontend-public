import Layout from "../../components/Layout";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LeftOutlined } from "@ant-design/icons";
import RightComponet from "./right";
import "./myWritingSecond.scss";
import SearchBar from "../../components/SearchBar";

const WritingPage = () => {
	const [topic, setTopic] = useState("");
	const [content, setContent] = useState("");
	const [comment, setComment] = useState(
		"submit to see comment. it will take few second..or you can open console network to see if request is success. | score... "
	);
	const [score, setScore] = useState(null);
	const [resubmit, setResubmit] = useState(false);
	console.log(content, topic, score);

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (input) => {
			return newRequest.post("/api/evaluate", input);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["input"]);
			setResubmit(true);
		}
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		mutation.mutate({ uid: "333", content, topic });
	};

	const { data } = mutation;

	useEffect(() => {
		if (data) {
			setComment({ TR: data.data.feedback.TR, CC: data.data.feedback.CC, GRA: data.data.feedback.GRA, LR: data.data.feedback.LR, OVR: data.data.feedback.Overall });
			setScore({ TR: data.data.scores.TR, CC: data.data.scores.CC, GRA: data.data.scores.GRA, LR: data.data.scores.LR });
			// setComment(
			// 	`FEEDBACK:TR:${data.data.feedback.TR} CC:${data.data.feedback.CC} GRA:${data.data.feedback.GRA} LR:${data.data.feedback.LR} Overall:${data.data.feedback.Overall} | SCOREs:TR${data.data.scores.TR}, GRA${data.data.scores.GRA}, CC${data.data.scores.CC}, LR${data.data.scores.LR}`
		}
	}, [data]);

	const wordCount = content.trim().split(/\s+/).length - 1;

	return (
		<Layout>
			<div className="writing-page">
				<SearchBar />
				<Link to={"/"}>
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
					<RightComponet comment={comment} score={score} mutation={mutation}/>
				</div>
			</div>
		</Layout>
	);
};

export default WritingPage;
