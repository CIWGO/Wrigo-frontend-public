import RecentWriting from "./recentWritings";
import PopularTopicsCard from "./popularTopics";
import { Background, BottomRow } from "./style";
import Trend from "./trend";

const DashBoardPage = () => {
	return (
		<Background>

			<RecentWriting />

			<BottomRow>

				<PopularTopicsCard />
				<Trend/>
			</BottomRow>

		</Background>
	);
};
export default DashBoardPage;
