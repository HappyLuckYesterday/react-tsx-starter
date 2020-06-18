import React from 'react';
import { createPortal } from 'react-dom';

export const ModalBackdrop = () => {
	return (
		createPortal(
			<div className="modal-backdrop fade show"></div>
			, document.body)
	);
};
