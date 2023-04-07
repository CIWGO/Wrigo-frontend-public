import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import { NoFeed, PreFeedbacks, RightCard, TopBackButton } from "../WritingEvaluatingPage/style.js";

const PreFeedbackCard = ({ setPrevious, preFeed }) => {
	function calOverall (numbers) {
		let sum = 0;
		for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		const avg = sum / numbers.length;
		return Math.round(avg * 2) / 2;
	}

	if (preFeed.length > 0) {
		return (
			<RightCard>
				<TopBackButton>
					<LeftOutlined onClick={() => setPrevious(false)} className="back" />Back
				</TopBackButton>
				<PreFeedbacks>
					{preFeed.map((item) => (
						<div key={item.created_time} className="button">

							<div>
								<p className="preFeed">
                Band: {calOverall([item.score_CC, item.score_LR, item.score_TR, item.score_GRA])} Submitted at{" "}
									{moment(item.created_time).format("MMMM Do YYYY, h:mm a")}
								</p>
							</div>
						</div>
					))}
				</PreFeedbacks>
			</RightCard>
		);
	} else {
		return	<RightCard>
			<TopBackButton>
				<LeftOutlined onClick={() => setPrevious(false)} className="back" />
			</TopBackButton>
			<NoFeed>no previous feedbacks yet...</NoFeed>;
		</RightCard>;
	}
};

export default PreFeedbackCard;
