import React from "react";
import { ButtonContainer, CardBodyHeader, CardBodyPrice, CardDescriptionHeader, CardDescriptionText, CardFree, CardFreeBody, CardPremium, CardsContainer, Container, DefaultButton, Description, Header, Section, TextContainer, CardPreBody, PreCardBodyHeader, PreCardBodyPrice, PreCardDescriptionHeader, PreCardDescriptionText } from "./style";
// import styles from "./styles";

function Infinite () {
	return (
		<Section>
			<Container>
				<TextContainer>

					<Header>WRIGO <span style={{ fontWeight: 400, color: "#5db1ff" }}>Infinite</span></Header>
					<Description><b>Wrigo Infinite</b> provides you unlimited access to our intelligent AI
					writing evaluators with best capabilities on giving you feedbacks for
					improvement and accurate band estimations to help you better
					navigating through the exam preparation.</Description>
				</TextContainer>
				<CardsContainer>
					<CardFree>
						<CardFreeBody>
							<CardBodyHeader>Free</CardBodyHeader>
							<CardBodyPrice><span style={{ fontSize: "3.6rem", color: "#5db1ff" }}>$</span><span style={{ fontSize: "3.6rem", color: "#5db1ff" }}>0</span>/ Month</CardBodyPrice>

							<CardDescriptionHeader>Features:</CardDescriptionHeader>
							<CardDescriptionText>- 3 Evaluations / Month</CardDescriptionText>
							<CardDescriptionText>- 2 Sample writings / Month</CardDescriptionText>
							<CardDescriptionText>- 3 Grammar correction / Month</CardDescriptionText>
							<CardDescriptionText><s>- Holistic feedback for submissions</s></CardDescriptionText>
							<CardDescriptionText><s>- Writing argument suggestion</s></CardDescriptionText>

						</CardFreeBody>

					</CardFree>
					<CardPremium>
						<CardPreBody>
							<PreCardBodyHeader>Infinite</PreCardBodyHeader>
							<PreCardBodyPrice><span style={{ fontSize: "3.6rem", color: "#9dd0ff" }}>$9.99</span>/ Month</PreCardBodyPrice>

							<PreCardDescriptionHeader>Features:</PreCardDescriptionHeader>
							<PreCardDescriptionText>- Unlimited Evaluations</PreCardDescriptionText>
							<PreCardDescriptionText>- Unlimited writings</PreCardDescriptionText>
							<PreCardDescriptionText>- Unlimited Grammar correctionh</PreCardDescriptionText>
							<PreCardDescriptionText>- Holistic feedback for submissions</PreCardDescriptionText>
							<PreCardDescriptionText>- Writing argument suggestion</PreCardDescriptionText>

						</CardPreBody>
						<ButtonContainer>
							<DefaultButton>Subscribe Now</DefaultButton>
						</ButtonContainer>
					</CardPremium>
				</CardsContainer>
			</Container>
		</Section>
	);
}

export default Infinite;
