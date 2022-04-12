export default function Time(props) {
    return (
        <div id="timer" className="allItems">
            <div id="timer-counter">
                <h3 id="timer-label">{props.label}</h3>
                <h2 id="time-left">{props.displayFormatter()}</h2>
                <audio id="beep" src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Alarm%20Sounds/137[kb]alarm-synth-verb-hit.wav.mp3"></audio>
            </div>
            <div className="lowerButtons">
                <button id="start_stop" onClick={props.handleClickPlayPause}>PLAY/PAUSE</button>
                <button id="reset" onClick={props.handleClickReset}>RESET</button>
            </div>
        </div>
    );
}