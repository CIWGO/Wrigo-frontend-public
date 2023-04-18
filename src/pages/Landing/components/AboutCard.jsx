import DevIcon from "../assets/developer.png";
import DevopsIcon from "../assets/devops.png";
import TechIcon from "../assets/support.png";
import Business from "../assets/business.png";
import React from "react";
import {
	Section,
	About,
	AboutTitle,
	AboutSection,
	TeamSection,
	TeamTitle,
	TeamList,
	TeamMember,
	TeamMemberName,
	IconTeam,
	DevSection
} from "../style";
import { Tooltip } from "antd";

const AboutCard = () => {
	const developers1 = [
		{ name: "Hai (Leo) Yang", url: "https://www.linkedin.com/in/haiy/" },
		{ name: "Zihan Zhou", url: "https://www.linkedin.com/in/zihan-zhou-au/" },
		{ name: "Longfei (Eric) Li", url: "https://www.linkedin.com/in/Longfei-eric-li/" },
		{ name: "Shuchen (Athena) Wu", url: "https://www.linkedin.com/in/shuchen-wu/" },
		{ name: "Rongnan (Amber) Xu", url: "https://www.linkedin.com/in/rongnan-xu-657712211/" }
	];
	const developers2 = [
		{ name: "Zhiqiang (Albert) Yu ", url: "https://www.linkedin.com/in/albert-zhiqiang-yu/" },
		{ name: "Renee Zheng", url: "https://www.linkedin.com/in/renee-zheng-98604a264/" },
		{ name: "Chang Liu", url: "https://www.linkedin.com/in/changl19/" },
		{ name: "Yinghe (John) Zhou", url: "https://www.linkedin.com/in/yinghe-zhou-a04970175/" },
		{ name: "Zizhen (Jason) Luo", url: "https://www.linkedin.com/in/zizhen-luo/" },
		{ name: "Lucas Lin", url: "https://www.linkedin.com/in/lucas-d-lin/" }
	];
	const devops = [
		{ name: "Gary Xiong", url: "https://www.linkedin.com/in/gary-xiong-846a67266/" },
		{ name: "Joe Jia", url: "https://www.linkedin.com/in/joe-jia/" },
		{ name: "Yu (Jerry) Hu", url: "http://linkedin.com/in/yu-jerry-hu-684916123" },
		{ name: "Zhongxian (Eric) Shen", url: "https://www.linkedin.com/in/zhongxian-shen/" },
		{ name: "Zixin Wang", url: "https://www.linkedin.com/in/zixin-wang-78bb05272/" },
		{ name: "Wenbo (Lawrence) Li", url: "https://www.linkedin.com/in/wenbo-li-au" }
	];
	return (
		<Section id="about">
			<About>
				<AboutTitle>About the Team</AboutTitle>
				<AboutSection>
					<TeamSection>
						<TeamTitle>Tech Consultant</TeamTitle>
						<TeamList>
							<TeamMember>
								<IconTeam src={TechIcon} alt="Tech" />
								<Tooltip title="Checkout Linkedin">
									<TeamMemberName
										href="https://www.linkedin.com/in/haixin-zhang/"
										target="_blank"
										rel="noreferrer"
									>
									Haixin (Jason) Zhang
									</TeamMemberName>
								</Tooltip>
							</TeamMember>
							<TeamTitle>Business Analyst</TeamTitle>
							<TeamMember>
								<IconTeam src={Business} alt="Business" />
								<Tooltip title="Checkout Linkedin">
									<TeamMemberName
										href="https://www.linkedin.com/in/yuchushang1107/"
										target="_blank"
										rel="noreferrer"
									>
									Genesis Shang
									</TeamMemberName>
								</Tooltip>
							</TeamMember>
						</TeamList>
					</TeamSection>
					<TeamSection>
						<TeamTitle>Full Stack Engineers</TeamTitle>
						<DevSection>
							<TeamList>
								{developers1.map((developer, index) => (
									<TeamMember key={index}>
										<IconTeam src={DevIcon} alt="Developer" />
										<Tooltip title="Checkout Linkedin">
											<TeamMemberName href={developer.url} target="_blank" rel="noreferrer">
												{developer.name}
											</TeamMemberName>
										</Tooltip>
									</TeamMember>
								))}
							</TeamList>
							<TeamList>
								{developers2.map((developer, index) => (
									<TeamMember key={index}>
										<IconTeam src={DevIcon} alt="Developer" />
										<Tooltip title="Checkout Linkedin">
											<TeamMemberName href={developer.url} target="_blank" rel="noreferrer">
												{developer.name}
											</TeamMemberName>
										</Tooltip>
									</TeamMember>
								))}
							</TeamList>
						</DevSection>
					</TeamSection>
					<TeamSection>
						<TeamTitle>DevOps Engineers</TeamTitle>
						<TeamList>
							{devops.map((devops, index) => (
								<TeamMember key={index}>
									<IconTeam src={DevopsIcon} alt="Devops" />
									<Tooltip title="Checkout Linkedin">
										<TeamMemberName href={devops.url} target="_blank" rel="noreferrer">
											{devops.name}
										</TeamMemberName>
									</Tooltip>
								</TeamMember>
							))}
						</TeamList>
					</TeamSection>
				</AboutSection>
			</About>
		</Section>
	);
};

export default AboutCard;
