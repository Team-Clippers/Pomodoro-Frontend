//TaskList.js

import React, { useState, useEffect } from "react";
import CreateForm from "../CreateForm/CreateForm.js";
import "./TaskList.css";
import Task from "../Task/Task.js";
import EditForm from "../EditForm/EditForm.js";
import axios from 'axios';

function TaskList(props) {
	const [createModalVisible, setCreateModalVisible] = useState(false);
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [data, setData] = useState([])
	function createModalToggle(event) {
		setCreateModalVisible(true);
	}
	function editModalToggle(event) {
		setEditModalVisible(true);
	}
	useEffect(async() => {
		try {
		const response = await axios.get('https://pomodor-api.herokuapp.com/poms').then((response) => {
		setData(response.data);
		})
	} catch (error) {
		console.log(error);
	}
	}, [])
	return (
		<div className="tasklist-container">
			{createModalVisible && (
				<CreateForm setCreateModalVisible={setCreateModalVisible} />
			)}
			{editModalVisible && (
				<EditForm setEditModalVisible={setEditModalVisible} />
			)}
			<button id="create-button">
				<i className="fa-solid fa-plus" onClick={createModalToggle}></i>
			</button>
			<h3>Task List</h3>
			<div className="list-container">
				<ul className="tasklist-list">
					{data.map((task) => {
						return (<Task setEditModalVisible={setEditModalVisible} key={task._id} task={task}/>)
					})}
					
				</ul>
			</div>
		</div>
	);
}

export default TaskList;
