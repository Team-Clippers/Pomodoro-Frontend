// App.js

import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer/Timer.js";
import TaskList from "./components/TaskList/TaskList.js";
import Metrics from "./components/Metrics/Metrics.js";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import FooterTwo from "./components/Footer/FooterTwo"
// import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";


function App() {
	const [currentTimer, setCurrentTimer] = useState(null);
	const [acceptChange, setAcceptChange] = useState(false);
	const [pomsComplete, setPomsComplete] = useState(0);
	const [breaksCounter, setBreaksCounter] = useState(0);
	return (
		<div>
		<div className="app-container">
			<Timer
				currentTimer={currentTimer}
				acceptChange={acceptChange}
				setAcceptChange={setAcceptChange}
				setPomsComplete={setPomsComplete}
				pomsComplete={pomsComplete}
				breaksCounter={breaksCounter}
				setBreaksCounter={setBreaksCounter}
			/>
			<TaskList
				setCurrentTimer={setCurrentTimer}
				setAcceptChange={setAcceptChange}
			/>
			<Metrics
				pomsComplete={pomsComplete}
				breaksCounter={breaksCounter}
				session={currentTimer}
			/>
			<Footer/>
			<FooterTwo />
			</div>
		</div>
	);
}

export default App;
