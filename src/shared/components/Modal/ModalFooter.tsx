import React from 'react';

interface IModalFooterProps {
	children: React.ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => <div className="modal-body">{children}</div>;
