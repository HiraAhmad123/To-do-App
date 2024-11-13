


const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function addTask() {
    var taskText = todoInput.value.trim();

    if (taskText !== '') {
   var todoItem = document.createElement('li');
   todoItem.classList.add('todo-item');

 
   var textNode = document.createTextNode(taskText);
   todoItem.appendChild(textNode);


   var editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
    editTask(todoItem, taskText);
    };
   todoItem.appendChild(editBtn);

   var  deleteBtn = document.createElement('button');
   deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
    todoItem.remove();
    };
    todoItem.appendChild(deleteBtn);


    todoList.appendChild(todoItem);

  
  todoInput.value = '';
}
}

function editTask(todoItem, currentText) { 
   
   var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = currentText;
    todoItem.innerHTML = ''; 
    todoItem.appendChild(inputField);

   
    var saveBtn = document.createElement('button');
    saveBtn.classList.add('edit-btn');
    saveBtn.textContent = 'Save';
    saveBtn.onclick = function() {
   var updatedText = inputField.value.trim();
   if (updatedText !== '') {
   todoItem.innerHTML = updatedText; 
   todoItem.appendChild(saveBtn);
   todoItem.appendChild(deleteBtn);
    } else {
   todoItem.innerHTML = currentText; 
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    }
    };

    
    var cancelBtn = document.createElement('button');
    cancelBtn.classList.add('edit-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.onclick = function() {
    todoItem.innerHTML = currentText; 
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    };

    todoItem.appendChild(saveBtn);
    todoItem.appendChild(cancelBtn);
}


addBtn.addEventListener('click', addTask);


todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    addTask();
    }
});
