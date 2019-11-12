import React from 'react';
import {
  HeroContainer,
  HeroHeader,
  HeroBrand,
  HeroNavigation,
  HeroNavLink,
  HeroFooter,
  HeroBody,
} from '../assets/styles/Hero';
import myImage from '../assets/static/hero-back.jpg';
import heroFooter from '../assets/static/hero-footer.png';

const Hero = (props) => {
  const { children } = props;
  return (
    <HeroContainer image={myImage}>
      <HeroHeader>
        <HeroBrand>
          <img src='https://via.placeholder.com/100x50' alt='' />
        </HeroBrand>
        <HeroNavigation>
          <HeroNavLink to='/chats/1'>
            Conversation
          </HeroNavLink>
          <HeroNavLink to='/login'>
            Iniciar sesion
          </HeroNavLink>
          <HeroNavLink to='/register' isActive='true'>
            Registrate
          </HeroNavLink>
        </HeroNavigation>
      </HeroHeader>
      <HeroBody>
        {children}
      </HeroBody>
      <HeroFooter image={heroFooter} />
    </HeroContainer>
  );
};

export default Hero;
