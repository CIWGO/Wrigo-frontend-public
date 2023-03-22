import Layout from "../../components/Layout";
import RecentWriting from "./recentWritings";
import popularTopicsCard from "./popularTopics";

const DashBoardPage = () => {
	return (
		<Layout>
			<div>
				<RecentWriting />
			</div>
			<div>
				<popularTopicsCard />
			</div>
		</Layout>
	);
};
export default DashBoardPage;
