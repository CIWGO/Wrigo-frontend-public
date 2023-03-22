import Layout from "../../components/Layout";
import RecentWriting from "./recentWritings";
import PopularTopic from "../../components/PopularTopics";

const DashBoardPage = () => {
	return (
		<Layout>
			<div>
				<RecentWriting />
			</div>
			<div>
				<PopularTopic />
			</div>
		</Layout>
	);
};
export default DashBoardPage;
