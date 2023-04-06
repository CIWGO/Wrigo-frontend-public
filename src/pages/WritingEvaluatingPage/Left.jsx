import { Button } from "antd";
import React from "react";
import { writingDraft } from "../../utils";
import { ButtonContainer, InputCardBottom } from "./style";

function Left ({ handleSubmit, topic, setTopic, setContent, content, wordCount, resubmit, mutation, writingId, uid }) {
	const handleSaveDraft = () => {
		const draft = { writing_id: writingId, content, topic, uid };
		writingDraft({ draft }).then((response) => {
			if (response.status === 200) {
				alert("Draft saved.");
			} else if (response.status === 500) {
				alert("Something is wrong with network, please retry.");
			}
		});
	};
	return (
		<>
			<div className="left">
				<div>
					<form onSubmit={handleSubmit} className="form">
						<div>
							<textarea
								value={topic}
								onChange={(e) => setTopic(e.target.value.trim().replace(/\s+/g, " "))}
								className="topic"
								placeholder="Writing topic"
								disabled={resubmit}
							></textarea>
						</div>
						<hr />
						<div className="flex-col">
							<textarea
								value={content}
								onChange={(e) => setContent(e.target.value.trim().replace(/\s+/g, " "))}
								className="content"
								placeholder="Writing content"
							></textarea>
							<InputCardBottom>
								<div className="wordCount">
									{wordCount} words
								</div>
								<ButtonContainer style={
									{
										position: "relative"
									}
								}>
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
