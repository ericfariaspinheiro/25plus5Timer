/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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

	return (
		<>
			<h2 className="header">Tasks: {taskCounter}</h2>
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
				/>
			}
			{toggleInput ? 
				<AddTaskSpace 
					updateTaskText={updateTaskText}
					handleAdd={handleAdd}
					handleCancel={handleCancel}
				/> 
				: 
				<AddTaskButton 
					addTask={toggler} 
				/>
			}
		</>
	);
}

function AddTaskButton (props) {
	return(
		<button onClick={props.addTask} className="addTaskButton">Click to add a task</button>
	);
}

function AddTaskSpace (props) {
	return (
		<div className="AddTaskSpace">
			<input type="text" onChange={props.updateTaskText} />
			<button onClick={props.handleAdd}>Add</button>
			<button onClick={props.handleCancel}>Cancel</button>
		</div>
	);
}

function TaskList (props) {
	const taskList = props.allTaskNodes.map((item)=> {
		return (<CreateTask 
			item={item}
			key={`${item["id"]}${item["content"]}`}
			handleDeleteNode={props.handleDeleteNode}
			handleCompletedTask={props.handleCompletedTask}
		/>);
	});

	return(
		<div>
			{taskList}
		</div>
	);
}

function CreateTask (props) {
	return (
		<div className="taskNode">
			<input type="checkbox" onClick={()=> props.handleCompletedTask(props.item)} />
			<p>{props.item["content"]}</p>
			<button onClick={()=> props.handleDeleteNode(props.item)}>Delete</button>
		</div>
	);
}

function CompletedList (props) {
	const allCompletedTasks = props.completedTasks.map((item)=>{
		return(
			<CompletedTask 
				item={item}
				key={`${item["id"]}${item["content"]}`}
				undoCompletedtask={props.undoCompletedtask}
			/>
		);
	});

	return (
		<div>
			{allCompletedTasks}
		</div>
	);
}

function CompletedTask (props) {
	return (
		<div className="completedTaskNode" >
			<input type="checkbox" onChange={()=>props.undoCompletedtask(props.item)} checked/>
			<p>{props.item["content"]}</p>
		</div>
	);
}

export default Todo;

