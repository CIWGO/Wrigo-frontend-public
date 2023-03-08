import LineChart from "../../components/Charts/LineChart/index";

// This is a static data, awaiting for real data from backend api
import { marks } from "../../components/Charts/LineChart/data";

const UserProfile = () => {
	return (
		<div>
			<LineChart marks={marks} />
		</div>
	);
};
export default UserProfile;
