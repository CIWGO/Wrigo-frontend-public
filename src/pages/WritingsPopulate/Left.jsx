import { Button } from "antd";
import React, { useEffect } from "react";
import { writingDraft } from "../../utils";
import { ButtonContainer, InputCardBottom } from "../WritingEvaluatingPage/style";

const Left = ({ handleSubmit, topic, setTopic, setContent, content, wordCount, resubmit, mutationFeed, writingId, uid }) => {
	const handleSaveDraft = () => {
		useEffect(() => {
			const draft = { writing_id: writingId, content, topic, uid };
			writingDraft({ draft }).then((response) => {
				if (response.status === 200) {
					alert("Draft saved.");
				} else if (response.status === 500) {
					alert("Something is wrong with network, please retry.");
				}
			});
		}, []);
	};
	return (
		<>
			<div className="left">
				<div>
					<form onSubmit={handleSubmit} className="form">
						<div>
							<textarea
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
								className="topic"
								placeholder="Loding your topic..."
								disabled= {true}
							></textarea>
						</div>
						<hr />
						<div className="flex-col">
							<textarea
								value={content}
								onChange={(e) => setContent(e.target.value)}
								className="content"
								placeholder="Loding the content..."
							></textarea>
							<InputCardBottom>
								<div className="wordCount">
									{wordCount} words
								</div>
								<ButtonContainer>
									<Button
										type="primary"
										style={{
											borderColor: "#204f9a",
											background: "none",
											color: "#2254a5"
										}}
										onClick={handleSaveDraft}
									>
										save draft
									</Button>
									<Button
										type="primary"
										htmlType="submit"
										disabled={mutationFeed.isLoading}
										style={{ marginLeft: "10px" }}
									>
										{resubmit ? "resubmit" : "submit"}
									</Button>
								</ButtonContainer>
							</InputCardBottom>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Left;
