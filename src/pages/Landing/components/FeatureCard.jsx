import React from "react";
import {
	CardContent,
	CardHeading,
	Carddetail,
	Dot1,
	Dot2,
	Dot3,
	Dot4,
	Dot5,
	Dot6,
	FeatureCard,
	Icon
} from "../style";
import SVG1 from "../assets/icon1.svg";
import SVG2 from "../assets/icon2.svg";
import SVG3 from "../assets/icon3.svg";
import SVG4 from "../assets/icon4.svg";
import SVG5 from "../assets/icon5.svg";
import SVG6 from "../assets/icon6.svg";

const FeatureCards = () => {
	return (
		<>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG1} alt="icon" />
					</Icon>
					<CardHeading>AI-Powered Grading</CardHeading>
					<Carddetail>
						Say goodbye to subjective scoring and lengthy waiting periods! Our advanced AI technology accurately grades your IELTS writing tasks in real-time, providing you with immediate feedback on your performance.
					</Carddetail>
					<Dot1 />
				</CardContent>
			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG2} alt="icon" />
					</Icon>
					<CardHeading>Evaluation & Feedback<sup>1</sup></CardHeading>
					<Carddetail>
						Our AI Writing Assistant not only identifies key issues in your writing but also provides clear and actionable guidance on how to enhance your essays. Improve your writing skills faster and more effectively than ever before.
					</Carddetail>
					<Dot2 />
				</CardContent>
			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG3} alt="icon" />
					</Icon>
					<CardHeading>Intelligent Grammar Fix<sup>2</sup></CardHeading>
					<Carddetail>
						Eliminate errors and polish your writing with our intelligent grammar fix. The AI Writing Assistant detects and corrects grammar, punctuation, and spelling mistakes. Impress the examiners with flawless essays.
					</Carddetail>
					<Dot3 />
				</CardContent>
			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG4} alt="icon" />
					</Icon>
					<CardHeading>Writing Sample Generation<sup>2</sup></CardHeading>
					<Carddetail>
						Our AI-powered Writing Sample Generation feature provides you with high-quality writing samples, tailor-made for your chosen topic. Learn from the best and adopt winning strategies to craft essays that stand out.
					</Carddetail>
					<Dot4 />
				</CardContent>
			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG5} alt="icon" />
					</Icon>
					<CardHeading>Topic Library</CardHeading>
					<Carddetail>
						Explore an extensive collection of IELTS writing topics, contributed by fellow students to showcase trending subjects from recent exams. Acquaint yourself with various themes and be ready to tackle any topic with confidence.
					</Carddetail>
					<Dot5 />
				</CardContent>
			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon>
						<img src={SVG6} alt="icon" />
					</Icon>
					<CardHeading>Writing Analytics</CardHeading>
					<Carddetail>
						Track your progress and unlock your full potential with our advanced Writing Performance Analytics. Gain insights into your performance trends, identify recurring patterns, and monitor improvements over time.
					</Carddetail>
					<Dot6 />
				</CardContent>
			</FeatureCard>
		</>
	);
};

export default FeatureCards;
