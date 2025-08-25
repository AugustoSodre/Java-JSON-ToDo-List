package org.control;

import org.model.Task;
import org.model.TaskList;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CreateController {

    public static Task createTask() {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        Task task = null;

        try {
            System.out.println("Enter Task Name:");
            String name = reader.readLine();

            System.out.println("Enter Description:");
            String description = reader.readLine();
            
            Date deadline = null;
            while(deadline == null){
                try {
                    System.out.println("Enter Deadline (yyyy-MM-dd):");
                    String deadlineStr = reader.readLine();
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
                    sdf.setLenient(false); // makes it strict, work like a real calendar
                    deadline = sdf.parse(deadlineStr);

                    System.out.println("Parsed date: " + deadline);
                } catch (ParseException e) {
                    System.out.println("Invalid date format. Please use yyyy-MM-dd.");
                }
            }

            System.out.println("Enter Priority (1 to 5):");
            int priority = 0;
            while(priority > 5 || priority < 1) {
                try{
                    priority = Integer.parseInt(reader.readLine());

                    if (priority < 1 || priority > 5) {
                        System.out.println("Invalid priority. Please use 1 to 5.");
                    }

                } catch (NumberFormatException e) {
                    System.out.println("Invalid priority. Please use 1 to 5.");
                }

            }

            System.out.println("Enter Category:");
            String category = reader.readLine();

            System.out.println("Enter Status (TODO, DOING, DONE):");
            String status = reader.readLine().toUpperCase();
            while (!status.equals("TODO") && !status.equals("DOING") && !status.equals("DONE")) {
                System.out.println("Invalid status. Enter TODO, DOING, or DONE:");
                status = reader.readLine().toUpperCase();
            }

            // Create Task object
            int id = TaskList.getId();
            TaskList.setId(id + 1);
            task = new Task(id, name, description, deadline, priority, category, status);

            //System.out.println("Task created successfully!");

        } catch (IOException e) {
            System.out.println("An error occurred while reading input: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Invalid input: " + e.getMessage());
        }

        return task;
    }

    public static void start(){
        Task task = createTask();

        TaskList.addTask(task);
    }
}

