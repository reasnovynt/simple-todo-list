const newTask = document.querySelector('#newTask input')

document.querySelector('#push').addEventListener('click', addTask);
newTask.addEventListener('keyup', function(e) {
	if (e.code == 'Enter') addTask();
});


function addTask() {
	if(newTask.value.length == 0){
		alert("Kindly Enter Task Name!!!!")
	}

	else{
			document.querySelector('#tasks').innerHTML += `
					<div class="task">
							<span id="taskname">
									${ newTask.value }
							</span>
							<button class="delete">
									<i class="far fa-trash-alt"></i>
							</button>
					</div>
			`;

			newTask.value = ""

			var current_tasks = document.querySelectorAll(".delete");
			for(var i=0; i<current_tasks.length; i++) {
					current_tasks[i].onclick = function() {
							this.parentNode.remove();
					}
			}
	}   
}