import React, {Component} from 'react';

//Children app components

//Bootstrap components

class Tweet extends Component {
	render() {
		return (
			<li>{this.props.content}</li>
		)
	}
}

export default Tweet;