import React from 'react';
import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  display: 'none';
  ${(props) => props.isActive && css`{
    display: 'flex';
  }`}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalBackground = styled.div`
  background: #30182DDD;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 350px;
  width: 90%;
  box-shadow: 0 0 .5em black;
`;
const ModalHeader = styled.div`
  color: white;
  background: #EB5D5D;
  padding: .5em;
  border-bottom: 2px solid #CA3434;
  border-radius: .25em .25em 0 0;
`;
const ModalBody = styled.div`
  background: white;
  color: black;
  padding: .5em;
  border-radius: 0 0 .25em .25em;
`;

const ModalClose = styled.div`
  position: absolute;
  top: -1em;
  right: -1em;
  width: 2em;
  height: 2em;
  cursor: pointer;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1em;
  border-radius: 1em;
`;

const Modal = (props) => {
  const { isActive, title, children, handleClose } = props;

  return (
    <ModalWrapper isActive={isActive}>
      <ModalBackground onClick={handleClose} />
      <ModalContent>
        <ModalClose onClick={handleClose}>x</ModalClose>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
