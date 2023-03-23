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
import styled from "styled-components";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);
const RadarCard = styled.div`
display:flex;
max-height:100%;
max-width:100%;
`;
const RadarChart = (props) => {
	const data = {
		labels: ["CC", "LR", "GRA", "TR"],
		datasets: [
			{
				label: "Grade",
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
		<RadarCard>
			<Radar data={data} options={options} />
		</RadarCard>

	);
};

export default RadarChart;
