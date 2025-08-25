package org.model;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class TaskList {

    private static int id = 0;
    private static List<Task> taskList = new ArrayList<Task>();

    public static void removeTask(int id) {
        for (Task task : taskList) {
            if (task.getId() == id) {
                taskList.remove(task);
            }
        }
    }

    public static List<Task> getTaskList() {
        return taskList;
    }

    public static void setTaskList(List<Task> taskList) {
        TaskList.taskList = taskList;
        taskList.sort(Comparator.comparing(Task::getPriority).reversed());

        if(taskList.size() > 0){
            List<Task> tempListForId = taskList;
            tempListForId.sort(Comparator.comparing(Task::getId));
            TaskList.setId(tempListForId.getLast().getId());
        } else{
            setId(0);
        }

    }

    public static void addTask(Task task){
        taskList.add(task);
        taskList.sort(Comparator.comparing(Task::getPriority).reversed());
        System.out.println("Task added successfully!");
    }

    public static int getId() {
        return id;
    }

    public static void setId(int id) {
        TaskList.id = id;
    }
}
