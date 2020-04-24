import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModalProps {
	children: React.ReactNode;
	header: string;
	footer: string;
	onHeaderCloseClick: Function;
	onBackdropClick: Function;
}

export const Modal = ({ children, header, footer, onHeaderCloseClick, onBackdropClick }: IModalProps) => {

	let clickListener: EventListener;

	useEffect(() => {
		document.body.classList.add('modal-open');
		initClickBackdropListener();
		return () => {
			document.body.classList.remove('modal-open');
			removeClickListener();
		};
	}, []);

	const initClickBackdropListener = () => {
		clickListener = (e: Event) => {
			const modalDialog = document.querySelector(".modal-dialog");
			const clickedOutside = modalDialog && !modalDialog.contains(e.target as Node);
			if (clickedOutside) {
				removeClickListener();
				onBackdropClick && onBackdropClick();
			}
		};
		document.addEventListener("click", clickListener);
	};

	const removeClickListener = () => {
		if (clickListener) {
			document.removeEventListener("click", clickListener);
			clickListener = undefined;
		}
	};

	return (
		<>
			<div className="modal show" style={{ display: 'block' }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						{header &&
							<ModalHeader onClose={() => onHeaderCloseClick()}>
								{header}
							</ModalHeader>
						}
						<ModalBody>{children}</ModalBody>
						{footer && footer}
					</div>
				</div>
			</div>
			<ModalBackdrop />
		</>
	);
};

interface IModalHeaderProps {
	children: React.ReactNode;
	onClose: Function;
}

export const ModalHeader = ({ children, onClose }: IModalHeaderProps) => {

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div className="modal-header">
			<h5 className="modal-title">
				{children}
			</h5>
			<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClick}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};


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

interface IModalFooterProps {
	children: React.ReactNode;
}

export const ModalFooter = ({ children }: IModalFooterProps) => {
	return (
		<div className="modal-body">
			{children}
		</div>
	);
};

export const ModalBackdrop = () => {
	return (
		createPortal(
			<div className="modal-backdrop fade show"></div>
			, document.body)
	);
};
