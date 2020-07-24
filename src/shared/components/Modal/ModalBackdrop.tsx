import React from 'react';
import { createPortal } from 'react-dom';

export const ModalBackdrop = () => createPortal(<div className="modal-backdrop fade show" />, document.body);
