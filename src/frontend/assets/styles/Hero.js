import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './GlobalStyles';

export const HeroContainer = styled.section`
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-color: #241A1E;
  background-size: 100px 100px;
  color: #fff;
`;

export const HeroHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
export const HeroBrand = styled.figure`
`;

export const HeroNavigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeroNavLink = styled(Link)`
  margin-right: 1em;
  padding: .5em 1em;
  display: inline-block;
  text-decoration: none;
  color: white;
  border-radius: 1em;
  background-color: ${(props) => {
    return props.isActive ? colors.PRIMARY_COLOR : 'transparent';
  }};
  border: 1px solid ${colors.PRIMARY_COLOR};
`;

export const HeroFooter = styled.footer`
  background-image: url(${(props) => props.image});
  height: 70px;
  width: 100%;
  margin-top: 5em;
  background-repeat: repeat-x;
  background-size: 515px 71px;

`;

export const HeroBody = styled.article`
  padding: 1em;
`;

export const HeroLogo = styled.img`
  width: 200px;
  height: 80px;
  object-fit: contain;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroPresentaction = styled.div`
  align-items: center;
  justify-items: center;
  display: flex;

`;

export const PresentationMessage = styled.div`
  width: 50%;
  & p {
    font-size: 24px;
    margin-top: 2em;
  }
  & h1 {
    font-size: 2.5vw !important;
    font-weight: normal;
  }
  & em {
    font-style: normal;
    font-weight: bolder;
    color: ${colors.PRIMARY_COLOR};
    font-size: 3.5vw;
  }
`;

export const PresentationImage = styled.figure`
  width: 50%;
  margin: 0
  & img {
    object-fit: contain;
    width: 95%;
  }
`;

