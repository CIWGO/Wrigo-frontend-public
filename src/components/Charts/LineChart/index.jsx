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
// import { marks } from "./data";
import Options from "./LineChartOptions";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

/* The component takes a 2d array of marks in a certain format as props.
the format of props is shown in "./data.js" file */
const LineChart = (props) => {
	const { marks } = props;

	return (
		<div style={{ width: "80%", height: "80%" }}>
			<Line options={Options} data={DataDisplay({ marks })} />
		</div>
	);
};

export default LineChart;
