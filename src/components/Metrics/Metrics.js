// Metrics.js

import React, { useState, useEffect } from "react";
import "./Metrics.css";

function Metrics({ pomsComplete, breaksCounter, session }) {
	const [sessionsRemaining, setSessionsRemaining] = useState(0);
	useEffect(() => {
		if (session) {
			setSessionsRemaining(session.sessionsBreak - breaksCounter);
		} else {
			return;
		}
	}, [session, breaksCounter]);
	return (
		<div className="metrics-container">
			<h2 className="metricsHeader h2 py-4">Timer Metrics</h2>
			<div className="stats-container">
				<ul className="stats-ul-container">
					<li className="individual-stat">
						Number of pomodoros completed this session: {pomsComplete}
					</li>
					<li className="individual-stat">
						Number of sessions until long break: {sessionsRemaining}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Metrics;
