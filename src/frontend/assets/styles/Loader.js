import styled, { keyframes } from 'styled-components';

import { colors } from './GlobalStyles';

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 20% 0 0 calc(50% - 40px);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${colors.PRIMARY_COLOR};
    border-radius: 50%;
    animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.PRIMARY_COLOR} transparent transparent transparent;
    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
