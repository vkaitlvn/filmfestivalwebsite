// navbar on home page that toggle scrolls to each 


import React, { useState, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import TrackVisibility from 'react-on-screen';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';




const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>

        

          <NavbarContainer>

          <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInDown  animate__slower animate__delay-1s" : ""} >

            <NavLogo onClick={toggleHome} to='/'>
              BKLYN FILMFEST
            </NavLogo>
            </div> }
          </TrackVisibility>

            <MobileIcon onClick={toggle}>
              <CgMenuRight />
            </MobileIcon>

            <NavMenu>
                
              <NavItem>
              

                <NavLinks
                  to='who'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  WHO
                </NavLinks>
              </NavItem>
             
              
              
              <NavItem>
                <NavLinks
                  to='projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  WHERE
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='connect'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  HOW
                </NavLinks>

                
              </NavItem>

              

              

            
              
            </NavMenu>

            
            
          </NavbarContainer>
          
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
