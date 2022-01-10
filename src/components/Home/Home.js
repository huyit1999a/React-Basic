import React from 'react';
import Color from '../HOC/Color';
class Home extends React.Component {
	render() {
		return (
			<div className="home-container">
				<h1>Hello world from Home</h1>
			</div>
		);
	}
}

export default Color(Home);
