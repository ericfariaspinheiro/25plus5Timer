/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Settings (props) {
	return (
		<div id="settings" className="allItems">
			<div id="break">
				<h3>Break Length</h3>
				<div id="break-label">
					<FontAwesomeIcon id="break-decrement" icon={faArrowDown} className="arrowButtons" onClick={props.clickers} />
					<h4 id="break-length" >{props.timeBreak}</h4> 
					<FontAwesomeIcon id="break-increment" icon={faArrowUp} className="arrowButtons" onClick={props.clickers} />
				</div>
			</div>
			<div id="session">
				<h3>Session Length</h3>
				<div id="session-label">
					<FontAwesomeIcon id="session-decrement" icon={faArrowDown} className="arrowButtons" onClick={props.clickers}/>
					<h4 id="session-length">{props.timeSession}</h4>
					<FontAwesomeIcon id="session-increment" icon={faArrowUp} className="arrowButtons"onClick={props.clickers} />
				</div>
			</div>
		</div>
	);
}