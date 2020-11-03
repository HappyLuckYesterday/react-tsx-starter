import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IMenuProps extends RouteComponentProps {
	title: string;
}

function MenuComponent({ history, title }: IMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ name: 'home', label: "Home", path: "/" },
		{ name: "about", label: "About", path: "/about" },
	];

	const handleMenuBtnClick = () => {
		setIsOpen(!isOpen);
	};

	const handleMenuItemClick = (path) => {
		setIsOpen(!isOpen);
		history.push(path);
	};

	return (
		<nav className="navbar navbar-dark bg-primary">
			<a className="navbar-brand" href="#">
				{title}
			</a>

			<button type="button" className="navbar-toggler" onClick={handleMenuBtnClick}>
				<span className="navbar-toggler-icon" />
			</button>

			<div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
				<ul className="navbar-nav mr-auto">
					{menuItems.map((i) => (
						<li
							className="nav-item"
							key={i.name}
							onClick={() => handleMenuItemClick(i.path)}
						>
							<a className="nav-link">{i.label}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export const Menu = withRouter(MenuComponent);
