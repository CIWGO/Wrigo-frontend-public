import { TopicFeedback, Feedback, Group, Scores, Comment } from "./style";

const Right = () => 	{
	// const numbers = [score.TR, score.LR, score.GRA, score.CC];

	// function calOverall (numbers) {
	// 	let sum = 0;
	// 	for (let i = 0; i < numbers.length; i++) {
	// 		sum += numbers[i];
	// 	}
	// 	const avg = sum / numbers.length;
	// 	return Math.round(avg * 2) / 2;
	// }

	return (
		<TopicFeedback>
			<Feedback>
				<p>band<span>
			7.5
				</span>
				</p>
				<Group>
					<Scores>
						<h3>TR:</h3>
					</Scores>
					<Comment>
						Lorem, ips Loremntium eligendi fugiat voluptas Lorem ipsum dolor icing elit. Aliquid adipisci animi ipsam ratione ea sit, cumque alias nostrum dolor, doloribus incidunt neque autem quam repellat, dolores soluta sunt inventore dolorum! quaerat tempore cum, nobis id amet minus sit, aliquam quibusdam. dolor aliquid
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>CC:</h3>
					</Scores>
					<Comment>
						Lorem ipsum dolorta pariatur, animi obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat velit numquam cumque sit voluptatibus repudiandae ipsa aliquid. Dolorem pariatur accusamus iste dolores assumenda neque quo dicta. Error, ab odit.
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>GRA:</h3>
					</Scores>
					<Comment>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam eius voluptates, nobis voluptas ut sint esse aliquam dolores necessitatibus nesciunt! Provident ut cumque quia.
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3 >LR:</h3>
					</Scores>
					<Comment>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, enim laudantium beatae mollitia sapiente itaque amet quo dolore eum neque pariatur aliquid, tempora delectus odio.
					</Comment>
				</Group>
				<Group>
					<Scores>
						<h3>Overall</h3>
					</Scores>
					<Comment>
						Lorem ipsum dolor sit amet consectetuquamia quasi aperiam esse neque, illum commodi, obcaecati veritatis.
					</Comment>
				</Group>
			</Feedback>
		</TopicFeedback>);
};

export default Right;
