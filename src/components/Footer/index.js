// Footer code used for entire website

import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { 
    ImFacebook,
    ImTwitter,
    ImInstagram
  } from 'react-icons/im';

import {
    SiTiktok,
    SiSnapchat
} from 'react-icons/si';
// different icons imported for bottom right corner of navbar

import {
    FaRegCopyright
} from 'react-icons/fa';

import {
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialAddress
        
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop()
  }

const Footer = () => {
    return (
        <div className="row " style={{background: "#000000"}}>
            <FooterWrap>          
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/Welcome' onClick={toggleHome}>
                            BKLYN FILM
                        </SocialLogo>
                        {/* clickable logo, returns home */}
                        
                        <WebsiteRights>
                        Site by KAITCODES <FaRegCopyright/> {new Date().getFullYear()} All rights reserved. 
                        </WebsiteRights>
                        <SocialAddress>
                        140 Stewart Ave, Brooklyn, NY 11237 (THIS EVENT IS NOT REAL)
                    </SocialAddress>
                        {/* copyright message */}
                    
                        



                        <SocialIcons>
                            <SocialIconLink href="" target="_blank" aria-label="Twitter">
                                <ImFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="" target="_blank" aria-label="Discord">
                                <ImTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="" class="" target="_blank" aria-label="Email">
                                <ImInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="" class="" target="_blank" aria-label="Email">
                                <SiTiktok/>
                            </SocialIconLink>

                            <SocialIconLink href="" class="" target="_blank" aria-label="Email">
                                <SiSnapchat/>
                            </SocialIconLink>
                           
                        </SocialIcons>
                        {/* icon links */}
                        
                        
                    </SocialMediaWrap>

                    
                </SocialMedia>
            </FooterWrap>
            
        </div>
    )
}

export default Footer
