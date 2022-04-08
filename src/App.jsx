import React from "react";
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      session: 25,
      break: 5,
      timer: 1500,
      paused: true,
      intervalController: 0,
      label: "Session"
    }
    this.handleClickArrows = this.handleClickArrows.bind(this);
    this.handleClickPlayPause = this.handleClickPlayPause.bind(this);
    this.displayFormatter = this.displayFormatter.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickArrows = (e) => {
    const action = e.target.id;
    let newValue = this.state.session;
    
    if(this.state.paused === false){
      return;
    }

    if (action === "break-decrement"){
      this.setState(
        (previousState)=> {
          if(this.state.break > 1) {
            return ({
              break: previousState.break -1
            })
          }
        }
      )
    }

    if (action === "break-increment"){
      this.setState(
        (previousState)=> {
          if(this.state.break < 60) {
            return ({
              break: previousState.break +1
            })
          }
        }
      )
    }

    if (action === "session-decrement"){
      newValue--;
      this.setState(
        ()=> {
          if(this.state.session > 1) {
            return ({
              session: newValue,
              timer: newValue * 60
            })
          }
        }
      )
    }

    if (action === "session-increment"){
      newValue++
      this.setState(
        ()=> {
          if(this.state.session < 60) {
            return ({
              session: newValue,
              timer: newValue * 60
            })
          }
        }
      )
    }

  }

  sessionTurn = () => {
    let intervalId = setInterval(()=> {
      if(!this.state.paused && this.state.timer>0){
        this.setState(
          ()=> ({
            timer: this.state.timer-1,
            intervalStarted:true,
            label: "Session"
          })
        )
      } else if (!this.state.paused && this.state.timer === 0){
        document.getElementById("beep").play();
        clearInterval(intervalId);
        this.setState({timer: this.state.break * 60, label: "Break"}, this.breakTurn());
      }
    }, 1000)    
  }

  breakTurn = () => {
    let intervalId = setInterval(()=> {
      if(!this.state.paused && this.state.timer > 0){
        this.setState(
          ()=> ({
            timer: this.state.timer-1,
            intervalStarted:true
          })
        )
      } else if (!this.state.paused && this.state.timer === 0){
        document.getElementById("beep").play();
        clearInterval(intervalId);
        this.setState({timer: this.state.session * 60, label: "Session"}, this.sessionTurn());
      }
    }, 1000)
    
  }

  handleClickPlayPause = () => {
    this.setState(
      (previousState) => ({
        paused: !previousState.paused,
        intervalController: previousState.intervalController +1
      })
    )
    console.log(this.state.intervalController)
    if(this.state.intervalController === 0){
      this.sessionTurn();
    }
    
  }
  
  handleClickReset = () => {
    const audioBeep = document.getElementById("beep");
    audioBeep.pause();
    this.setState(
      ()=> ({
        session: 25,
        break: 5,
        timer: 1500,
        paused: true,
        intervalController: 0,
        label: "Session"
      })
    )
    audioBeep.currentTime = 0;
  }

  displayFormatter = ()=> {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - (minutes * 60);
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  }

  render() {

    return (
      <div id="full-project">
        <h1 id="title">25 + 5 Clock</h1>

        <Settings 
          timeSession={this.state.session}
          timeBreak={this.state.break}
          clickers={this.handleClickArrows}
        />
        
        <Time  
          label={this.state.label}   
          displayFormatter={this.displayFormatter} 
          handleClickPlayPause={this.handleClickPlayPause} 
          handleClickReset={this.handleClickReset}
        />

      </div>
    )
  }
}


class Settings extends React.Component {
  render(){
    return (
      <div id="settings">

          <div id="break">
            <h3>Break Length</h3>
            <div id="break-label">
              <button id="break-decrement" onClick={this.props.clickers}>&darr;</button>
              <h4 id="break-length" >{this.props.timeBreak}</h4> 
              <button id="break-increment" onClick={this.props.clickers}>&uarr;</button>
            </div>
          </div>

          <div id="session">
            <h3>Session Length</h3>
            <div id="session-label">
              <button id="session-decrement" onClick={this.props.clickers}>&darr;</button>
              <h4 id="session-length">{this.props.timeSession}</h4>
              <button id="session-increment" onClick={this.props.clickers}>&uarr;</button>
            </div>
          </div>

        </div>
    )
  }
}




function Time({displayFormatter, handleClickPlayPause, handleClickReset, label}) {
  return (
    <div id="timer">
      <div id="timer-counter">
        <h3 id="timer-label">{label}</h3>
        <h2 id="time-left">{displayFormatter()}</h2>
        <audio id="beep" src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Alarm%20Sounds/137[kb]alarm-synth-verb-hit.wav.mp3"></audio>
      </div>
      
      <div>
        <button id="start_stop" onClick={handleClickPlayPause}>PLAY/PAUSE</button>
        <button id="reset" onClick={handleClickReset}>RESET</button>
      </div>
    </div>);
}
  
export default App