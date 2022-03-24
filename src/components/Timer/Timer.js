import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer(props) {
	// when timer reaches 0, stop timer
	// render timer data on screen with useState
	let clockInterval;
	const [startValue, setStartValue] = useState(5);
	const [timer, setTimer] = useState(startValue);
	const [isActive, setIsActive] = useState(false);

	function toggleTimer() {
		setIsActive(!isActive);
	}

	function resetTimer() {
		clearInterval(clockInterval);
		setTimer(startValue);
		toggleTimer();
	}

	// function pomTimer() {
	// 	setTimer((timer) => timer - 1);
	// 	console.log('Timer works');
	// }

	// function startTimer() {
	// 	clockInterval = setInterval(pomTimer, 1000);
	// }

	// create separate pause and reset functions
	// add event listeners to buttons that runs those functions

	useEffect(() => {
		if (isActive) {
			if (timer > 0) {
				clockInterval = setInterval(() => {
					setTimer((timer) => timer - 1);
				}, 1000);
			} else {
				toggleTimer();
			}
		} else if (!isActive && timer !== 0) {
			clearInterval(clockInterval);
		} else if (isActive && timer === 0) {
			clearInterval(clockInterval);
		}
		return () => clearInterval(clockInterval);
	}, [isActive, timer]);

	return (
		<div className="timer-container">
			<div className="clock-container">Time: {timer}</div>
			
			<div className="buttons-container">
				
				<button className="timer-button" onClick={toggleTimer}>
					{isActive ? (
						<i className="fa-solid fa-pause" />
					) : (
						<i className="fa-solid fa-play" />
					)}
				</button>

				<button className="timer-button" onClick={resetTimer}>
					<i className="fa-solid fa-rotate-right"></i>
				</button>
			</div>
		</div>
	);
}

export default Timer;
