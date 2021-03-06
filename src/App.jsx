import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Todo from "./components/Todo/Todo";

export default function App() {
	return (
		<div id="fullPage">
			<Header />
			<Pomodoro />
			<Todo />	
		</div>
	);
}
