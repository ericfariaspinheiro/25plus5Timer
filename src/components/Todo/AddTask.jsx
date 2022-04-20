/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTask(props) {
	if(props.toggleInput){
		return (
			<AddTaskSpace 
				updateTaskText={props.updateTaskText}
				handleAdd={props.handleAdd}
				handleCancel={props.handleCancel}
			/> 
		);
	}
    
	return (
		<AddTaskButton 
			addTask={props.toggler} 
		/>
	);
}

function AddTaskButton (props) {
	return(
		<div className="AddTaskButtonDiv">
			<button onClick={props.addTask} className="boxTask addTaskButton"><FontAwesomeIcon icon={faPlus} /></button>
		</div>
	);
}

function AddTaskSpace (props) {
	return (
		<div className="boxTask AddTaskSpace">
			<input type="text" placeholder="Task description" onChange={props.updateTaskText} />
			<div className="AddTaskButtons">
				<button onClick={props.handleAdd}>Add</button>
				<button onClick={props.handleCancel}>Cancel</button>
			</div>
		</div>
	);
}

export default AddTask;