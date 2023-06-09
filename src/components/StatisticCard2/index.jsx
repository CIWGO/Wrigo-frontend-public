import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
	Chart,
	ArcElement,
	Tooltip,
	Legend,
	DoughnutController
} from "chart.js";

// Register the required elements and plugins
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const IELTSPieChart = (props) => {
	// const data = Object.values(pieData.pieData.categoryCounts);
	const { pieData } = props;
	// const data = [2, 0, 0, 0, 0];
	const data = pieData;
	console.log(data);
	const chartData = {
		labels: [
			"Opinion (Agree or Disagree)",
			"Discussion (Discuss both views)",
			"Problem and Solution",
			"Direct Question",
			"Advantage and Disadvantage",
			"Others"
		],
		datasets: [
			{
				data,
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#32CD32"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#32CD32"
				]
			}
		]
	};

	const options = {
		responsive: true,
		cutout: "45%",
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
		<div
			style={{
				position: "relative",
				alignItems: "center",
				justifyItems: "center",
				height: "100%",
				width: "100%",
				display: "grid",
				padding: "10px"
			}}
		>
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
				<div
					style={{
						position: "absolute",
						marginTop: "55px",
						transform: "translate(-50%, -50%)",
						textAlign: "center"
					}}
				>
					<p style={{ margin: 0, padding: "5px" }}>Total Topics</p>
					<p style={{ margin: 0, padding: 0 }}>{totalTopics}</p>
				</div>
			</div>
		</div>
	);
};

export default IELTSPieChart;
