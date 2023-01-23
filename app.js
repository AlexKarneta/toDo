const $addTask=document.getElementById("add-task");
const $taskContainer=document.getElementById("task-container");
const $inputTask=document.getElementById("input-task");

$addTask.addEventListener("click", ()=>{

	let task=document.createElement("div");
	task.setAttribute("class", "task");

	let li =document.createElement("li");
	li.innerText=`${$inputTask.value}`;

	task.append(li);

	let checkButton=document.createElement("button");
	checkButton.setAttribute("class","checkTask");
	checkButton.innerHTML=`<i class="fa fa-solid fa-check"></i>`;
	task.append(checkButton);

	let deleteButton=document.createElement("button");
	deleteButton.setAttribute("class","deleteTask");
	deleteButton.innerHTML=`<i class="fa fa-solid fa-trash"></i>`;
	task.append(deleteButton);

	$inputTask.value?$taskContainer.append(task):alert("input data");
	$inputTask.value="";

	

	checkButton.addEventListener("click", (e)=>{
		
		e.target.parentElement.classList.toggle("smth");
		console.log(e.target.parentElement);
	})

	deleteButton.addEventListener("click",(e)=>{
		let target=e.target;
		target.parentElement.parentElement.remove();
	})

})
