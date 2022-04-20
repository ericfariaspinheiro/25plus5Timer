import React, { useState } from "react";
import "./Header.css";
import Songs from "../../Assets/Audio/Parasol.mp3";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header () {
	const [audio] = useState(new Audio(Songs));
	const [audioActive, useAudioActive] = useState(false);

	function playSong() {
		useAudioActive(!audioActive);
		return audio.play();
	}

	function pauseSong() {
		useAudioActive(!audioActive);
		return audio.pause();	
	}

	return(
		<header className="naBar">
			<h1>Study Space</h1>
			{audioActive ? 
				<button><FontAwesomeIcon icon={faPauseCircle} size="2x" className="playPause" onClick={pauseSong} /></button> :
				<button><FontAwesomeIcon icon={faPlayCircle} size="2x" className="playPause" onClick={playSong}/></button>
			}
		</header>
	);
}