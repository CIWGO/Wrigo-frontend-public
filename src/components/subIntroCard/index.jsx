import React, { useState } from "react";

function SubIntroCard () {
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubscribeClick = () => {
		setIsSubscribed(true);
	};

	const handleIconCrossClick = () => {
		setIsSubscribed(false);
	};

	return (
		<div>
			<SubIntro onIconCrossClick={handleIconCrossClick} />
			<FreeNPaid />
			<Subscribe onSubscribeClick={handleSubscribeClick} />
			{isSubscribed && (
				<div className="subscriptionConfirmation">
					<p>Thank you for subscribing to Wrigo Infinite!</p>
					<button onClick={handleIconCrossClick}>Close</button>
				</div>
			)}
		</div>
	);
}

function SubIntro ({ onIconCrossClick }) {
	return (
		<SubIntro>
			<section className="infiniteTop">
				<section className="iconCross">
					<a href="#" onClick={onIconCrossClick}></a>
					<img src="./iconCross.svg" alt="iconCross" />
				</section>
				<h1>Wrigo Infinite</h1>
			</section>
			<p>
        Wrigo Infinite provides you unlimited access to our intelligent AI
        writing evaluators with best capabilities on giving you feedbacks for
        improvement and accurate band estimations to help you better navigating
        through the exam preparation.
			</p>
		</SubIntro>
	);
}

function FreeNPaid () {
	return (
		<FreeNPaid>
			<div className="infiniteContainer">
				<FreeTier />
				<Line />
				<WrigoInfinite />
			</div>
		</FreeNPaid>
	);
}

function FreeTier () {
	return (
		<section className="freeTier">
			<h3>Free Tier</h3>
			<p>
        3 Evaluations per month <br />
        2 Sample writings per month <br />
        3 Grammar correction per month
			</p>
			<h5>Free</h5>
		</section>
	);
}

function Line () {
	return <section className="line"></section>;
}

function WrigoInfinite () {
	return (
		<section className="wrigoInfinite">
			<h3>Wrigo Infinite</h3>
			<p>
        Unlimited evaluations <br />
        Unlimited sample writings <br />
        Unlimited grammar corrections <br />
        Holistic feedback across writing submissions <br />
        Writing argument suggestion <br />
			</p>
			<h5>A$ 9.99 / Month</h5>
		</section>
	);
}

function Subscribe ({ onSubscribeClick }) {
	return (
		<Subscribe>
			<section className="subWrigoInfinite">
				<a href="#"></a>
				<button onClick={onSubscribeClick}>Subscribe to Wrigo Infinite</button>
			</section>
		</Subscribe>
	);
}

export default SubIntroCard;
