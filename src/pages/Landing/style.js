import styled from "styled-components";
import { Link } from "react-router-dom";
import Dot1Image from "./assets/Ellipse1.png";
import Dot2Image from "./assets/Polygon2.png";
import Dot3Image from "./assets/Ellipse3.png";
import Dot4Image from "./assets/Ellipse4.png";
import Dot5Image from "./assets/Polygon5.png";
import Dot6Image from "./assets/Ellipse6.png";

export const SignUpTag = styled(Link)`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const LoginTag = styled(Link)`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  color: #2f71da;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: rgba(241, 240, 255, 0.8);
  backdrop-filter: blur(15.7px);
  -webkit-backdrop-filter: blur(15.7px);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  width: 8rem;
`;

export const NavMenuItem = styled.li`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Header = styled.header`
  // background-color: #2f71da;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: red;
  padding: 1rem;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  color: #2f71da;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  text-align: center;
`;

export const Remark = styled.div`
  font-size: 10px;
  margin-top: 10px;
`;

export const Section = styled.section`
  background-color:#F1F0FE;
  position: relative; 
  width: 100%; 
  min-Height: 65vh; 
  overflow: hidden;
`;

export const H1 = styled.h1`
  margin-top:60px;
  font-size:60px;
  // color: #2F71D5;
  // color: white;
  background: linear-gradient(to right, #65A0FF, #7574E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom:0;
  // text-shadow: 4px 4px 4px rgba(117, 116, 224, 0.35);
`;
export const SubTitle = styled.h2`
  font-size:40px;
  // color: #2F71D5;
  // color: #AACBFF;
  background: linear-gradient(to right, #7574E0, #0C1640);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom:0;
  margin-top:10px;
  // text-shadow: 4px 4px 4px rgba(117, 116, 224, 0.65);
`;
export const H2 = styled.h2`
  color: #2f71da;
  margin:30px 50px 0px 50px;
`;

export const SectionList = styled.ul`
  list-style-type: none;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PriceValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const PriceFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AboutTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color:rgb(47, 115, 218);
  margin-top: 90px;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 20px;
`;

export const IconTeam = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 8px;
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 100%;
`;

export const DevSection = styled.div`
display: flex;
flex-direction: row;
align-items: left;
`;

export const TeamTitle = styled.h3`
  color: #2f71da;
  margin-bottom: 10px;
`;

export const TeamList = styled.ul`
  list-style-type: none;
  padding: 5px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  height: 50%
`;

export const TeamMember = styled.li`
  margin: 8px;
  text-align: left;
`;

export const TeamMemberName = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Footer = styled.footer`
  background-color: rgba(218, 230, 253);
  color: #2F71DA;
  text-align: center;
  padding: 1rem;
`;

export const BodySection = styled.section`
position: relative;
  padding-top:29px;
  padding-bottom: 19px;
  background-color:white;
  position: relative; 
  width: 100%; 
  height:auto; 
  overflow: hidden; 
`;

export const FeatureCard = styled.div`
position:relative;
height:270px;
width:270px;

@media (min-width: 1200px) {
  width: 300px;
  height:300px; }/* width when screen is wider than 1000px */
margin:20px 0px;
border-radius: 15px;
background-color: transparent;
box-shadow: 0px 0px 70px rgb(220, 220, 267, 0.7);
align-items: center;
`;

export const FeatureCardWrap = styled.div`
  padding:80px 0 100px 0;
  width:100%;
  align-items: center;
  background-color:#F7F7F7;
`;

export const FeaturesTitle = styled.h1`
font-size: 32px;
font-weight: 700;
color:rgb(47, 115, 218);
`;
export const PriceTitle = styled.h1`
font-size: 32px;
font-weight: 700;
color:rgb(47, 115, 218);
margin-top: 70px;
`;
export const PriceText = styled.div`
  padding:0 60px;
  margin:20px auto;
  max-width:500px;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  font-size:14px;
  line-height:20px;
  margin-bottom:60px;
`;

export const CardsContainer = styled.div`

margin:auto;
display: flex;
gap:20px;
flex-wrap:wrap;
justify-content:space-around;
align-items: center;
width:80%;
@media (min-width: 1400px) {
    width: 1200px;
}
@media (max-width: 550px) {
  width: 100%;
}

`;
export const FeatureHeader = styled.div`
  min-height: 10vh;
  text-align: justify;
  justify-content: center;
  line-height:25px;
  font-size: 18px;
  color:rgb(47, 113, 218);
  padding: .7rem;
  margin:0 50px;
`;

export const FeatureContainer = styled.div`margin-bottom:30px;`;
export const CardContent = styled.div`
margin:15% 13%;
display: flex;
flex-direction: column;
justify-content:space-around;
`;

export const Icon = styled.div`
text-align:left;
overflow: visible;
img {
  width: 24px; /* Adjust the width as desired */
}
`;

export const CardHeading = styled.div`
font-size:16px;
font-weight:600;
text-align: left;
line-height:22px;
margin-top: 6px;
color:rgb(47, 113, 218);`;

export const Carddetail = styled.div`
font-size: 14px;
font-family: 'Roboto', sans-serif;
line-height: 20px;
text-align: left;
margin-top: 10px;

@media (max-width: 1200px) {
  font-size: 12px;
  line-height: 16px;
  }
`;

export const Dot1 = styled.div`
position: absolute; 
bottom:30px;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot1Image});`;
export const Dot2 = styled.div`
position: absolute; 
left:20px;
top:20%;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot2Image});`;
export const Dot3 = styled.div`
position: absolute; 
right:10px;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot3Image});`;
export const Dot4 = styled.div`
position: absolute; 
left:20%;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot4Image});`;
export const Dot5 = styled.div`
position: absolute; 
bottom:20%;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot5Image});`;
export const Dot6 = styled.div`
position: absolute; 
bottom:20%;
height: 300px;
width: 300px;
background-size:cover;
background-image:url(${Dot6Image});`;

export const PriceCard = styled.div`
width:270px;
height:425px;
background-color: white;
border-radius:13px;
position: relative;
border:0.5px solid rgb(47, 113, 218); 
margin:0px auto;
`;

export const PriceCardsContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-wrap: wrap;
  gap:50px;

`;

export const Top = styled.div`
display: flex;
flex-direction: column;
align-items:start;
height:35%;width:85%;
margin:35px auto 0px;`;

export const Line = styled.div`
height:1px;width:83%;
margin:0 auto;
background-color:lightgrey;
position:absolute;
left:20px;
top:42%;`;

export const Middle = styled.div`
align-items:start;
height:36%;width:85%;
margin:10px auto;`;

export const Bottom = styled.div`
  height:15%;
  width:75%;
  margin:auto;
  algin-items:center;
`;

export const SVGBox = styled.div`
font-size: 15px;
margin-bottom:20px;
`;
export const TextGroup = styled.div`
font-size:14px;
span{
  font-size: 40px;
  font-weight: 500;
}`;

export const PriceDetail = styled.div`
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 12px;
font-weight: 400;
margin-bottom: 15px;
display: flex;
svg{
  margin-right: 5px;
}
`;

export const SignUpButton = styled.button`
color:rgb(47, 113, 218);
margin-top: 12px;
font-size: 16px;
font-weight: 400;
letter-spacing: 1px;
border-radius: 10px;
height: 30px;
background-color: white;
width:60%;
border:1px solid rgb(47, 113, 218);
&:hover{
  color:white;
    background: linear-gradient(to right, rgba(127, 79, 254, .3) 0%, rgba(1, 79, 254, .3) 100%);
border: none;

}`;
