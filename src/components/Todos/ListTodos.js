import React from 'react';
import './ListTodos.scss';
import { toast } from 'react-toastify';
import AddTodo from './AddTodo';
import Color from '../HOC/Color';
class ListTodos extends React.Component {
	state = {
		listTodos: [
			{ id: 1, todo: 'Watching TV' },
			{ id: 2, todo: 'Listening to music' },
			{ id: 3, todo: 'Reading book' },
		],
		editTodo: {},
	};

	addTodo = (todo) => {
		let currentListTodos = [...this.state.listTodos, todo];
		this.setState({
			listTodos: currentListTodos,
		});
		toast.success('Add todo successfully!');
	};

	editTodo = (todo) => {
		let { editTodo, listTodos } = this.state;
		let listTodosCopy = [...listTodos];
		let isEmptyObj = Object.keys(editTodo).length === 0;

		if (isEmptyObj === false && editTodo.id === todo.id) {
			let objIndex = listTodosCopy.findIndex((obj) => obj.id === todo.id);

			listTodosCopy[objIndex].todo = editTodo.todo;

			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});
			toast.success('Edit todo successfully!');
			return;
		}

		this.setState({
			editTodo: todo,
		});
	};

	handleOnChangeEdit = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.todo = event.target.value;
		this.setState({ editTodo: editTodoCopy });
	};

	deleteTodo = (item) => {
		let currentListTodos = [...this.state.listTodos];
		currentListTodos = currentListTodos.filter(
			(todo) => todo.id !== item.id
		);
		this.setState({
			listTodos: currentListTodos,
		});
		toast.success('Delete todo successfully!');
	};

	render() {
		let { listTodos, editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;

		return (
			<div className="list-todo-container">
				<h2>Todo List by HuyIT</h2>
				<AddTodo addTodo={this.addTodo} />
				<div className="list-todo">
					{listTodos &&
						listTodos.map((item, index) => {
							return (
								<div className="todo" key={item.id}>
									{isEmptyObj === true ? (
										<div className="todo-text">
											{item.id} - {item.todo}
										</div>
									) : (
										<>
											{editTodo.id === item.id ? (
												<div className="todo-text">
													{item.id} -{' '}
													<input
														type="text"
														value={editTodo.todo}
														onChange={(event) =>
															this.handleOnChangeEdit(
																event
															)
														}
													/>
												</div>
											) : (
												<div className="todo-text">
													{item.id} - {item.todo}
												</div>
											)}
										</>
									)}

									<div className="todo-button">
										<button
											type="button"
											className="btn-edit"
											onClick={() => this.editTodo(item)}
										>
											{isEmptyObj === false &&
											editTodo.id === item.id
												? 'Save'
												: 'Edit'}
										</button>
										<button
											type="button"
											className="btn-delete"
											onClick={() =>
												this.deleteTodo(item)
											}
										>
											Delete
										</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ListTodos;
