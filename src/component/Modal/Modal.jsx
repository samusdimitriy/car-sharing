import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'component/Button/Button';
import CloseIcon from 'images/icons/CloseIcon';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);
  z-index: 1200;
`;

const ModalContent = styled.div`
  display: grid;
  justify-items: end;

  border-radius: 24px;
  overflow: hidden;
  max-width: calc(100% - 48px);
  max-height: calc(100% - 44px);

  padding: 16px;
  background-color: var(--bgColor);

  @media screen and (max-height: 860px) {
    overflow-y: scroll;
  }

  @media screen and (max-height: 650px) {
    overflow-y: scroll;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 40px);
  }
`;

const CloseButton = styled(Button)`
  width: 24px;
  background-color: transparent;
  padding: 0;

  &:hover,
  &:focus {
    background-color: transparent;
  }
`;

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton variant="close" style={{ padding: '0 24px' }}>
          <CloseIcon onClick={onCloseModal} />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};
