/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CompletedList (props) {
	const allCompletedTasks = props.completedTasks.map((item)=>{
		return(
			<CompletedTask 
				item={item}
				key={`${item["id"]}${item["content"]}`}
				undoCompletedtask={props.undoCompletedtask}
				handleDeleteCompleted={props.handleDeleteCompleted}
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
			<button onClick={()=> props.handleDeleteCompleted(props.item)} className="removeButton"><FontAwesomeIcon icon={faTrash} /></button>
		</div>
	);
}

export default CompletedList;