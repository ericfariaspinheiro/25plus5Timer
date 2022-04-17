import React from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Pomodoro from "./components/Pomodoro/Pomodoro";

export default function App() {
	

	return (
		<div id="fullPage">
			<h2 className="header">Study Space</h2>
			<Pomodoro />
			<div id="todo">
				<Todo />
			</div>
		</div>
	);
}
