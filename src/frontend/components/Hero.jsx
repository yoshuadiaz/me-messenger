import React from 'react';
import {
  HeroContainer,
  HeroHeader,
  HeroBrand,
  HeroNavigation,
  HeroNavLink,
  HeroFooter,
  HeroBody,
  HeroLogo,
  HeroContent,
  HeroPresentaction,
  PresentationMessage,
  PresentationImage,
} from '../assets/styles/Hero';
import myImage from '../assets/static/backHero.png';
import myLogo from '../assets/static/Logo_Wide@3x.png';
import heroFooter from '../assets/static/hero-footer.png';
import illustration from '../assets/static/chatIllustration.png';

const Hero = (props) => {
  return (
    <HeroContainer image={myImage}>
      <HeroContent>
        <HeroHeader>
          <HeroBrand>
            <HeroLogo src={myLogo} alt='' />
          </HeroBrand>
          <HeroNavigation>
            <HeroNavLink to='/login'>
              Iniciar sesion
            </HeroNavLink>
            <HeroNavLink to='/register' isActive='true'>
              Registrate
            </HeroNavLink>
          </HeroNavigation>
        </HeroHeader>
        <HeroBody>
          <HeroPresentaction>
            <PresentationMessage>
              <h1>
                El mensajero
                <br />
                interactivo para
                <em>PROFESIONALES NÓMADAS</em>
              </h1>
              <p>Lleva tus proyectos al siguiente nivel con una mejor comunicación sin sacrificar tu confort</p>
            </PresentationMessage>
            <PresentationImage>
              <img src={illustration} alt="Kiin" />
            </PresentationImage>
          </HeroPresentaction>
        </HeroBody>
        <HeroFooter image={heroFooter} />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
