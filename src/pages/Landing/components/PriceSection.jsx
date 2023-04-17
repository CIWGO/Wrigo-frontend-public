import PriceCards from "./PriceCards";
import { BodySection, PriceTitle, PriceText, H2, PriceSection } from "../style";

const PriceWrap = () => {
	return (
		<BodySection id="pricing" style={{ background: "linear-gradient(to bottom right, #d7d7f991, #f2f2f6, #d9e6fd)", width: "100%", height: "auto" }} >
			<PriceTitle>Price Comparison</PriceTitle>
			<PriceSection>
				<PriceCards/>
			</PriceSection>
			<H2 style={{ fontSize: "20px", fontWeight: 500 }}>Join Wrigo Today and Transform Your IELTS Writing Preparation</H2>
			<PriceText>
				Elevate your IELTS writing journey with our groundbreaking methodology, meticulously crafted to help you reach test-ready proficiency and showcase your authentic potential. Discover the transformative impact of our dedication to inclusivity, accessibility, and state-of-the-art technology on your IELTS writing preparation.
			</PriceText>
		</BodySection>

	);
};

export default PriceWrap;
