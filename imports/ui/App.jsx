import React, {Component} from 'react';

//Children app components
import TweetBox from '/imports/ui/TweetBox.jsx'
import TweetsList from '/imports/ui/TweetsList.jsx'

//Bootstrap components
import {Col} from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
				<TweetBox />
				<TweetsList />
			</Col>
		)
	}
}

export default App;