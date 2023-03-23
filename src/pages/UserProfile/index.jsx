import LineChart from "../../components/Charts/LineChart/index";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
// import FeedbackComponent from "../../components/Feedback/index";
import { useSelector } from "react-redux";
import StatisticCard4 from "../../components/StatisticsCard4";
import RadarChart from "../../components/RadarChart";
import { Container, GridContainer, GridItem, SubGrid } from "./style";
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
				<SubGrid >
					<GridItem width="745px" height="200px"></GridItem>
					<GridItem width="745px" height="480px">
						{data && <LineChart marks={lineChartData} />}
					</GridItem>
				</SubGrid>
				<SubGrid >
					<GridItem width="480px" height="345px"><RadarChart /></GridItem>
					<GridItem width="480px" height="335px"><StatisticCard4 /></GridItem>
				</SubGrid>
				{/* <FeedbackComponent/> */}
			</GridContainer>

		</Container>
	);
};
export default UserProfile;
