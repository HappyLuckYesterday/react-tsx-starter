import React, { Component } from 'react';

interface ButtonCounterProps {
	onClick: Function;
	name: string;
}
interface ButtonCounterState {
	count: number;
}

export class ButtonCounter extends Component<ButtonCounterProps, ButtonCounterState> {
	constructor(props) {
		super(props);

		this.state = { count: 0 };
	}

	handleClick() {
		this.setState(prevState => ({ count: prevState.count + 1 }));
		this.props.onClick(this.state.count);
	}

	render() {
		return (
			<button
				type="button"
				onClick={() => this.handleClick()}
				className="btn btn-outline-secondary"
			>
				{this.props.name} - You clicked me {this.state.count} times
			</button>
		);
	}
}
