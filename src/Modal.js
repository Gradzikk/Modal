import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; 

const ModalContext = createContext();

const Modal = ({ isOpen, toggle, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return (
    <ModalContext.Provider value={{ toggle }}>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node,
};


const ModalHeader = ({ title }) => {
  const { toggle } = React.useContext(ModalContext);

  return (
    <div className="modal-header">
      <h3>{title}</h3>
      <button onClick={toggle}>&times;</button>
    </div>
  );
};



ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const ModalContent = ({ children }) => {
  return <div>{children}</div>;
};

ModalContent.propTypes = {
  children: PropTypes.node,
};

const ModalFooter = ({ callToActionLabel }) => {
  const { toggle } = React.useContext(ModalContext);

  const handleCallToAction = () => {
    alert('OK');
    toggle();
  };

  return (
    <div className="modal-footer">
      <button onClick={toggle}>Anuluj</button>
      <button onClick={handleCallToAction}>{callToActionLabel}</button>
    </div>
  );
};

ModalFooter.propTypes = {
  callToActionLabel: PropTypes.string.isRequired,
};

export { Modal, ModalHeader, ModalContent, ModalFooter };
