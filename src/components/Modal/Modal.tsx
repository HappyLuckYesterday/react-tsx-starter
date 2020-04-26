import React, { useEffect } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalBackdrop } from './ModalBackdrop';

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
