
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
						Let us empower your IELTS writing journey with our innovative
						approach, designed to help you achieve test-ready status and
						demonstrate your true capabilities. Experience the difference that a
						commitment to inclusivity, accessibility, and cutting-edge
						technology can make in your IELTS writing preparation.
			</PriceText>
		</BodySection>

	);
};

export default PriceWrap;
