/* eslint-disable react/prop-types */
import React from "react";

export default function Settings (props) {
	return (
		<div id="settings" className="allItems">
			<div id="break">
				<h3>Break Length</h3>
				<div id="break-label">
					<button id="break-decrement" className="arrowButtons"  onClick={props.clickers}>&darr;</button>
					<h4 id="break-length" >{props.timeBreak}</h4> 
					<button id="break-increment" className="arrowButtons" onClick={props.clickers}>&uarr;</button>
				</div>
			</div>
			<div id="session">
				<h3>Session Length</h3>
				<div id="session-label">
					<button id="session-decrement" className="arrowButtons" onClick={props.clickers}>&darr;</button>
					<h4 id="session-length">{props.timeSession}</h4>
					<button id="session-increment" className="arrowButtons"onClick={props.clickers}>&uarr;</button>
				</div>
			</div>
		</div>
	);
}