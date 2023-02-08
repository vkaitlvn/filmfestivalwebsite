
import React, { useState} from 'react';
import { Link } from 'react-router-dom'

import Video from '../../video/welcome.mp4';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Button } from '../ButtonElements.js';




import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Heading,
  TopLine
  
  
} from './WelcomeElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>

        <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInDown  animate__slower animate__delay-1s" : ""} >
            <TopLine>June 23rd.</TopLine>

            </div> }
        </TrackVisibility>
          
          <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__pulse animate__infinite animate__slower" : ""} >
           

              
              <Heading>
                New York's Biggest Film Festival.
              </Heading>
              
              
              
                
              
            </div> }
          </TrackVisibility>
           
        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
