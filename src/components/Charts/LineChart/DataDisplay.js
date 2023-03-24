const DisplayData = (props) => {
	const { marks } = props;
	const ts = Object.values(marks)[0];
	const cc = Object.values(marks)[1];
	const lr = Object.values(marks)[2];
	const gra = Object.values(marks)[3];
	const mean = Object.values(marks)[4];
	const arrLength = ts ? ts.length : 0;

	return {
		labels: Array.from({ length: arrLength }, (_, i) => i + 1),
		datasets: [
			{
				label: "Overall Mark",
				data: mean,
				borderColor: "rgb(239, 92, 92)",
				backgroundColor: "rgba(239, 92, 92,0.5)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Task Response",
				data: ts,
				borderColor: "#B2DF8A",
				backgroundColor: "rgba(178, 223, 138,0.5)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Coherence and Cohesion",
				data: cc,
				borderColor: "#9747FF",
				backgroundColor: "rgba(151, 71, 255,0.5)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Lexical Resource (Vocabulary)",
				data: lr,
				borderColor: "rgb(47, 113, 218)",
				backgroundColor: "rgba(47, 113, 218,0.5)",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Grammatical Range & Accuracy",
				data: gra,
				borderColor: "rgb(239, 163, 92)",
				backgroundColor: "rgba(239, 163, 92,0.5)",
				borderWidth: 2,
				pointRadius: 2
			}
		]
	};
};

export default DisplayData;
