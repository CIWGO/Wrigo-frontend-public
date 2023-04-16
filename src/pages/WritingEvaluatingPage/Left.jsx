import { Button, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { writingDraft } from "../../utils";
import { ButtonContainer, InputCardBottom } from "./style";

function Left ({
	handleSubmit,
	topic,
	setTopic,
	setContent,
	content,
	wordCount,
	resubmit,
	mutation,
	writingId,
	uid
}) {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (topic.trim() === "" || content.trim() === "") {
			notification.error({ message: "Both topic and content must be filled in before submitting." });
			return;
		}
		handleSubmit(e);
	};

	const handleSaveDraft = () => {
		if (topic.trim() === "" || content.trim() === "") {
			notification.error({ message: "Both topic and content must be filled in before saving." });
			return;
		}

		const token = localStorage.getItem("token");
		const draft = { writing_id: writingId, content, topic, uid, token };
		writingDraft(draft).then((response) => {
			if (response.status === 200) {
				notification.success({ message: "Draft saved." });
			} else if (response.status === 500) {
				notification.error({ message: "Failed to save draft, please retry. " });
			}
		});
	};

	const topicRef = useRef(null);
	const contentRef = useRef(null);

	const [height, setHeight] = useState(0);

	useEffect(() => {
		const updateHeight = () => {
			topicRef.current.style.height = "auto";
			contentRef.current.style.height = "auto";

			const topicHeight = topicRef.current.scrollHeight;
			const contentHeight = contentRef.current.scrollHeight;
			const totalHeight = topicHeight + contentHeight + 150;

			topicRef.current.style.height = `${topicHeight}px`;
			contentRef.current.style.height = `${contentHeight}px`;

			setHeight(totalHeight);
		};

		updateHeight();
	}, [topic, content]);

	return (
		<>
			<div
				className="left"
				style={{ minHeight: height === 0 ? "100%" : `${height}px` }}
			>
				<div>
					<form onSubmit={handleFormSubmit} className="form">
						<div>
							<textarea
								value={topic}
								ref={topicRef}
								onChange={(e) => setTopic(e.target.value)}
								className="topic"
								placeholder="Writing topic"
								disabled={resubmit}
							></textarea>
						</div>
						<hr />
						<div className="flex-col">
							<textarea
								value={content}
								ref={contentRef}
								onChange={(e) => setContent(e.target.value)}
								className="content"
								placeholder="Writing content"
							></textarea>
							<InputCardBottom>
								<div className="wordCount">{wordCount} words</div>
								<ButtonContainer
									style={{
										position: "relative"
									}}
								>
									<Button
										type="primary"
										style={{
											borderColor: "rgb(47, 113, 218)",
											background: "none",
											color: "rgb(47, 113, 218)"
										}}
										onClick={handleSaveDraft}
									>
										Save draft
									</Button>
									<Button
										type="primary"
										htmlType="submit"
										disabled={mutation.isLoading}
										style={{ marginLeft: "10px" }}
									>
										{resubmit ? "Resubmit" : "Submit"}
									</Button>
								</ButtonContainer>
							</InputCardBottom>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Left;
