import FeedbackComponent from "../../components/Feedback/index";
import { useState, useEffect } from "react";
import axios from "axios";

const Feedback = () => 	{
	const [data, setData] = useState({});
	const [overallNum, setOverallNum] = useState(null);
	const getData = async () => {
		const result = await axios.post("https://api.wrigo.com.au/users/viewHistory", {
			type: "feedback",
			writing_id: "a78a01cc-fa31-4f91-a5cb-b970604ccb5e"
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
