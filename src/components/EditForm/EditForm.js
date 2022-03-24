import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditForm({ setEditModalVisible, data }) {
	//
	// let initialTask = {
	// 	name: '',
	// 	workLength: 0,
	// 	shortBreak: 0,
	// 	sessionsBreak: 0,
	// 	longBreak: 0,
	// };
	//
	// const [task, setTask] = useState(initialTask);
	const [task, setTask] = useState([]);
	useEffect(async () => {
		try {
			const response = await axios
				.get(`https://pomodor-api.herokuapp.com/poms/${task.name}`)
				.then((response) => {
					setTask(response.data);
					console.log(response.data);
					console.log(task);
				});
		} catch (error) {
			console.log(error);
		}
	}, []);

	function handleChange(event) {
		setTask({ ...task, [event.target.id]: event.target.value });
		console.log(task);
	}

	function handleSubmit(event) {
		// event.preventDefault();
		// need axios put request here, body is task state.
		// this delete request only works if you click delete button and dont type anything in the input
		axios.put(`https://pomodor-api.herokuapp.com/poms/${data.name}`, task);
		setEditModalVisible(false);
	}

	function handleDeleteSubmit(event) {
		// axios delete task
		axios.delete(`https://pomodor-api.herokuapp.com/poms/${data.name}`);
		// console.log('hello');
		setEditModalVisible(false);
	}
	return (
		<div className='modal-container'>
			<div className='task-form-container'>
				<form
					className='task-create-form'
					onSubmit={handleSubmit}
					// onClick={handleDeleteSubmit}
				>
					<div className='task-parameter'>
						<label htmlFor='name'>Name of task: </label>
						<input
							type='text'
							id='name'
							placeholder={data.name}
							value={task.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='workLength'>Length of work sessions:</label>
						<input
							type='number'
							id='workLength'
							// value={data.workLength}
							placeholder={data.workLength}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='shortBreak'>Length of short breaks:</label>
						<input
							type='number'
							id='shortBreak'
							value={data.shortBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='longBreak'>Length of long breaks:</label>
						<input
							type='number'
							id='longBreak'
							value={data.longBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<div className='task-parameter'>
						<label htmlFor='sessionsBreak'>
							Number of work sessions per long break:
						</label>
						<input
							type='number'
							id='sessionsBreak'
							value={data.sessionsBreak}
							onChange={handleChange}
							required
							min='0'
						/>
					</div>
					<button type='submit'>Save</button>
					{/* <button type='button'>Delete</button> */}
					{/* <button onclick={handleDeleteSubmit}>Click me</button> */}
				</form>
				{/* <button type='button'>Delete</button> */}
				<button type='button' onClick={handleDeleteSubmit}>Delete</button>
			</div>
		</div>
	);
}

export default EditForm;
