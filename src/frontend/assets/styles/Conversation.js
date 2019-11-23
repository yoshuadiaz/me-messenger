import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-rows: 100vh;
  ${({ content }) => {
    if (content) {
      return css`{
        grid-template-columns: 300px auto;
        grid-template-areas: "chats content";
      }`;
    }

    return css`{
      grid-template-columns: 22.5% 55% 22.5%;
      grid-template-areas: "chats conversation features";
    }`;

  }}
`;//Conversation.jsx
