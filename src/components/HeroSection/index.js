import React, { useState, useEffect } from 'react';
import Video5 from '../../videos/ironvideo1.mp4';
import Video2 from '../../videos/ironvideo2.mp4';
import Video3 from '../../videos/ironvideo3.mp4';
import Video4 from '../../videos/ironvideo4.mp4';
import Video1 from '../../videos/wrtrailer.mp4';
import AppStoreImage from '../../images/appstore2.svg'; 

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [videoSrc, setVideoSrc] = useState(Video1);

  useEffect(() => {
    const videos = [Video1];

    const videoElement = document.getElementById('heroVideo');

    const handleVideoEnd = () => {
      const currentVideoIndex = videos.indexOf(videoSrc);
      const newIndex = (currentVideoIndex + 1) % videos.length;
      setVideoSrc(videos[newIndex]);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [videoSrc]);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop={true}
          muted
          id="heroVideo"
          src={videoSrc}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>WristRoad</HeroH1>
        <HeroP>
          Conquer The Tracks!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleBottom}
          >
            Download Now! {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
          <a href="https://apps.apple.com/us/app/wristroad/id6468395372" target="_blank" rel="noopener noreferrer">
          <img src={AppStoreImage} alt="Download on the App Store" style={{ marginTop: '20px' }} />
        </a>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
