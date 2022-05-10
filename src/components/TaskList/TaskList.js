//TaskList.js

import React, { useState, useEffect } from "react";
import CreateForm from "../CreateForm/CreateForm.js";
import "./TaskList.css";
import Task from "../Task/Task.js";
import EditForm from "../EditForm/EditForm.js";
import axios from "axios";

function TaskList({ setCurrentTimer, setAcceptChange }) {
	const [createModalVisible, setCreateModalVisible] = useState(false);
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [data, setData] = useState([]);
	const [specificTask, setSpecificTask] = useState('hello');
	function createModalToggle(event) {
		setCreateModalVisible(true);
	}
	function editModalToggle(event) {
		setEditModalVisible(true);
	}
	useEffect(async () => {
	getPoms();
	}, [editModalVisible]);

	async function getPoms(){
		try {
			const response = await axios
				.get("https://pomodor-api.herokuapp.com/poms")
				.then((response) => {
					setData(response.data);
				});
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div className="tasklist-container">
			{createModalVisible && (
				<CreateForm setCreateModalVisible={setCreateModalVisible} getPoms={getPoms} />
			)}
			{editModalVisible && (
				<EditForm setEditModalVisible={setEditModalVisible} data={specificTask} getPoms={getPoms}/>
			)}
			<button id="create-button" className="mt-4 ms-5 p-1 hover">
				<i className="fa-solid fa-plus" onClick={createModalToggle}></i>
			</button>
			<h2 className="listHeader py-4">Task List</h2>
			
			<div className="list-container">
				<ul className="tasklist-list">
					{data.map((task) => {
						return (
							<Task
								setEditModalVisible={setEditModalVisible}
								key={task._id}
								task={task}
								data={specificTask}
								setSpecificTask={setSpecificTask}
								getPoms={getPoms}
								setCurrentTimer={setCurrentTimer}
								setAcceptChange={setAcceptChange}
								
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default TaskList;
