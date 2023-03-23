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
import { LineChartBox } from "./style";

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
		<LineChartBox>
			<Line style={{ height: "480px", width: "745px" }}options={Options} data={DataDisplay({ marks })} />
		</LineChartBox>
	);
};

export default LineChart;
