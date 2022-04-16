/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
	const [taskCounter, useTaskCounter] = useState(0);
	const [toggleInput, useToggleInput] = useState(false);
	const [taskText, useTaskText] = useState("");
	const [allTaskNodes, useAllTaskNodes] = useState([]);
	
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

		const newNode = {
			id: taskCounter,
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

	function handleEditNode (item) {
		
		allTaskNodes.map((currentNode)=>{
			if(currentNode["id"] === item["id"]){
				console.log("test");		
				currentNode["status"] = "edit";
			}
		});

		return useAllTaskNodes([...allTaskNodes]);
	}
	

	return (
		<div>
			<h2>Tasks: {taskCounter}</h2>
			{(taskCounter > 0) ? 
				<TaskList 
					allTaskNodes={allTaskNodes}
					handleDeleteNode={handleDeleteNode}
					handleEditNode={handleEditNode}
				/> : 
				<TaskList 
					allTaskNodes={allTaskNodes}
					handleDeleteNode={handleDeleteNode}
					handleEditNode={handleEditNode}
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
		</div>
	);
}

function AddTaskButton (props) {
	return(
		<button onClick={props.addTask} className="addTaskButton">Add here a task</button>
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
	const test = props.allTaskNodes.map((item)=> {
		if(item["status"] === "edit"){
			return (<EditTask 
				item={item}
				key={`${item["id"]}${item["content"]}`}
			/>);
		}
		return (<CreateTask 
			item={item}
			key={`${item["id"]}${item["content"]}`}
			handleDeleteNode={props.handleDeleteNode}
			handleEditNode={props.handleEditNode}
		/>);
	});
	return(
		<div>
			{test}
		</div>
	);
}

function CreateTask (props) {
	return (
		<div className="taskNode">
			<input type="radio" />
			<p>{props.item["content"]}</p>
			<div>
				<button onClick={()=> props.handleEditNode(props.item)}>Edit</button>
				<button onClick={()=> props.handleDeleteNode(props.item)}>Delete</button>
			</div>
		</div>
	);
}

function EditTask (props) {
	console.log(props);
	return(
		<div>
			<textarea name="" id="" cols="25" rows="3" value={props.item["content"]}></textarea>
			<button>Save</button>
			<button>Cancel</button>
		</div>
	);
}

export default Todo;

