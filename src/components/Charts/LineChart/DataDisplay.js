// import { marks } from "./data";

const DisplayData = (props) => {
	const { marks } = props;

	return {
		labels: Array.from({ length: marks.length }, (_, i) => i + 1),
		datasets: [
			{
				label: "Task Response",
				data: marks[0],
				borderColor: "#B2DF8A",
				backgroundColor: "rgba(178, 223, 138,1)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Coherence and Cohesion",
				data: marks[1],
				borderColor: "#9747FF",
				backgroundColor: "rgba(151, 71, 255,1)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Lexical Resource (Vocabulary)",
				data: marks[2],
				borderColor: "rgb(47, 113, 218)",
				backgroundColor: "rgba(47, 113, 218,1)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Grammatical Range & Accuracy",
				data: marks[3],
				borderColor: "rgb(239, 163, 92)",
				backgroundColor: "rgba(239, 163, 92,1)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Overall Mark",
				data: marks[4],
				borderColor: "rgb(239, 92, 92)",
				backgroundColor: "rgba(239, 92, 92,1)",
				borderWidth: 2,
				pointRadius: 2
			}
		]
	};
};

export default DisplayData;
