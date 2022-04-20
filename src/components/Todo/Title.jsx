/* eslint-disable react/prop-types */
import React from "react";

function Title (props) {
	return (
		<div className="header">
			<h2 >Tasks:</h2>
			<h2>{props.taskCounter}</h2>
		</div>
	);
}

export default Title;