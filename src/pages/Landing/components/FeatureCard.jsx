import React from "react";
import { CardContent, CardHeading, Carddetail, FeatureCard, Icon } from "../style";
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
					<Icon><img src={SVG1} alt="icon" />
					</Icon>
					<CardHeading>Ielts Writing Grading</CardHeading>
					<Carddetail>Receive accurate and objective
grading for your IELTS writing tasks,
helping you understand your current
level and areas of improvement.</Carddetail>
				</CardContent>

			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon><img src={SVG2} alt="icon" />
					</Icon>
					<CardHeading>Writing Performance Analytics</CardHeading>
					<Carddetail>Monitor your progress over time,
track your improvements, and stay
focused on your IELTS writing goals.

					</Carddetail>
				</CardContent>

			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon><img src={SVG3} alt="icon" />
					</Icon>
					<CardHeading>Evaluation and Feedback</CardHeading>
					<Carddetail>Get feedback based on official IELTS
criteria, tailored to your specific
needs. Dive deeper into each IELTS
writing criteria with specific content
analysis from your submitted tasks.</Carddetail>
				</CardContent>

			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon><img src={SVG4} alt="icon" />

					</Icon>
					<CardHeading>Grammar Fix</CardHeading>
					<Carddetail>Sharpen your grammar skills with
expert guidance and personalized
recommendations</Carddetail>
				</CardContent>

			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon><img src={SVG5} alt="icon" />
					</Icon>
					<CardHeading>Writing Reasoning
& Supporting Example
Suggestions</CardHeading>
					<Carddetail>Receive tailored suggestions based
on the relevant IELTS writing topic,
helping you build stronger
arguments and present clearer
ideas.</Carddetail>
				</CardContent>

			</FeatureCard>
			<FeatureCard>
				<CardContent>
					<Icon><img src={SVG6} alt="icon" />

					</Icon>
					<CardHeading>Popular topic</CardHeading>
					<Carddetail>-</Carddetail>
				</CardContent>

			</FeatureCard>
		</>

	);
};

export default FeatureCards;
