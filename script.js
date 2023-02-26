let taskList = [];

function addTask() {
	let taskInput = document.getElementById("task").value;
	let dateInput = document.getElementById("date").value;
	let timeInput = document.getElementById("time").value;

	let task = {
		task: taskInput,
		date: dateInput,
		time: timeInput
	};

	taskList.push(task);

	displayTasks();
}

function displayTasks() {
	let taskListDiv = document.getElementById("task-list");
	taskListDiv.innerHTML = "";

	taskList.forEach(task => {
		let taskDiv = document.createElement("div");
		taskDiv.classList.add("task");

		let taskInfoDiv = document.createElement("div");
		taskInfoDiv.classList.add("task-info");

		let taskTitle = document.createElement("h3");
		taskTitle.innerText = task.task;
		taskInfoDiv.appendChild(taskTitle);

		let taskDateTime = document.createElement("p");
		taskDateTime.innerText = `${task.date} at ${task.time}`;
		taskInfoDiv.appendChild(taskDateTime);

		let deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button");
		deleteButton.innerText = "Delete";
		deleteButton.addEventListener("click", function() {
			deleteTask(task);
		});
		taskInfoDiv.appendChild(deleteButton);

		taskDiv.appendChild(taskInfoDiv);

		taskListDiv.appendChild(taskDiv);
	});
}

function deleteTask(task) {
	let index = taskList.indexOf(task);
	if (index !== -1) {
		taskList.splice(index, 1);
	}
	displayTasks();
}
