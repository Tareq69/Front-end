// Defining ui elements
let form = document.querySelector('#task_form')
let tasklist = document.querySelector('ul')
let clearbtn = document.querySelector('#clear_task')
let taskInput = document.querySelector('#new_task')
let filter = document.querySelector('#filter_task')
let searchbar = document.querySelector('#inpcontainer')
let list = document.querySelector('#inpcontainer ul')


// Defining Event listeners

form.addEventListener('submit', addTask);
task.addEventListener('click', removeTask);
clearbtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTask);
//Defining the funtions
function addTask(e) {

    if (taskInput.value === '') {
            alert("Add a task!")
    }
    
    else {
        // creating li element
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a')
        link.setAttribute ('href', '#')
        link.innerHTML = 'x';
        li.appendChild(link)
        tasklist.appendChild(li);

        storeTaskInStorage(taskInput.value);

        taskInput.value = " "
    }
    e.preventDefault();
}


function removeTask(e) {
    if (e.target.hasAttribute('href')) {
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement;
            ele.remove()
            }
    }
}

function clearTasks(e) {
    task.innerHTML = ""

    // while (tasklist.firstChild) {
    //     tasklist.removeChild(tasklist.firstChild)
    // }

}


// function filterTask(e) {
//     let text = e.target.value.toLowerCase();
//     let books = list.querySelectorAll('li')
    
//     Array.from(books).forEach(function(item){
//         let t = item.firstElementChild.textContent;
//         if (t.toLowerCase().indexOf(text) != -1){
//             books.style.display = 'block';
//         }
//         else {
//             books.style.display = 'none'; 
//         }
//     })
// }

// Local storage

function storeTaskInStorage(task) {
    let tasks;
    
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task);

    localStorage.setItem('tasks'.JSON.stringify(tasks));
}

function getTasks(task) {
    
    let tasks;
    
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
   
    tasks.forEach(task=>{
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a')
        link.setAttribute ('href', '#')
        link.innerHTML = 'x';
        li.appendChild(link)
        tasklist.appendChild(li);    
    })

    e.preventDefault();
}
