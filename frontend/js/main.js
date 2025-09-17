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
}

//Defining Task List and its methods to save and retrieve items
let task_list = []

if(!localStorage.getItem("task_list")){
    localStorage.setItem("task_list" , JSON.stringify([]))
}

task_list = JSON.parse(localStorage.getItem("task_list"))

console.log(document.getElementById("form_new_priority").options)


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

    let name        = document.getElementById("form_new_name").value;
    let description = document.getElementById("form_new_description").value;
    let deadline    = document.getElementById("form_new_date").value;
    let priority    = getCurrentPriority()
    let category    = document.getElementById("form_new_name").value;
    let task_status = getCurrentStatus()

    //Creating a new task assigning respective items to the constructor
    const new_task = new Task(name, description, deadline,
         priority, category, task_status)


    //Pushing the new created task to the task list
    task_list.push(new_task)
    
    //Saving the new item in the localstorage
    localStorage.setItem("task_list" , JSON.stringify(task_list))
})

//Organizing the tasks into lists - Read (R) operation
let todo_list = []
let doing_list = []
let done_list = []
for(i = 0; i < task_list.length; i++){
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

console.log(todo_list)
console.log(doing_list)
console.log(done_list)

//Listing TODO tasks
let todo_HTML = ""




// document.getElementById("todo_list").innerHTML = todo_HTML

//Listing DOING tasks

//Listing DONE tasks

//Updating tasks - Update (U) operation

//Deleting tasks - Delete (D) operation