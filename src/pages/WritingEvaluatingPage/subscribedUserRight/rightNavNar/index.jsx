import { Menu } from "antd";
import React, { useState, useEffect } from "react";
// import items from "./items";
import { CommentOutlined, FileExclamationOutlined, BulbOutlined } from "@ant-design/icons";
import FeedbackSection from "../feedback/index";
import GrammarSection from "../grammar/index";
import WritingSampleSection from "../writingSample/index";

const NavBar = ({ text: writing, topic, premiumFeedback }) => {
	// const premiumFeedback = {
	// 	commentTR: "TR: \n\nThe writer has addressed the topic of university education and its benefits for individuals and society. The main point of the article is that while job prospects are important, there are other benefits of attending university such as independence, maturity, and economic contribution. This is a relevant point, but the writer could have elaborated more on each benefit, providing more specific examples or research data to support their argument.\n\nMoreover, the writer could have analyzed potential counterarguments, such as the cost of university education and the possibility of finding success without a degree. Including such counterarguments would have added depth to the essay and made it more convincing. The writer also could have improved their language choices and sentence structure to make the writing flow better and appear more academic.\n\nIn conclusion, while the essay does address the topic, there is room for improvement in terms of providing more specific details and analyzing counterarguments. Additionally, the language and sentence structure could be improved to make the writing appear more academic.",
	// 	commentCC: "CC: \n\nThe writing has a clear central idea that is reinforced in each paragraph, but the ideas are not well-organized or well-connected. The first paragraph states the importance of job prospects in making decisions about university attendance. The second paragraph shifts abruptly to discussing the benefits of independence and social growth for students who attend university, and the third paragraph discusses the societal benefits of educated graduates. There is not enough transition or explanation to connect these ideas as a cohesive argument.\n\nTo improve coherence and cohesion, the writer could consider several strategies. Firstly, topic sentences in each paragraph should more closely reflect the central idea stated in the introduction. Secondly, the writer could include more transitions and connective words or phrases between paragraphs to make connections clear. For example, phrases like \"despite these benefits\" or \"in addition to these advantages\" could help guide the reader through the different points being made.\n\nFinally, the essay could benefit from more development of each point made. For example, the second paragraph only briefly mentions the benefits of independence and social skills, but does not give any concrete examples or explanation. Including specific examples or anecdotes could help illustrate and clarify the writer's points.",
	// 	commentLR: "LR: \n\nThe writing showcases a good range of vocabulary and shows the ability to express ideas using appropriate words and phrases. The author employs a variety of sentence structures that make the content more engaging and interesting. However, there is still room for improvement. The author could have used more academic words and phrases, especially in the introduction and conclusion, to improve coherence and clarity. Also, some of the sentences are too long and could be broken down into smaller ones for improved readability. Another suggestion for improvement is to use signposting language to connect different ideas and arguments, making it easier for the reader to understand the message. Overall, the writing demonstrates good lexical resource, but can still be refined to achieve even greater clarity and coherence.",
	// 	commentGRA: "GRA: \n\nThe writer has a good grasp of grammar and has demonstrated the ability to use complex sentence structures. However, there are a few errors in tense consistency, such as the use of \"would\" and \"will\" in the same sentence. The paragraph lacks proper sentence coherence and flow, resulting in a choppy read. The writer could benefit from taking the time to edit and revise to improve the clarity of ideas expressed. \n\nSuggested improvements: \n\n1. Pay attention to the use of tenses to ensure consistency throughout the paragraph.\n2. Work on improving sentence coherence and flow to create a smoother read for the reader.\n3. Edit and revise the paragraph to improve clarity in the ideas expressed.",
	// 	TR: "6.0",
	// 	CC: "6.5",
	// 	LR: "7.0",
	// 	GRA: "6.5"
	// };
	const items = [
		{
			label: "Feedback",
			key: "feedback",
			icon: <CommentOutlined />,
			component: <FeedbackSection text={premiumFeedback } />
		},
		{
			label: "Grammar",
			key: "grammar",
			icon: <FileExclamationOutlined />,
			component: <GrammarSection text={writing }/>
		},
		{
			label: "Writing sample",
			key: "writing sample",
			icon: <BulbOutlined />,
			component: <WritingSampleSection text={topic }/>
		}
	];
	const [current, setCurrent] = useState("feedback");
	const [content, setContent] = useState(items[0].component);

	useEffect(() => {
		setCurrent(items[0].key);
		setContent(items[0].component);
	}, [items]);

	const handleOnClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);

		const item = items.find((i) => i.key === e.key);
		setContent(item.component);
		console.log("comp:", content.component);
	};

	return (
		<>
			<Menu
				onClick={handleOnClick}
				selectedKeys={current}
				mode="horizontal"
				items={items}
			/>
			<div style={{ marginTop: 20 }} key={current}>
				{content}
			</div>
		</>
	);
};

export default NavBar;
