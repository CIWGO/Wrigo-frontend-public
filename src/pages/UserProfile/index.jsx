import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
// import FeedbackComponent from "../../components/Feedback/index";
import { useSelector } from "react-redux";
import StatisticCard4 from "../../components/StatisticsCard4";
import RadarChart from "../../components/RadarChart";
import { Container, GridContainer, GridItem, LeftGrid, RightGrid } from "./style";
import IELTSPieChart from "../../components/StatisticCard2";
const UserProfile = () => {
	const [data, setData] = useState([]);
	const { userId, token } = useSelector((state) => state.user);
	// const uid = localStorage.getItem("uid");
	// const token = localStorage.getItem("token");
	console.log(data);
	useEffect(() => {
		console.log(data);
		axios({
			method: "post",
			url: "http://localhost:3005/api/writingStatistics",
			data: {
				uid: userId,
				token
			}
		})
			.then(function (response) {
				const data = response.data;
				setData(data);
			})
			.catch(function (error) {
				console.error("Error:", error);
			});
	}, [userId, token]);

	const lineChartData = Object.values(data).slice(0, 5);

	return (
		<Container>
			<ProfileHeader />
			<GridContainer >
				<LeftGrid >
					<GridItem><StatisticCard4 /></GridItem>
					<GridItem >
						{data && <LineChart marks={lineChartData} />}
					</GridItem>
				</LeftGrid>
				<RightGrid >
					<GridItem ><RadarChart /></GridItem>
					<GridItem><IELTSPieChart /></GridItem>
				</RightGrid>
			</GridContainer>
		</Container>
	);
};
export default UserProfile;
