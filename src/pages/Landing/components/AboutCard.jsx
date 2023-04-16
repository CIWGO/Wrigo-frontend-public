import DevIcon from "../assets/developer.png";
import DevopsIcon from "../assets/devops.png";
import TechIcon from "../assets/support.png";
import Business from "../assets/business.png";
import React from "react";
import { Section, AboutTitle, AboutSection, TeamSection, TeamTitle, TeamList, TeamMember, IconTeam } from "../style";

const AboutCard = () => {
	const developers = [
		"Hai Yang (Leo)",
		"Zihan Zhou",
		"Eric Li",
		"Shuchen Wu",
		"Amber Xu",
		"Albert Yu",
		"Renee Zheng",
		"Chang Liu",
		"Yinghe Zhou",
		"Zizhen Luo",
		"Lucas Lin"
	];
	const devops = [
		"Jerry Hu",
		"Gary Xiong",
		"Zhongxian Shen",
		"Zixin Wang",
		"Lawrence Li",
		"Joe Jia"
	];
	return (
		<Section id="about">
			<AboutTitle>About the team</AboutTitle>
			<AboutSection>
				<TeamSection>
					<TeamTitle>Tech Consultants</TeamTitle>
					<TeamList>
						<TeamMember>
							<IconTeam src={TechIcon} alt="Tech" />
          Jason Haixin
						</TeamMember>
						<TeamTitle>Business Analysis</TeamTitle>
						<TeamMember>
							<IconTeam src={Business} alt="Business" />
          Genesis
						</TeamMember>
					</TeamList>
				</TeamSection>
				<TeamSection>
					<TeamTitle>Full Stack Engineers Team</TeamTitle>
					<TeamList>
						{developers.map((developer, index) => (
							<TeamMember key={index}>
								<IconTeam src={DevIcon} alt="Developer" />
								{developer}
							</TeamMember>
						))}
					</TeamList>
				</TeamSection>
				<TeamSection>
					<TeamTitle>DevOps Engineers Team</TeamTitle>
					<TeamList>
						{devops.map((devops, index) => (
							<TeamMember key={index}>
								<IconTeam src={DevopsIcon} alt="Devops" />
								{devops}
							</TeamMember>
						))}
					</TeamList>
				</TeamSection>
			</AboutSection>
		</Section>
	);
};

export default AboutCard;
