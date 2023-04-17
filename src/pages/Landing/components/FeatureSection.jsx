import { CardsContainer, FeatureHeader, FeaturesTitle, FeatureCardWrap, Remark } from "../style";
import FeatureCards from "./FeatureCard.jsx";
const FeatureSection = () => {
	return (
		<FeatureCardWrap id ="features">
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
			<Remark>1 Wrigo Infinite members are eligible to more extensive feedback content. </Remark>
			<Remark>2 Only Wrigo Infinite members are entitled to these features. </Remark>
		</FeatureCardWrap>

	);
};
export default FeatureSection;
