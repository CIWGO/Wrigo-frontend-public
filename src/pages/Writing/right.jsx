import "./right.scss";
import moment from "moment/moment";
const RightComponet = ({ comment, score, mutation }) => 	{
	if (mutation.isLoading) {
		return <div className="loading">
			<div className="loader"></div>
			<div className="loading-text">Loading... it will take few seconds</div>
		</div>;
	}
	if (comment.TR) {
		const numbers = [score.TR, score.LR, score.GRA, score.CC];
		console.log(numbers);
		function calOverall (numbers) {
			let sum = 0;
			for (let i = 0; i < numbers.length; i++) {
				sum += numbers[i];
			}
			const avg = sum / numbers.length;
			return Math.round(avg * 2) / 2;
		}

		return <div className="feedback">
			<p id="moment">Evaluted at {moment(Date.now()).format("MMMM Do YYYY, h:mm a")}</p>
			<p>band<span>
				{calOverall(numbers)}
			</span>
			</p>
			<div className="group">
				<div className="scores">
					<h3>TR:{score.TR}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.TR}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3>CC:{score.CC}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.CC}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3>GRA:{score.GRA}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.GRA}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3 >LR:{score.LR}</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.LR}</h3>
				</div>
			</div>
			<div className="group">
				<div className="scores">
					<h3>Overall</h3>
				</div>
				<div className="comment">
					<h3 className="thin">{comment.OVR}</h3>
				</div>
			</div>
			<button>previous feedback</button>

		</div>;
	}; return <div className="noFeed">no feed back yet...</div>;
};

export default RightComponet;
