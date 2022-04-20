import React, { useState, useEffect } from "react";
import Time from "./time";
import Settings from "./settings";

function Pomodoro() {
	const [session, useSession] = useState(25);
	const [breaker, useBreaker] = useState(5);
	const [timer, useTimer] = useState(1500);
	const [paused, usePaused] = useState(true);
	const [label, useLabel] = useState("Session");
	const [intervalController, useIntervalController] = useState(false);

	useEffect(() => {
		if (paused) {
			return;
		}

		if (intervalController) {
			if (timer === 0) {
				useTimer(session * 60);
				document.getElementById("beep").play();
				useIntervalController(false);
				return;
			}

			useLabel("Break");
			const breakInterval = setInterval(() => {
				useTimer((previoustimer) => previoustimer - 1);
			}, 1000);
			return () => clearInterval(breakInterval);
		}

		if (timer === 0) {
			useTimer(breaker * 60);
			document.getElementById("beep").play();
			useIntervalController(true);
			return;
		}

		const timerInterval = setInterval(() => {
			useLabel("Session");
			useTimer((previoustimer) => previoustimer - 1);
		}, 1000);
		return () => clearInterval(timerInterval);
	}, [paused, timer, intervalController]);

	const handleClickArrows = (e) => {
		const action = e.target.id;

		if (!paused) {
			return;
		}

		switch (action) {
		case "break-decrement":
			if (breaker === 1) {
				return;
			}
			return useBreaker((currentBreaker) => currentBreaker - 1);
		case "break-increment":
			if (breaker === 60) {
				return;
			}
			return useBreaker((currentBreaker) => currentBreaker + 1);
		case "session-decrement":
			if (session === 1) {
				return;
			}
			useSession((currentSession) => currentSession - 1);
			useTimer((currentTimer) => currentTimer - 60);
			return;
		case "session-increment":
			if (session === 60) {
				return;
			}
			useSession((currentSession) => currentSession + 1);
			useTimer((currentTimer) => currentTimer + 60);
			return;
		}
	};

	const handleClickPlayPause = () => {
		return usePaused(!paused);
	};

	const handleClickReset = () => {
		const audioBeep = document.getElementById("beep");
		audioBeep.pause();
		useSession(25);
		useBreaker(5);
		useTimer(1500);
		usePaused(true);
		useLabel("Session");
		audioBeep.currentTime = 0;
		return;
	};

	const displayFormatter = () => {
		let minutes = Math.floor(timer / 60);
		let seconds = timer - minutes * 60;

		seconds = seconds < 10 ? "0" + seconds : seconds;
		minutes = minutes < 10 ? "0" + minutes : minutes;

		return minutes + ":" + seconds;
	};
    
	return (
		<div className="pomodoroContainer">
			<div id="title" className="allItems">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png"
					alt="tomato"
				/>
			</div>
			<div id="pomodoro">
				<Settings
					timeSession={session}
					timeBreak={breaker}
					clickers={handleClickArrows}
				/>
				<Time
					label={label}
					displayFormatter={displayFormatter}
					handleClickPlayPause={handleClickPlayPause}
					handleClickReset={handleClickReset}
				/>
			</div>
		</div>
	);
}

export default Pomodoro;