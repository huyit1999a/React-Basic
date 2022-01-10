import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class DetailUser extends React.Component {
	state = {
		user: {},
	};

	async componentDidMount() {
		let id = this.props.match.params.id;
		let res = await axios.get(`https://reqres.in/api/users/${id}`);

		this.setState({
			user: res && res.data && res.data.data ? res.data.data : {},
		});
	}

	handleBackUser = () => {
		this.props.history.push('/user');
	};

	render() {
		let { user } = this.state;
		let isEmptyObj = Object.keys(user).length === 0;
		return (
			<div className="detail-user-container">
				<h2>Detail User</h2>
				<div className="detail-user">
					{isEmptyObj === false && (
						<>
							<p>
								Username: {user.first_name} {user.last_name}
							</p>
							<p>User email: {user.email}</p>
							<div className="avt">
								<img src={user.avatar} alt="" />
							</div>
							<button
								type="button"
								onClick={() => this.handleBackUser()}
							>
								Back
							</button>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default withRouter(DetailUser);
