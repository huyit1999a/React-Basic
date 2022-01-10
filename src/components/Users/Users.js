import React from 'react';
import axios from 'axios';
import './User.scss';
import { withRouter } from 'react-router-dom';
class Users extends React.Component {
	state = {
		listUsers: [],
	};

	async componentDidMount() {
		let res = await axios.get('https://reqres.in/api/users?page=1');

		this.setState({
			listUsers: res && res.data && res.data.data ? res.data.data : [],
		});
	}

	handleDetailUser = (user) => {
		this.props.history.push(`/user/${user.id}`);
	};

	render() {
		let { listUsers } = this.state;
		return (
			<div className="list-user-container">
				<h2>Fetch List User</h2>
				<div className="list-user">
					<table id="users">
						<thead>
							<tr>
								<th>ID</th>
								<th>FullName</th>
							</tr>
						</thead>
						<tbody>
							{listUsers &&
								listUsers.length &&
								listUsers.map((item, index) => {
									return (
										<tr
											key={item.id}
											onClick={() =>
												this.handleDetailUser(item)
											}
										>
											<td>{item.id}</td>
											<td>
												{item.first_name}{' '}
												{item.last_name}
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default withRouter(Users);
