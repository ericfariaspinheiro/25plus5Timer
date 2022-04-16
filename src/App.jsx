import React from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Pomodoro from "./components/Pomodoro/Pomodoro";

export default function App() {
	

	return (
		<div id="fullPage">
			<div className="header"></div>
			<Pomodoro />
			<div id="todo">
				<Todo />
			</div>
		</div>
	);
}
