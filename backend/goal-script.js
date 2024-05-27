



const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// i just go these using classes lollll i kept getting them using id
// i should've just used getElementbyID tbh


document.addEventListener("DOMContentLoaded", getLocalTodos);
//same with the notes approach, when the html loads in general
// i fetch the to dos IF THEY EXIST

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// more event listener. The first is basically to add the TO do and
// the second one is FUN because we javent' even create the check and the trash button
// but yeah every to do list has two buttons and basicallly
// i just check which one and change teh states using CSS and js :3


function addTodo(event) {
    event.preventDefault();
    //prevent the form from submitting to a backend handler like php or stuff
    // iwant to handle it by myself using LOCAL Storageeeeer

    //reg - fixed this one with an if statement that if there is no input it shall raise an error warning and will not infinitely add to the to do list.
    if (todoInput.value.length == 0) {
    const toastContent = document.getElementById("empty-goal");
    const toast = new bootstrap.Toast(toastContent);
    toast.show();
    return;
    }
    // we just create stuff here to make the to do list igg??
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADDING TO LOCAL STORAGE 
    saveLocalTodos(todoInput.value);
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

//method that runs everytime makaclick ka sa sulod sa list diba kay duwa
// ka buttons per listttttttt
// I think the official name of these are HTML DOMTokenList instance methods

function deleteCheck(e) {
    const item = e.target;
    //specifies what item is targeted by the event

    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // honestly just deals with the parent element of that item
        // then plays the animation and permanently removes the item.
        // basically adds the class slide if clicked
        // the CSS handles the animations to the slide class
        todo.classList.add("slide");

        removeLocalTodos(todo);
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn") {
        //same here accessing the parent elemetn and toggling an animation
        // or change in style when it's clicked
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


// this is just a function to retain the data and save them later
// shows up as an array of js objects when viewed from the inspect (application)
// we parse the to dos then stringify to JSON strings so we can save the values
// at the start we parsed JSON strings, just so efficient to save date using JSON
// i thinhk it's the same thing for file handling for python
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// this is the function that runs everytime you open the page
// just get the todos from the local storage to be honest
// but if no content just returns an empty array and does nothing
function getLocalTodos() {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        // forEach is basically that one 'for loop'
        // for each instance of a todo object you create an element
    
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></li>';
        trashButton.classList.add("trash-btn");
        // here we just ass the child of the parent the todolist container is the parent
        //the trash-btn is the child same wit the complete btn above
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        // it's funny cuz the todo list is the PARENT of the todoDiv which the parent
        //of both the trash and complete button
        // aegh i was reading the html DOM documentation I think it's because
        //they have a tree like relationship.
    });
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
//this was so cryptic to work with because nasanay na ko sa python na splice na lol
// basically get the index of the selected (from it's children)
// the splce takes the index and only removes one item from that index(the unwanted)
// denoted by the second parameter 1 
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
