import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginTag = styled(Link)`
  color: white;
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
  font-family: Noto Sans;
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
  background-color: #2f71da;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
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
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.header`
  background-color: #2f71da;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 1rem;
`;

export const Main = styled.main`
  flex: 1;
  padding: 1rem;
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
  margin-bottom: 1.5rem;
`;

export const H1 = styled.h1`
  color: #ffffff;
`;

export const H2 = styled.h2`
  color: #2f71da;
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

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #1c57a7;
  padding: 1rem;
  margin: 1rem;
  width: 250px;
`;

export const PriceTitle = styled.h3`
  color: #2f71da;
  margin-bottom: 0.5rem;
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

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TeamTitle = styled.h3`
  color: #2f71da;
  margin-bottom: 0.5rem;
`;

export const TeamList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TeamMember = styled.li`
  margin: 0.5rem;
  text-align: center;
`;

export const Footer = styled.footer`
  background-color: #2f71da;
  color: white;
  text-align: center;
  padding: 1rem;
`;
