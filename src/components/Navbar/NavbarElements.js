// css for navbar
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  // turns black on scroll
  
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: grab;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: -10px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 15px;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #5c0d04;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-top: -12px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

export const NavItem = styled.li`
  height: 80px;
`;


export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: grab;
  font-size: 15px;

  &.active {
    font-size:25px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #5c0d04;
    transition: all 0.3s ease-in-out;


  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const NavBtnLink = styled(LinkR)`
  padding: 10px 22px;
  color: #ffff;
  font-size: 16px;
  cursor: grab;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: 5000px;
    transition: all 0.3s;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;
