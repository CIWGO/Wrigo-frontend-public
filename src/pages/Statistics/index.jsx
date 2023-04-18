import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import StatisticCard4 from "../../components/StatisticsCard4";
import RadarChart from "../../components/RadarChart";
import {
	Container,
	GridContainer,
	GridItem,
	LeftGrid,
	RightGrid,
	Bigcontainer
} from "./style";
import IELTSPieChart from "../../components/StatisticCard2";
import HeadingComponent from "../../components/Heading";
import { writingStatistics, writingStatisticsPie } from "../../utils/API";
// import axios from "axios";

const Statistics = () => {
	const [data, setData] = useState([]);
	const [PieData, setPieData] = useState([]);

	// const { userId, token } = useSelector((state) => state.user);
	const userId = localStorage.getItem("uid");
	const token = localStorage.getItem("token");

	useEffect(() => {
		// console.log(PieData);
		// axios({
		// 	method: "post",
		// 	url: "http://localhost:3005/api/writingStatistics",
		// 	data: {
		// 		uid: userId,
		// 		token
		// 	}
		// })
		writingStatistics({
			uid: userId,
			token
		})
			.then(function (response) {
				const data = response.data;
				setData(data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});

		writingStatisticsPie({
			uid: userId,
			token
		})
			.then(function (response) {
				const PieData = response.data;
				setPieData(Object.values(PieData.categoryCounts));
				// setPieData(PieData);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}, [userId, token]);

	const lineChartData = Object.values(data).slice(0, 5);
	const radarData = data.radarArr;

	return (
		<Bigcontainer>
			<HeadingComponent displayValue={"Analytics"} />
			<Container>
				<GridContainer>
					<LeftGrid>
						<GridItem>
							<StatisticCard4 uid={ userId} token={ token} />
						</GridItem>
						<GridItem>{data && <LineChart marks={lineChartData} />}</GridItem>
					</LeftGrid>
					<RightGrid>
						<GridItem>
							<RadarChart radarData={radarData} />
						</GridItem>
						<GridItem>
							<IELTSPieChart pieData={PieData} />
						</GridItem>
					</RightGrid>
				</GridContainer>
			</Container>
		</Bigcontainer>
	);
};
export default Statistics;
