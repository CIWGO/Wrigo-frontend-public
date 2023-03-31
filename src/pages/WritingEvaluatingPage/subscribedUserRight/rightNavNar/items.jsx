import { CommentOutlined, FileExclamationOutlined, BulbOutlined } from "@ant-design/icons";
import FeedbackSection from "../feedback/index";
import GrammarSection from "../grammar/index";
import WritingSampleSection from "../writingSample/index";

const items = [
	{
		label: "Feedback",
		key: "feedback",
		icon: <CommentOutlined />,
		component: <FeedbackSection />
	},
	{
		label: "Grammar",
		key: "grammar",
		icon: <FileExclamationOutlined />,
		component: <GrammarSection />
	},
	{
		label: "Writing sample",
		key: "writing sample",
		icon: <BulbOutlined />,
		component: <WritingSampleSection />
	}
];

export default items;
