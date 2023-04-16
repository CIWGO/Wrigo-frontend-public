import styled from "styled-components";
import { Link } from "react-router-dom";
import Dot1Image from "./assets/Ellipse1.png";
import Dot2Image from "./assets/Polygon2.png";
import Dot3Image from "./assets/Ellipse3.png";
import Dot4Image from "./assets/Ellipse4.png";
import Dot5Image from "./assets/Polygon5.png";
import Dot6Image from "./assets/Ellipse6.png";

// export const Nav = styled.nav`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   min-height: 30px;
//   background: #2f71da;
// `;

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 3%;
// `;

// export const Logo = styled.div`
//   color: #fff;
//   font-weight: 800;
//   font-size: 3rem;
//   padding: 1% 3%;
// `;

// export const NavItems = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 1% 3%;
//   justify-content: space-between;
//   align-items: center;
// `;

export const SignUpTag = styled(Link)`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginTag = styled(Link)`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  // background-color: #2f71da;
  position: sticky;
  top: 0;
  z-index: 1000;
  // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavMenuItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  color: #2F71D5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

export const Section = styled.section`
  background-color:#f7ebf7;
  position: relative; 
  width: 100%; 
  min-Height: 80vh; 
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
  margin-top:30px;
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

export const AboutTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color:rgb(47, 115, 218);
  padding-top: 3rem;
`;

export const AboutSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: stretch;
margin-bottom: 1rem;
`;

export const IconTeam = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 0.5rem;
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding: 5rem;
  height: 100%;
`;

export const DevSection = styled.div`
display: flex;
flex-direction: row;
align-items: left;
`;

export const TeamTitle = styled.h3`
  color: #2f71da;
  margin-bottom: 1.5rem;
`;

export const TeamList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  height: 50%
`;

export const TeamMember = styled.li`
  margin: 0.5rem;
  text-align: left;
`;

export const Footer = styled.footer`
  background-color: rgba(91, 159, 252, 0.39);
  color: rgba(91, 139, 252, 0.98);
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
margin-top:50px;
`;
export const PriceText = styled.div`
  margin:0 auto;
  max-width:600px;
  text-align: left;
  font-size:16px;
  line-height:22px;
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
  text-align: left;
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
font-size:14px;
line-height:20px;
text-align: left;
margin-top: 15px;`;

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
height:400px;
background-color: white;
border-radius:13px;
position: relative;
border:0.5px solid rgb(47, 113, 218); 
`;

export const PriceCardsContainer = styled.div`
margin:20px 40px;
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
font-size: 12px;
margin-bottom: 15px;
display: flex;
svg{
  margin-right: 5px;
}
`;

export const SignUpButton = styled.button`
color:rgb(47, 113, 218) ;
font-size: 16px;
font-weight: 400;
letter-spacing:1px;
border-radius:10px;
height: 37px;
background-color: white;
width:85%;
border:1px solid rgb(47, 113, 218);
&:hover{
  color:white;
    background: linear-gradient(to right, rgba(127, 79, 254, .3) 0%, rgba(1, 79, 254, .3) 100%);
border: none;

}`;

export const FeatureDiv = styled.div`
  // width:80%;
  // @media (min-width: 1400px) {
  //     width: 1200px;
  // }
`;
