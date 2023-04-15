import { CardsContainer, FeatureHeader, FeaturesTitle, FeatureCardWrap } from "../style";
import FeatureCards from "./FeatureCard.jsx";
const FeatureSection = () => {
	return (
		<FeatureCardWrap >
			<CardsContainer>
				<FeaturesTitle>
						What we actually do
				</FeaturesTitle>
				<FeatureHeader>
						Revolutionize your IELTS writing preparation with Wrigo, the
						cutting-edge web app powered by OpenAI services. Our platform
						utilizes ChatGPT to automatically grade your written English
						language tasks, providing personalized feedback that enhances your
						preparation for IELTS assessments. At Wrigo, our mission is to
						transform the language assessment landscape, ensuring every
						individual can realize their full language learning potential.
				</FeatureHeader>
				<FeatureCards/>
			</CardsContainer>
		</FeatureCardWrap>

	);
};
export default FeatureSection;
