import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);
const RadarChart = (props) => {
	const data = {
		labels: ["CC", "LR", "GRA", "TR"],
		datasets: [
			{
				label: "Radar Chart",
				backgroundColor: "rgba(24,144,255,0.5)",
				borderColor: "#1890ff",
				pointBackgroundColor: "#1890ff",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#1890ff",
				pointHoverBorderColor: "rgba(179,181,198,1)",
				data: [6.5, 6, 9, 7]
				// data:props

			}
		]
	};

	const options = {
		ticks: { beginAtZero: true },
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			r: {
				angleLines: {
					display: true
				},
				suggestedMin: 3,
				suggestedMax: 9.0
			}
		}
	};

	return (
		<div>
			<Radar data={data} options={options} />
		</div>

	);
};

export default RadarChart;
