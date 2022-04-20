import React, { useEffect } from "react";
import "./MusicPlayer.css";
import songFile from "../../Assets/Audio/Parasol.mp3";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

function MusicPlayer() {
	useEffect(()=>{
		const setSong = new Audio(songFile);
		setSong.className = "backgroundMusic";
	}, []);

	function playSong() {
		const currentSong =  document.getElementsByClassName("backgroundMusic");
		console.log(currentSong);
		//currentSong.play();
	}

	return (
		<div id="musicPlayer">
			{/* <iframe width="1264" height="480" src="https://www.youtube.com/embed/XDh0JcxrbPM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
			<button><FontAwesomeIcon icon={faPlayCircle} size="2x" className="playPause" onClick={playSong}/></button>
			<button><FontAwesomeIcon icon={faPauseCircle} size="2x" className="playPause"/></button>
		</div>
	);
}

export default MusicPlayer;