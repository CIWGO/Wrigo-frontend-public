import React from "react";

const Left = ({ handleSubmit, topic, setTopic, setContent, content, wordCount, resubmit, mutationFeed }) => {
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
							<div className="wordCount">{wordCount} words</div>
							<button className="submit" disabled={mutationFeed.isLoading}>{resubmit ? "resubmit" : "submit"}</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Left;
