import React, { Component } from "react";
import TimerButton from "../TimerButton/TimerButton";
import "./Timer.css";

type MyProps = {};

type MyState = {
  minutes: number;
  seconds: number;
  isOn: boolean;
};

class Timer extends Component<MyProps, MyState> {
  private myInterval: any;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      ...this.state,
      minutes: 25,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <TimerButton
            buttonAction={this.startTimer}
            buttonValue={"Start"}
            className={"start-timer"}
          />
          <TimerButton
            buttonAction={this.stopTimer}
            buttonValue={"Stop"}
            className={"stop-timer"}
          />
          <TimerButton
            buttonAction={this.resetTimer}
            buttonValue={"Reset"}
            className={"reset-timer"}
          />
        </div>
      </div>
    );
  };
}

export default Timer;
