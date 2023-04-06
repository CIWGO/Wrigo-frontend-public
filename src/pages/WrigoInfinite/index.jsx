import React from "react";
import styles from "./styles";

function Infinite () {
	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<div style={styles.infiniteTop}>
					<h1 style={styles.title}>Wrigo Infinite</h1>
				</div>
				<p style={styles.subtitle}>
					Wrigo Infinite provides you unlimited access to our intelligent AI
					writing evaluators with best capabilities on giving you feedbacks for
					improvement and accurate band estimations to help you better
					navigating through the exam preparation.
				</p>
			</header>
			<main style={styles.main}>
				<div style={styles.infiniteContainer}>
					<div style={styles.freeTier}>
						<h3 style={styles.tierTitle}>Free Tier</h3>
						<p style={styles.tierText}>
							3 Evaluations per month <br />
							2 Sample writings per month <br />3 Grammar correction per month
						</p>
						<h5 style={styles.tierPrice}>Free</h5>
					</div>
					<div style={styles.line}></div>
					<div style={styles.wrigoInfinite}>
						<h3 style={styles.tierTitle}>Wrigo Infinite</h3>
						<p style={styles.tierText}>
							Unlimited evaluations <br />
							Unlimited sample writings <br />
							Unlimited grammar corrections <br />
							Holistic feedback across writing submissions <br />
							Writing argument suggestion <br />
						</p>
						<h5 style={styles.tierPrice}>A$ 9.99 / Month</h5>
					</div>
				</div>
			</main>
			<footer style={styles.footer}>
				<div style={styles.subWrigoInfinite}>
					<a href="#">
						<button style={styles.subWrigoInfinite.button}>
							Subscribe to Wrigo Infinite
						</button>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Infinite;
