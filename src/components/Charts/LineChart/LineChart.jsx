import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import DataDisplay from "./DataDisplay.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		title: {
			display: true,
			text: "Line Chart"
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
			}
		}
	}
};

const LineChart = () => {
	return (
		<div style={{ width: "80%", height: "80%" }}>
			<Line options={options} data={DataDisplay} />
		</div>
	);
};

export default LineChart;
