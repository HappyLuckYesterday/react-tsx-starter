export interface ISideBarItem {
	label: string;
	icon?: string;
	handler?: (e: React.MouseEvent) => void;
}
