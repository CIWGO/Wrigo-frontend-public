import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from "chart.js";

// Register the required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const IELTSPieChart = () => {
	const data = [20, 10, 25, 50, 12];
	const chartData = {
		labels: [
			"Opinion (Agree or Disagree)",
			"Discussion (Discuss both views)",
			"Problem and Solution",
			"Advantages and Disadvantages",
			"Two-part Question"
		],
		datasets: [
			{
				data,
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF"
				]
			}
		]
	};

	const options = {
		responsive: true,
		cutout: "30%",
		plugins: {
			tooltip: {
				callbacks: {
					label: function (context) {
						const label = context.chart.data.labels[context.dataIndex] || "";
						const value = context.parsed;
						const total = context.dataset.data.reduce((a, b) => a + b, 0);
						const percentage = Math.round((value / total) * 100);
						return `${label}: ${value} (${percentage}%)`;
					}
				}
			}
		}
	};

	const totalTopics = data.reduce((a, b) => a + b, 0);

	return (
		<div style={{ position: "relative" }}>
			<Doughnut data={chartData} options={options} />
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					textAlign: "center"
				}}
			>
				<p>Total Topics</p>
				<h4>{totalTopics}</h4>
			</div>
		</div>
	);
};

export default IELTSPieChart;
