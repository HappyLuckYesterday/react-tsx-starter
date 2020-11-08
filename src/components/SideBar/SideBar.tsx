import React, { useEffect } from 'react';
import { ISideBarItem } from './SideBar.interfaces';
import './Sidebar.scss';

interface ISideBarProps {
	items: Array<ISideBarItem>;
}

export const SideBar = ({
	items
}: ISideBarProps) => {

	return (
		<div className="sidebar">
			<ul>
				{
					items.map(item =>
						<li key={item.label}>
							{item.label}
						</li>
					)
				}
			</ul>
		</div>
	);
};
