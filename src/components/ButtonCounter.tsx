import React, { Component } from "react";

interface ButtonCounterProps {
	onClicked: Function;
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

	// componentDidMount() {
	//     this.setState({ count: 0 });
	// }

	handleClick() {
		this.setState({ count: this.state.count + 1 });
		this.props.onClicked(this.state.count);
	}

	render() {
		return (
			<button
				onClick={() => this.handleClick()}
				className="btn btn-outline-secondary"
			>
				{this.props.name} - You clicked me {this.state.count} times
			</button>
		);
	}
}
