import React, {Component} from 'react';

//Children app components

//Bootstrap components
import {FormGroup, FormControl, Button} from 'react-bootstrap';

//Meteor and Data
import { Meteor } from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';

//API
import { Tweets } from '../api/tweets.js';

class TweetBox extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	this.setState({value: event.target.value});
  }

	handleSubmit(event) {
		event.preventDefault();

		const newTweetContent = this.state.value;
		Meteor.call('tweets.insert', newTweetContent);

    // Clear form
    this.setState({value: ''});
	}

	render() {
		const textBoxMsg = "Say something!";
		const textSubmitMsg = "Submit"

		return (
			<div className="tweetBox">
				<form>
					<FormGroup controlId="tweetBoxTextBox">
						<FormControl type="text" onChange={this.handleChange} placeholder={textBoxMsg} />
					</FormGroup>
					<Button type="submit" className="pull-right" onClick={this.handleSubmit} >
			      {textSubmitMsg}
			    </Button>
				</form>
			</div>
		)
	}
}

export default TweetBox
// Container = createContainer(() => {
//   Meteor.subscribe('tweets');
 
//   return {};
// }, TweetBox);