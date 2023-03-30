import Feedback from "../feedback/index";
import { CommentOutlined, FileExclamationOutlined, BulbOutlined } from "@ant-design/icons";

export const items = [
	{
		label: "Feedback",
		key: "feedback",
		icon: <CommentOutlined />,
		component: <Feedback/>
	},
	{
		label: "Grammar",
		key: "grammar",
		icon: <FileExclamationOutlined />,
		component: <div>Component 2</div>
	},
	{
		label: "Writing sample",
		key: "writing sample",
		icon: <BulbOutlined />,
		component: <div>Component 3</div>
	}
];
