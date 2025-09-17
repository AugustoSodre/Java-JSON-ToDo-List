//Defining Task Class
class Task{
    constructor(name, description, deadline, priority, category, task_status) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.category = category;
        this.task_status = task_status;
    }

    id = ""
}

//Defining Task List and its methods to save and retrieve items
let task_list = []

if(!localStorage.getItem("task_list")){
    localStorage.setItem("task_list" , JSON.stringify([]))
}

task_list = JSON.parse(localStorage.getItem("task_list"))

console.log(task_list)


//Handling the Create Task form - Create (C) operation
document.getElementById("new_task_form").addEventListener("submit", function (){

    function getCurrentPriority(){
        let array_options = document.getElementById("form_new_priority").options
        for(i = 0; i < array_options.length; i++){
            if(array_options[i].selected){
                return array_options[i].value
            }
        }
    }

    function getCurrentStatus(){
        let array_options = document.getElementById("form_new_status").options
        for(i = 0; i < array_options.length; i++){
            if(array_options[i].selected){
                return array_options[i].value
            }
        }
    }

    //let id          = task_list.length ? 0 : task_list[ (task_list.length - 1) ].id + 1
    let name        = document.getElementById("form_new_name").value;
    let description = document.getElementById("form_new_description").value;
    let deadline    = document.getElementById("form_new_date").value;
    let priority    = getCurrentPriority()
    let category    = document.getElementById("form_new_name").value;
    let task_status = getCurrentStatus()

    //Creating a new task assigning respective items to the constructor
    const new_task = new Task(name, description, 
        deadline, priority, category, task_status)


    //Pushing the new created task to the task list
    task_list.push(new_task)
    
    //Saving the new item in the localstorage
    localStorage.setItem("task_list" , JSON.stringify(task_list))
    // Reset form and re-render lists
    document.getElementById("new_task_form").reset()
    renderTasks()
})

//Organizing the tasks into lists 
let todo_list  = []
let doing_list = []
let done_list  = []

function organize_lists(){
    for(i = 0; i < task_list.length; i++){
    task_list[i].id = i //A task's id equals its position in the global array

    switch(task_list[i].task_status){
        case "TODO":
            todo_list.push(task_list[i])
            break
            
        case "DOING":
            doing_list.push(task_list[i])
            break

        case "DONE":
            done_list.push(task_list[i])
            break

        default:
            console.log("Invalid task" + task_list[i])
            break
    }
}
}

console.log(todo_list)
console.log(doing_list)
console.log(done_list)

function create_task_HTML(list_to_add){

    let container

    switch (list_to_add[0].task_status){
        case "TODO":
            container = document.getElementById('todo_list')
            break
        case "DOING":
            container = document.getElementById('doing_list')
            break
        case "DONE":
            container = document.getElementById('done_list')
            break
        default:
            break
    }

    list_to_add.forEach(task => {
        const div = document.createElement('div')
        div.className = 'task'
        div.id = 'task_' + task.id

        const header = document.createElement('div')
        header.className = 'header_task'

        const btnGroup = document.createElement('div')
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.dataset.action = 'edit'
        editBtn.dataset.id = task.id
        editBtn.className = 'list_head_btn'
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.dataset.action = 'delete'
        deleteBtn.dataset.id = task.id
        deleteBtn.className = 'list_head_btn'

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)
        header.appendChild(btnGroup)

        const nameLabel = document.createElement('label')
        nameLabel.htmlFor = "name"
        nameLabel.textContent = "Name: " + task.name

        const descLabel = document.createElement('label')
        descLabel.htmlFor = "description"
        descLabel.textContent = "Description: " + task.description

        const priorityLabel = document.createElement('label')
        priorityLabel.htmlFor = "priority"
        priorityLabel.textContent = "Priority: " + task.priority

        const categoryLabel = document.createElement('label')
        categoryLabel.htmlFor = "category"
        categoryLabel.textContent = "Category: " + task.category

        div.appendChild(header)
        div.appendChild(nameLabel)
        div.appendChild(descLabel)
        div.appendChild(priorityLabel)
        div.appendChild(categoryLabel)

        container.appendChild(div)  
    })
}

// Render function for all lists - Read (R) operation
function renderTasks(){
    // Rebuild lists from task_list
    organize_lists()

    create_task_HTML(todo_list)

    create_task_HTML(doing_list)

    create_task_HTML(done_list)

}

// Initial render
renderTasks()

// // Event delegation for edit/delete buttons inside the list containers
// ['todo_list', 'doing_list', 'done_list'].forEach(containerId => {
//     const container = document.getElementById(containerId)
//     if(!container) return
//     container.addEventListener('click', function(e){
//         const btn = e.target
//         if(!btn || !btn.dataset) return
//         const action = btn.dataset.action
//         const id = Number(btn.dataset.id)
//         if(!action || Number.isNaN(id)) return
//         if(action === 'delete') deleteTask(id)
//         if(action === 'edit') editTask(id)
//     })
// })




function deleteTask(id){
    task_list.splice(id, 1)
    localStorage.setItem('task_list', JSON.stringify(task_list))
    renderTasks()
}

function editTask(id){
    // Simple inline edit: prompt for new name and description
    const t = task_list[id]
    const newName = prompt('Edit task name:', t.name)
    if(newName === null) return // cancelled
    const newDesc = prompt('Edit task description:', t.description)
    if(newDesc === null) return
    t.name = newName
    t.description = newDesc
    localStorage.setItem('task_list', JSON.stringify(task_list))
    renderTasks()
}

//Updating tasks - Update (U) operation

//Deleting tasks - Delete (D) operation
//pegar o parentNode ? - Pesquisar sobre