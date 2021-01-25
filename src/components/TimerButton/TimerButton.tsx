import React from "react";
import PropTypes from "prop-types";
import "./TimerButton.css";

type Props = {
  className?: string;
  buttonAction?: any;
  buttonValue?: any;
};
const TimerButton: React.FC<Props> = (props) => {
  return (
    <div className={`button-container`} onClick={() => props.buttonAction()}>
      <p className="button-value">{props.buttonValue}</p>
    </div>
  );
};

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
