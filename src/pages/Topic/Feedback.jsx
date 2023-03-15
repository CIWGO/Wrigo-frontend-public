import FeedbackComponent from "../../components/Feedback/index";
import { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";
const Feedback = () => 	{
	const [data, setData] = useState({});
	const [overallNum, setOverallNum] = useState(null);
	const getData = async () => {
		const result = await newRequest.post("/users/viewHistory", {
			type: "feedback",
			writing_id: "631d4d69-2719-49d5-bc15-cf54df69ca01"
		});
		const data = result.data[0];
		setData(data);
		const numbers = [data.score_CC, data.score_TR, data.score_LR, data.score_GRA];
		const sumNumber = numbers.reduce((acc, cur) => {
			const sum = acc += cur;
			return sum;
		});
		const averageNumber = sumNumber / numbers.length;
		setOverallNum(averageNumber);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<FeedbackComponent data={data} overall={overallNum} />
	);
};

export default Feedback;
