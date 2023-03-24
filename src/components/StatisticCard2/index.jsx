import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, PieController } from "chart.js";

// Register the required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, PieController);

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

	return <Pie data={chartData} options={options} />;
};

export default IELTSPieChart;
