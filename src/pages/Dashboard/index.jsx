import Layout from "../../components/Layout";
import RecentWriting from "./recentWritings";
import PopularTopicsCard from "./popularTopics";

const DashBoardPage = () => {
	return (
		<Layout>
			<RecentWriting />
			<PopularTopicsCard />
		</Layout>
	);
};
export default DashBoardPage;
