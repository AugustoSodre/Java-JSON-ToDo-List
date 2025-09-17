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
console.log("Global ID: " + global_id)


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

//Organizing the tasks into lists 
let todo_list  = []
let doing_list = []
let done_list  = []

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
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.class = 'delete_task'
        deleteBtn.onclick = function (){
            deleteTask(task.id)
        }

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)
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
        div.appendChild(priorityLabel)
        div.appendChild(categoryLabel)

        container.appendChild(div)  
    })
}

// Render function for all lists - Read (R) operation
function renderTasks(){
    // Rebuild lists from task_list
    organize_lists()

    //Create their HTML
    create_task_HTML(todo_list)

    create_task_HTML(doing_list)

    create_task_HTML(done_list)

}

//Updating tasks - Update (U) operation



//Deleting tasks - Delete (D) operation
function deleteTask(id){
    
    for(i = 0; i < task_list.length; i++){
        if(task_list[i].id == id){
            task_list.splice(i, 1);
        }
    }

    localStorage.setItem('task_list', JSON.stringify(task_list))
    
    window.location.reload()
}

// Initial render
renderTasks()

