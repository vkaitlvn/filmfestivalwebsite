
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Video from '../../video/chairs.mp4';


import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { Button } from '../ButtonElements.js';

import{
    BsFillPlayBtnFill
} from 'react-icons/bs';


import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  Heading,
  
  
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  

  return (
    <HeroContainer id='home'>
        <HeroBg>
          {/*  */}
          <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>
          
          <TrackVisibility >
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__headShake animate__infinite animate__slower" : ""} >
           


              <Heading>
                BROOKLYN FILM.
              </Heading>
              <Button to="/Welcome"><BsFillPlayBtnFill/></Button>
              
              
              
            </div> }
          </TrackVisibility>
           
        </HeroContent>

    </HeroContainer>
  );
}

export default HeroSection;
