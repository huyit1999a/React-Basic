import React from 'react';
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
	state = {
		todo: '',
	};

	handleOnChangeTodo = (event) => {
		this.setState({ todo: event.target.value });
	};

	handleAddTodo = () => {
		if (!this.state.todo) {
			toast.error('Missing todo title!');
			return;
		}
		let todo = this.state.todo;
		this.props.addTodo({
			id: Math.floor(Math.random() * 100) + 1,
			todo: todo,
		});
		this.setState({ todo: '' });
	};

	render() {
		return (
			<div className="add-todo">
				<input
					type="text"
					className="add-todo-input"
					onChange={(event) => this.handleOnChangeTodo(event)}
					value={this.state.todo}
				/>
				<button type="button" onClick={() => this.handleAddTodo()}>
					Add
				</button>
			</div>
		);
	}
}

export default AddTodo;
