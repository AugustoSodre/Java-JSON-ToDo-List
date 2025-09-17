//Defining Global ID
let global_id = 0

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

//Setting up the global_id
for(i = 0; i < task_list.length; i++){
    biggest_id = task_list[i].id

    if(biggest_id >= global_id){
        global_id = (biggest_id) + 1
    }
}

console.log(task_list)

//Helpers for handling the forms
function getCurrentPriority(form_priority_id){
        let array_options = document.getElementById(form_priority_id).options
        for(i = 0; i < array_options.length; i++){
            if(array_options[i].selected){
                return array_options[i].value
            }
        }
    }

function getCurrentStatus(form_status_id){
        let array_options = document.getElementById(form_status_id).options
        for(i = 0; i < array_options.length; i++){
            if(array_options[i].selected){
                return array_options[i].value
            }
        }
    }

//-- Handling the Create Task form - Create (C) operation
document.getElementById("new_task_form").addEventListener("submit", function (){

    let name        = document.getElementById("form_new_name").value;
    let description = document.getElementById("form_new_description").value;
    let deadline    = document.getElementById("form_new_date").value;
    let priority    = getCurrentPriority("form_new_priority")
    let category    = document.getElementById("form_new_category").value;
    let task_status = getCurrentStatus("form_new_status")

    //Creating a new task assigning respective items to the constructor
    const new_task = new Task(name, description, 
        deadline, priority, category, task_status)
    
    //Setting its ID
    new_task.id = global_id
    global_id += 1

    //Pushing the new created task to the task list
    task_list.push(new_task)
    
    //Saving the new item in the localstorage
    localStorage.setItem("task_list" , JSON.stringify(task_list))
    
    // Reset form and re-render lists
    document.getElementById("new_task_form").reset()
    renderTasks()
})


//Helpers for Read (R) operation
let todo_list  = []
let doing_list = []
let done_list  = []

let selected_tasks = []

function organize_lists(){

    todo_list  = []
    doing_list = []
    done_list  = []

    for(i = 0; i < task_list.length; i++){
        
        try{
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
        } catch (exception){
            console.log(exception)
        }
    }

    todo_list.sort((a, b) => b.priority - a.priority)
    doing_list.sort((a, b) => b.priority - a.priority)
    done_list.sort((a, b) => b.priority - a.priority)
    
}

function create_task_HTML(list_to_add){

    let container
    try{
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
    } catch (exception) {
        console.log(exception)
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
        editBtn.class = 'edit_task'
        editBtn.onclick = function (){
            updateTask(task.id)
        }
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.class = 'delete_task'
        deleteBtn.onclick = function (){
            deleteTask(task.id)
        }

        const selectedBtn = document.createElement('input')
        selectedBtn.type = "checkbox"
        selectedBtn.addEventListener("change", function (){
            if(selectedBtn.checked){
                selected_tasks.push(task)
                
                document.getElementById("show_update_selected_container").style["display"] = "flex"

            } else{
                let task_index
                for(let i = 0; i < selected_tasks.length; i++){
                    if(selected_tasks[i].id == task.id){
                        task_index = i
                    }
                }
                selected_tasks.splice(task_index, 1)

                if(selected_tasks.length == 0){
                    document.getElementById("show_update_selected_container").style["display"] = "none"
                }
            }

            console.log(selected_tasks)
        })

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)
        btnGroup.appendChild(selectedBtn)
        header.appendChild(btnGroup)

        const nameLabel = document.createElement('label')
        nameLabel.htmlFor = "name"
        nameLabel.textContent = "Name: " + task.name

        const descLabel = document.createElement('label')
        descLabel.htmlFor = "description"
        descLabel.textContent = "Description: " + task.description

        const dateLabel = document.createElement('label')
        dateLabel.htmlFor = "deadline"
        dateLabel.textContent = "Deadline: " + task.deadline

        const priorityLabel = document.createElement('label')
        priorityLabel.htmlFor = "priority"
        priorityLabel.textContent = "Priority: " + task.priority

        const categoryLabel = document.createElement('label')
        categoryLabel.htmlFor = "category"
        categoryLabel.textContent = "Category: " + task.category

        div.appendChild(header)
        div.appendChild(nameLabel)
        div.appendChild(descLabel)
        div.appendChild(dateLabel)
        div.appendChild(priorityLabel)
        div.appendChild(categoryLabel)

        container.appendChild(div)  
    })
}

//--- Render function for all lists - Read (R) operation
function renderTasks(){
    // Rebuild lists from task_list
    organize_lists()

    //Create their HTML
    create_task_HTML(todo_list)

    create_task_HTML(doing_list)

    create_task_HTML(done_list)

}


//--- Updating tasks - Update (U) operation
let updating_task_id

function updateTask(id){
    let create_container = document.getElementById("new_task_container")
    let update_container = document.getElementById("update_task_container")

    create_container.style["display"] = "none"
    update_container.style["display"] = "flex"

    let current_task
    task_list.forEach(element => {
        if (element.id == id){
            current_task = element
        }
    })

    document.getElementById("form_update_name").value        = current_task.name
    document.getElementById("form_update_description").value = current_task.description
    document.getElementById("form_update_date").value        = current_task.deadline
    document.getElementById("form_update_priority").value    = current_task.priority
    document.getElementById("form_update_category").value    = current_task.category
    document.getElementById("form_update_status").value      = current_task.task_status

    updating_task_id = current_task.id
    
}

//Handling the Update Form
document.getElementById("update_task").onclick = function (){
    
    let name        = document.getElementById("form_update_name").value;
    let description = document.getElementById("form_update_description").value;
    let deadline    = document.getElementById("form_update_date").value;
    let priority    = getCurrentPriority("form_update_priority")
    let category    = document.getElementById("form_update_category").value;
    let task_status = getCurrentStatus("form_update_status")

    //Creating a new task assigning respective items to the constructor
    const new_task = new Task(name, description, 
        deadline, priority, category, task_status)
    
    //Setting its ID
    new_task.id = updating_task_id

    //Applying the update
    for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].id == new_task.id) {
            task_list[i] = new_task
            break
        }
    }
    
    //Saving the new item in the localstorage
    localStorage.setItem("task_list" , JSON.stringify(task_list))
    
    // Reset form and re-render lists
    document.getElementById("update_task_form").reset()
    window.location.reload()
}


//--- Deleting tasks - Delete (D) operation
function deleteTask(id){
    
    for(i = 0; i < task_list.length; i++){
        if(task_list[i].id == id){
            task_list.splice(i, 1);
        }
    }

    localStorage.setItem('task_list', JSON.stringify(task_list))
    
    window.location.reload()
}


//Handling the multiple changing btn
document.getElementById("btn_update_selected").onclick = function() {

    let new_task_status = document.getElementById("form_update_selected").value

    selected_tasks.forEach((element) => {
        for (i = 0; i < task_list.length; i++){
            if(task_list[i].id == element.id){
                task_list[i].task_status = new_task_status
            }
        }
    });

    localStorage.setItem('task_list', JSON.stringify(task_list))    

    window.location.reload()
}

// Initial render
renderTasks()