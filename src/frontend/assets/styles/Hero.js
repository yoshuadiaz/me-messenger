import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
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
  margin-right: .5em;
  padding: .5em;
  display: inline-block;
  text-decoration: none;
  color: white;
  border-radius: .5em;
  background-color: ${(props) => {
    return props.isActive ? 'red' : '';
  }};
`;

export const HeroFooter = styled.footer`
  background-image: url(${(props) => props.image});
  height: 90px;
  width: 100vw;
  background-size: 100% 90px;
`;

export const HeroBody = styled.article`
  padding: 1em;
`;
