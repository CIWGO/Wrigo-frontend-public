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
				borderColor: "#FF6384",
				backgroundColor: "#FF6384",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Task Response",
				data: ts,
				borderColor: "#36A2EB",
				backgroundColor: "#36A2EB",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Coherence and Cohesion",
				data: cc,
				borderColor: "#FFCE56",
				backgroundColor: "#FFCE56",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Lexical Resource (Vocabulary)",
				data: lr,
				borderColor: "#4BC0C0",
				backgroundColor: "#4BC0C0",
				borderWidth: 2,
				pointRadius: 2
			},
			{
				label: "Grammatical Range & Accuracy",
				data: gra,
				borderColor: "#9966FF",
				backgroundColor: "#9966FF",
				borderWidth: 2,
				pointRadius: 2
			}
		]
	};
};

export default DisplayData;
