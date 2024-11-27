import React, { useState } from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from './Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Kliknij</button>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader title="Tytuł Modala" />
        <ModalContent>
          <p>cos tam</p>
        </ModalContent>
        <ModalFooter callToActionLabel="Tak" />
      </Modal>
    </div>
  );
};

export default App;