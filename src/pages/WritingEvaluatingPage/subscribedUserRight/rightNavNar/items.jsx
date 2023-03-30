// import feedbackIcon from "./icons/images/feedbackIcon.svg";
// import { ReactComponent as FeedbackIcon } from "./icons/images/feedbackIcon.svg";
// import Icon from "./icons/icon";
import { FileDoneOutlined, FileExclamationOutlined, FileTextOutlined } from "@ant-design/icons";

export const items = [
	{
		label: "Feedback",
		key: "feedback",
		icon: <FileDoneOutlined />,
		component: <div>Component One</div>
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
		icon: <FileTextOutlined />,
		component: <div>Component 3</div>
	}

	// {
	// 	label: (
	// 		<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
	//       Navigation Four - Link
	// 		</a>
	// 	),
	// 	key: "alipay"
	// }
];
