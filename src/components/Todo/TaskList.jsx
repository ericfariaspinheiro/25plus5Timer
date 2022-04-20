/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
			<textarea rows="1" readOnly defaultValue={props.item["content"]}></textarea>
			<button onClick={()=> props.handleDeleteNode(props.item)} className="removeButton"><FontAwesomeIcon icon={faTrash} /></button>
		</div>
	);
}

export default TaskList;