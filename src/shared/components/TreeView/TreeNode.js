import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

export const TreeNode = ({ id, name, level, parentId, hasChildren, isExpanded, isSelected, onClick, onClickSelect }) => {
	return (
		<li
			className="tree-node"
			style={{ paddingLeft: `${40 * level}px` }}
		>
			{hasChildren ?
				<button className="btn-toggle" onClick={() => onClick(id)}>
					{!isExpanded ?
						<FontAwesomeIcon icon={faChevronRight} /> :
						<FontAwesomeIcon icon={faChevronDown} />
					}
				</button>
				:
				<button className="btn-toggle"></button>
			}

			<button className="btn-toggle" onClick={() => onClickSelect(id)}>
				{!isSelected ?
					<FontAwesomeIcon icon={faSquare} /> :
					<FontAwesomeIcon icon={faCheckSquare} />
				}
			</button>

			ID: {id}, {name}, LEVEL: {level}, PARENT: {parentId}
		</li>
	);
}
