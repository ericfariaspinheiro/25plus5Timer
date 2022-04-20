/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Title from "./Title";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedList from "./CompletedList";

import "./Todo.css";

function Todo() {
	const [taskCounter, useTaskCounter] = useState(0);
	const [toggleInput, useToggleInput] = useState(false);
	const [taskText, useTaskText] = useState("");
	const [allTaskNodes, useAllTaskNodes] = useState([]);
	const [completedTasks, useCompletedTasks] = useState([]);

	function toggler () {
		return useToggleInput(!toggleInput);
	}

	function updateTaskText (event) {
		return useTaskText(event.target.value);
	}

	function handleAdd () {
		if(taskText === ""){
			return useToggleInput(!toggleInput);
		}

		const idNumber = Math.floor(Math.random() * (100 - 1) + 1);
		const newNode = {
			id: idNumber,
			content: taskText,
			status: "To Do"
		};

		useAllTaskNodes([...allTaskNodes, newNode]);
		useTaskCounter(taskCounter + 1);
		useTaskText("");
		return useToggleInput(!toggleInput);
	}

	function handleCancel () {
		useTaskText("");
		return useToggleInput(!toggleInput);
	}

	function handleDeleteNode (item) {
		const newList = allTaskNodes.filter((currentNode)=>{
			return currentNode["id"] !== item["id"];
		});
		
		useTaskCounter(prevTaskCounter => prevTaskCounter - 1);
		return useAllTaskNodes(newList);
	}

	function handleCompletedTask (item){
		const newList = allTaskNodes.filter((currentNode)=>{
			return currentNode["id"] !== item["id"];
		});
		useTaskCounter(prevTaskCounter => prevTaskCounter - 1);
		useAllTaskNodes(newList);
		return useCompletedTasks([...completedTasks, item]);
	}

	function undoCompletedtask (item){
		console.log(item);
		const newList = completedTasks.filter((currentNode)=>{
			return currentNode["id"] !== item["id"];
		});
		useCompletedTasks(newList);
		useTaskCounter(prevTaskCounter => prevTaskCounter + 1);
		return useAllTaskNodes([...allTaskNodes, item]);
	}
	
	function handleDeleteCompleted (item) {
		const newList = completedTasks.filter((currentNode)=>{
			return currentNode["id"] !== item["id"];
		});
	
		return useCompletedTasks(newList);
	}	

	return (
		<div id="todo">
			<Title taskCounter={taskCounter}/>
			{(taskCounter > 0) &&
				<TaskList 
					allTaskNodes={allTaskNodes}
					handleDeleteNode={handleDeleteNode}
					handleCompletedTask={handleCompletedTask}
				/> 
			}
			{(completedTasks.length > 0) && 
				<CompletedList 
					completedTasks={completedTasks}
					undoCompletedtask={undoCompletedtask}
					handleDeleteCompleted={handleDeleteCompleted}
				/>
			}
			<AddTask 
				toggleInput={toggleInput} 
				toggler={toggler}
				updateTaskText={updateTaskText}
				handleAdd={handleAdd}
				handleCancel={handleCancel}
			/>
		</div>
	);
}

export default Todo;

