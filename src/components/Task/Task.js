import React, { useState } from "react";
import axios from "axios";
import "./Task.css";

function Task({
	setEditModalVisible,
	task,
	data,
	setSpecificTask,
	getPoms,
	setCurrentTimer,
	setAcceptChange,
}) {

	function combineModuleAndTask(event) {
		setEditModalVisible(true);
		setSpecificTask(task);
	}
	function handleDeleteSubmit(event) {
		axios
			.delete(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
			.then((res) => {
				if (res.status === 204) {
					getPoms();
				}
			});
	}

	function bringTimer(event) {
		setCurrentTimer(task);
		setAcceptChange(true);
	}
	return (
		<li className="taskList">
			{task.name}
			<div className="button-container py-2">
				<button className="button hover" onClick={combineModuleAndTask}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button className="button hover" type="button" onClick={handleDeleteSubmit}>
					<i className="fa-solid fa-trash-can"></i>
				</button>
				<button className="button hover" onClick={bringTimer}>
					<i className="fa-solid fa-play"></i>
				</button>
			</div>
		</li>
	);
}

export default Task;
