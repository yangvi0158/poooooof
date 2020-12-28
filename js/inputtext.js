

//宣告三種物件
var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList"); 

function viviclick(){
if(event.keyCode=="13"){
document.getElementById("add").click();
}
}

addButton.addEventListener("click", function(){
  	var task = taskInput.value; 
	
		if(task.trim()){			
			var w=600,h=600;
			
			var wit = $(window).width();
			if(wit<550){
				var w=200;
			} 
			
			x=Math.round(Math.random()*(w));
			y=Math.round(Math.random()*(h));
			a=Math.round(Math.random()*(w));
			b=Math.round(Math.random()*(h));
			var newItem = document.createElement("LI");
			var newItem2 = document.createElement("LI");
			var taskText = document.createTextNode(task);
			var taskText2 = document.createTextNode(task);	
			newItem.appendChild (taskText);
			newItem2.appendChild (taskText2);
			
			taskList.appendChild(newItem);
			setTimeout(function() {
				taskList.appendChild(newItem2);	
			}, 500);
				
			
			taskInput.value = "";	
			newItem.style.left=x+'px';
			newItem.style.top=y+'px';
			newItem2.style.left=a+'px';
			newItem2.style.top=b+'px';
			

			setTimeout(function() {
  				taskList.removeChild(newItem);
				taskList.removeChild(newItem2);
			}, 13000);
			}
	
});