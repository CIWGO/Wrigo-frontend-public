import Layout from "../../components/Layout";
import RecentWriting from "./recentWritings";
import PopularTopicsCard from "./popularTopics";

const DashBoardPage = () => {
	return (
		<Layout>
			<div>
				<RecentWriting />
			</div>
			<div>
				<PopularTopicsCard />
			</div>
		</Layout>
	);
};
export default DashBoardPage;
