
const Options = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		title: {
			display: true,
			text: "IELTS Writing Progress Tracker"
		},
		legend: {
			labels: {
				fontSize: 16,
				boxWidth: 20,
				boxHeight: 5,
				fontColor: "#2F71DA"
			}
		}
	},
	scales: {
		x: {
			title: {
				display: true,
				text: "Attempts"
			}
		},
		y: {
			title: {
				display: true,
				text: "Score"
			},
			ticks: {
				stepSize: 0.5
			}
		}
	}
};

export default Options;
