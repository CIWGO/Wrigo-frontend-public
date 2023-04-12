import React from "react";
import { H2, PriceCardsContainer, PriceCard, Top, Middle, Bottom, Line, SVGBox, TextGroup, PriceDetail, SignUpButton } from "../style";
import { Link } from "react-router-dom";

const PriceCards = () => {
	return (
		<PriceCardsContainer>
			<PriceCard>
				<Top>
					<SVGBox>

						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27">
							<g id="Group_146" data-name="Group 146" transform="translate(-939 -2363)">
								<g id="Group_144" data-name="Group 144" transform="translate(410.01 -54.99)">
									<circle id="Ellipse_4" data-name="Ellipse 4" cx="13.5" cy="13.5" r="13.5" transform="translate(528.99 2417.99)" fill="#2f71d5" opacity="0.17"/>
								</g>
								<g id="Group_145" data-name="Group 145" transform="translate(548.999 2130.999)" opacity="0.439">
									<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(398 241)">
										<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="none" stroke="#2f71d5" strokeWidth="2" opacity="0">
											<rect width="18" height="18" rx="5" stroke="none"/>
											<rect x="1" y="1" width="16" height="16" rx="4" fill="none"/>
										</g>
									</g>
									<g id="Box" transform="translate(397.001 240.001)" fill="none" stroke="#2f71d5" strokeWidth="2">
										<rect width="12" height="12" rx="2" stroke="none"/>
										<rect x="1" y="1" width="10" height="10" rx="1" fill="none"/>
									</g>
								</g>
							</g>
						</svg>
					</SVGBox>
					<H2 style={{ fontSize: "21.5px", fontWeight: "500", margin: 0 }}>
            Free User
					</H2>
					<TextGroup> <span>$0.00</span> USD/month</TextGroup>
				</Top>
				<Line/>
				<Middle><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>
IELTS Writing Grading</PriceDetail><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>Evaluation and Feedback</PriceDetail><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>Writing Performance Analytics</PriceDetail></Middle>
				<Bottom><Link to = "/signup">
					<SignUpButton>sign up today</SignUpButton> </Link>
				</Bottom>
			</PriceCard>
			<PriceCard>
				<Top>
					<SVGBox>

						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27">
							<defs>
								<clipPath id="clip-path">
									<rect id="Rectangle_1188" data-name="Rectangle 1188" width="18.651" height="8.404" fill="#2f71d5"/>
								</clipPath>
							</defs>
							<g id="Group_149" data-name="Group 149" transform="translate(-1238 -2350)">
								<g id="Group_147" data-name="Group 147" transform="translate(709.01 -67.99)">
									<circle id="Ellipse_4" data-name="Ellipse 4" cx="13.5" cy="13.5" r="13.5" transform="translate(528.99 2417.99)" fill="#2f71d5" opacity="0.17"/>
								</g>
								<g id="Group_148" data-name="Group 148" transform="translate(1242.174 2359.298)" opacity="0.44">
									<g id="Group_126" data-name="Group 126" transform="translate(0 0)" clipPath="url(#clip-path)">
										<path id="Path_16" data-name="Path 16" d="M9.314,3.03c.53-.491,1.03-.976,1.553-1.434A6.137,6.137,0,0,1,13.249.2a4.268,4.268,0,0,1,3.663.5,3.868,3.868,0,0,1,1.672,2.718,4.156,4.156,0,0,1-.4,2.691,4.131,4.131,0,0,1-2.959,2.2A4.5,4.5,0,0,1,11.416,7.27c-.52-.4-.995-.867-1.484-1.311-.206-.188-.394-.394-.6-.6-.357.344-.7.682-1.051,1.011a7.93,7.93,0,0,1-2.249,1.6,4.4,4.4,0,0,1-4.018-.1,3.78,3.78,0,0,1-1.9-2.659A4.162,4.162,0,0,1,.236,2.853,4.093,4.093,0,0,1,3.3.123,4.415,4.415,0,0,1,7.017.961a17.956,17.956,0,0,1,2.1,1.861c.069.067.135.138.2.209M8.15,4.26c-.314-.341-.6-.677-.908-.982A6.286,6.286,0,0,0,5.531,2,2.607,2.607,0,0,0,3.322,1.9,2.49,2.49,0,0,0,1.829,4.637,2.284,2.284,0,0,0,3.371,6.55a2.735,2.735,0,0,0,2.048-.122,6.409,6.409,0,0,0,1.845-1.3c.318-.3.623-.609.887-.869M10.464,4.2c.372.361.729.715,1.095,1.06a5.873,5.873,0,0,0,1.6,1.155,2.522,2.522,0,0,0,2.553-.12A2.448,2.448,0,0,0,16.815,3.7a2.348,2.348,0,0,0-2.257-1.991,3.523,3.523,0,0,0-2.062.667A12.934,12.934,0,0,0,10.464,4.2" transform="translate(0 0)" fill="#2f71d5"/>
									</g>
								</g>
							</g>
						</svg>
					</SVGBox>
					<H2 style={{ fontSize: "21.5px", fontWeight: "500", margin: 0 }}>
            Wrigo Infinite
					</H2>
					<TextGroup> <span>$9.99</span> USD/month</TextGroup>
				</Top>
				<Line/>
				<Middle><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>
        All Free User Features</PriceDetail><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>Detailed Feedback on Criteria</PriceDetail><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>Grammar Fix</PriceDetail><PriceDetail><svg xmlns="http://www.w3.org/2000/svg" width="18.001" height="18.001" viewBox="0 0 28.001 28.001">
					<g id="Checkbox_stand_alone_selected_emph_" data-name="Checkbox (stand alone selected emph)" opacity="0.397">
						<g id="Checkbox_Focus_Ring" data-name="Checkbox Focus Ring" transform="translate(4 4)">
							<g id="Custom_Box" data-name="Custom Box" transform="translate(-4 -4)" fill="rgba(0,0,0,0)" stroke="#378ef0" strokeWidth="2" opacity="0">
								<rect width="27.804" height="27.804" rx="5" stroke="none"/>
								<rect x="1" y="1" width="25.804" height="25.804" rx="4" fill="none"/>
							</g>
						</g>
						<g id="Group_117" data-name="Group 117" transform="translate(4 4)">
							<path id="Box" d="M2.829,0H16.975A2.829,2.829,0,0,1,19.8,2.829V16.975A2.829,2.829,0,0,1,16.975,19.8H2.829A2.829,2.829,0,0,1,0,16.975V2.829A2.829,2.829,0,0,1,2.829,0Z" fill="#1473e6"/>
							<g id="Checkmark" transform="translate(2 2)">
								<path id="Frame" d="M0,0H16V16H0Z" fill="#1473e6" opacity="0"/>
								<path id="Shape" d="M5.983,15a1.637,1.637,0,0,1-1.311-.673L.865,9.084A1.818,1.818,0,0,1,.6,7.329,1.68,1.68,0,0,1,1.931,6.236a1.63,1.63,0,0,1,1.556.7l2.5,3.48,6.53-8.724a1.63,1.63,0,0,1,1.556-.7A1.68,1.68,0,0,1,15.4,2.085a1.818,1.818,0,0,1-.267,1.755L7.295,14.328A1.637,1.637,0,0,1,5.983,15Z" transform="translate(0 0)" fill="#fff"/>
							</g>
						</g>
					</g>
				</svg>Writing Reasoning and
Suggestions</PriceDetail></Middle>
				<Bottom>
					<Link to = "/login"><SignUpButton>subscribe now</SignUpButton></Link></Bottom>
			</PriceCard>
		</PriceCardsContainer>
	);
};

export default PriceCards;
