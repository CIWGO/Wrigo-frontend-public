import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 30px;
  background: #2f71da;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
`;

export const Logo = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 3rem;
  padding: 1% 3%;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1% 3%;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpTag = styled(Link)`
  color: #2f71da;
  border: 2px solid #fff;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  padding: 10px 10px;
  text-decoration: none;
  box-sizing: border-box;
  background: #ffffff;
`;

export const LoginTag = styled(Link)`
  background: #2f71da;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 10px;
  padding: 10px 10px;
  text-decoration: none;
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
