import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodos from './Todos/ListTodos';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Users from './Users/Users';
import DetailUser from './Users/DetailUser';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Nav />
					<img src={logo} className="App-logo" alt="logo" />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/todo">
							<ListTodos />
						</Route>
						<Route path="/user" exact>
							<Users />
						</Route>
						<Route path="/user/:id">
							<DetailUser />
						</Route>
					</Switch>
				</header>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{/* Same as */}
				<ToastContainer />
			</div>
		</Router>
	);
}

export default App;
