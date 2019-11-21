import styled from 'styled-components';

export const Container = styled.section`
  grid-area: content;
  overflow: hidden;
  :hover{
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

export const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-height: 25vh;
  img{
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }
  button{
    position:  absolute;
    width: auto;
    height: auto;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    top: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
  }
  div{
    position: absolute;
    height: 165px;
    left: 70px;
    bottom: -110px;
    img{
      width: 120px;
      height: 120px;
      margin: 0 16px;
      object-fit: cover;
      border-radius: 10px;
    }
    button{
      position: relative;
      margin: 10px;
      box-shadow: none;
    }
    :last-child{
      height: 60px;
      left: 220px;
      bottom: -80px;
    }
    h1{
      font-size: 28px;
    }
    h2{
      font-size: 20px;
    }
  }
`;

export const Data = styled.div`
  width: 80%;
  max-height: 60vh;
  margin: 22vh 0 0;
  padding: 0 10%;
  div{
    display: flex;
    width: 100%;
    height: 50px;
    margin: 0 0 15px 0;
    align-items: center;
    justify-content: space-between;
    :last-child{
      justify-content: center;
    }
  }
  button{
    margin: 0;
    width: 80px;
    :first-child{
      width: 120px;
    }
  }
`;
