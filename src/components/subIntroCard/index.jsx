import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Header () {
	return (
		<header>
			{/* Title, iconCross and an introductory paragraph */}
			<section className="infiniteTop">
				<section className="iconCross">
					<a href="#"></a>
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
		</header>
	);
}

function Main () {
	return (
		<main>
			{/* main info */}
			<div className="infiniteContainer">
				{/* "freeTier" on left side */}
				<section className="freeTier">
					<h3>Free Tier</h3>
					<p>
            3 Evaluations per month <br />
            2 Sample writings per month <br />3 Grammar correction per month
					</p>
					<h5>Free</h5>
				</section>
				{/* "line" in centre */}
				<section className="line"></section>
				<section className="wrigoInfinite">
					{/* "wrigoInfinite" on right side */}
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
			</div>
		</main>
	);
}

function Footer () {
	return (
		<footer>
			<section className="subWrigoInfinite">
				{/* subscribe button to Wrigo Infinite */}
				<a href="#"></a>
				<button>Subscribe to Wrigo Infinite</button>
			</section>
		</footer>
	);
}

function Infinite () {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Infinite />, document.getElementById("root"));
