import React from "react";
import {
	PopularTopicContainer,
	Topic,
	TopicName,
	IconContainer,
	PopularityIcon,
	WritingDetailIcon
} from "./style";
import { defaultBackEndPrefix } from "../../constants/index";

const PopularTopics = () => {
	const [data, setData] = useState({});
	useEffect(() => {
		const fetchPopularTopics = async () => {
		  try {
			const response = await fetch(`${defaultBackEndPrefix}/popular-topics`);
			const topics = await response.json();
			setData(topics);
		  } catch (error) {
			console.error("Error fetching popular topics:", error);
		  }
		};
	
		fetchPopularTopics();
	  }, []);

	return (
		<PopularTopicContainer>
			{popularTopics.map((topic, index) => (
				<Topic key={index}>
					<TopicName>{topic.name}</TopicName>
					<IconContainer>
						<PopularityIcon className="material-icons">thumb_up</PopularityIcon>
						<span>{topic.popularity}</span>
						<WritingDetailIcon className="material-icons">
              description
						</WritingDetailIcon>
						<span>{topic.writings}</span>
					</IconContainer>
				</Topic>
			))}
		</PopularTopicContainer>
	);
};

export default PopularTopics;
