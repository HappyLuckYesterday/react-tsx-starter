import React from 'react';

interface IModalBodyProps {
	children: React.ReactNode;
}

export const ModalBody = ({ children }: IModalBodyProps) => {
	return (
		<div className="modal-body">
			{children}
		</div>
	);
};
