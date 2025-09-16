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


//Handling the Create Task form
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

    const new_task = new Task(name, description, deadline,
         priority, category, task_status)

    task_list.push(new_task)
    
    localStorage.setItem("task_list" , JSON.stringify(task_list))
})


