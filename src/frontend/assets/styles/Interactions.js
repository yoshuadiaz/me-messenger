import styled from 'styled-components';

export const Container = styled.div`
  grid-area: features;
  color: wheat;
  display: flex;
  flex-direction: column;
  background-color: #081730;
  padding: 10px;
  max-height: 100vh;
  button:hover{
    cursor: pointer;
  }
`;//Interactions.jsx

export const Contact = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  img{
    margin: 20px 0 10px;
  }
  h2,
  p{
    margin-bottom: 5px;
  }
`;

export const Wraper = styled.div`
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
  }
  &::-webkit-scrollbar{
    width: 4px;
    background-color: #DADADA;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb{
    width: 4px;
    background-color: #CBD5E0;
    border-radius: 4px;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
  div{
    display: flex;
    width: 50%;
    height: 100px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    :first-child{
      width: calc(50% - 2px);
      border-right: 2px solid #DADADA;
    }
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 60px;
    background-color: #E9ECFF;
  }
  p{
    margin: 8px;
  }
`;

export const MoreActions = styled.div`
  width: 100%;
  p{
    display: flex;
    height: 30px;
    margin: 0 0 5px 10px;
    align-items: center;
    svg{
      margin-right: 8px;
    }
  }
`;

export const Attachments = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  h4{
    width: 90%;
    margin: 5px 20px ;
  }
  div{
    display: flex;
    width: 100%;
    margin: 10px 0;
    flex-wrap: wrap;
    p{
      display: flex;
      width: 60px;
      height: 60px;
      margin: 5px;
      font-size: 18px;
      background-color: #E9ECFF;
      color: #e67d7d;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
    }
  }
  button{
    width: 120px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 30px;
    border: 2px solid #e67d7d;
    color: #e67d7d;
  }
`;
