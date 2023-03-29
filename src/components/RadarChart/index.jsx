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
height:100%;
width:100%;
align-items: center;
justify-content: center;
`;
const RadarChart = (radarData) => {
	const data = {
		labels: ["CC", "LR", "GRA", "TR"],
		datasets: [
			{
				label: "Score",
				backgroundColor: "rgba(24,144,255,0.5)",
				borderColor: "#1890ff",
				pointBackgroundColor: "#1890ff",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#1890ff",
				pointHoverBorderColor: "rgba(179,181,198,1)",
				data: radarData.radarData
			}
		],
		theme: {
			styleSheet: {
				backgroundColor: "#1890ff"
			}
		}
	};

	const options = {
		ticks: { beginAtZero: true },
		plugins: {
			legend: {
				display: false,
				textStyle: { color: "#1890ff" }
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
		},
		series: {
			itemStyle: {
				color: "#1890ff"
			}
		},
		theme: {
			styleSheet: {
				color: "#1890ff"
			}
		}
	};

	return (
		<RadarCard>
			<Radar style={{ height: "100%", color: "#1890ff" }} data={data} options={options} />
		</RadarCard>

	);
};

export default RadarChart;
