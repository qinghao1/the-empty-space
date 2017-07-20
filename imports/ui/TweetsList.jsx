import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Children app components
import Tweet from '/imports/ui/Tweet.jsx'

//Bootstrap components

//Meteor and Data
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//API
import { Tweets } from '../api/tweets.js';

class TweetsList extends Component {
	renderTweets() {
		let tweets = this.props.tweets;
		return tweets.map((tweet) => {
			console.log(tweet);
			return (
				<Tweet key={tweet._id} content={tweet.content} />
			)
		})
	}

	render() {
		return (
			<div className="tweetsList">
				<ul>
					{this.renderTweets()}
				</ul>
			</div>
		)
	}
}

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default TweetsListContainer = createContainer(() => {
  Meteor.subscribe('tweets');
 
  return {
    tweets: Tweets.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, TweetsList);