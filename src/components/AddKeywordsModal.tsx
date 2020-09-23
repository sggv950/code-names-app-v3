import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
`;

const Card = styled.div`
  height: 30vh;
  width: 30vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.8);
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
`;

const AddKeywordsModal = () => {
  return (
    <Modal>
      <Card>
        <h1>MODAL</h1>
      </Card>
    </Modal>
  );
};

export default AddKeywordsModal;
