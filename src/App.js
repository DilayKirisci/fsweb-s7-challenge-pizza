import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/home/Home.js";
import Success from "./components/Success";
import Order from "./components/orders/Order";
import Menu from "./components/home/Menu";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/order">
					<Order />
				</Route>

				<Route path="/success">
					<Success />
				</Route>
				<Route path="/menu">
					<Menu />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
