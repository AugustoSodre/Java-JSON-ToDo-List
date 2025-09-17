package org.control;

import org.model.Task;
import org.model.TaskList;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.stream.Stream;

public class ReadController {

    static BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

    public static int askFilter() {

        int option = -1;
        while (option < 0 || option > 4) {
            System.out.println("Order by:");
            System.out.println("0. ID");
            System.out.println("1. Priority");
            System.out.println("2. Category");
            System.out.println("3. Status");
            System.out.println("4. Deadline");
            System.out.println();
            System.out.print("Enter option: ");

            try {
                option = Integer.parseInt(reader.readLine());
            } catch (Exception e) {
                System.out.println("Invalid option");
            }


        }
        return option;
    }

    public static void read(int option) {
        Stream<Task> taskStream = TaskList.getTaskList().stream();

        switch (option) {
            case 0:
                //ID Sorting
                taskStream.sorted(
                        Comparator.comparing(Task::getId)
                ).forEach(System.out::println);
                break;
            case 1:
                //Priority (Regular) Sorting
                taskStream.sorted(
                        Comparator.comparing(Task::getPriority).reversed())
                        .forEach(System.out::println);
                break;

            case 2:
                //Category Sorting
                taskStream.sorted(
                        Comparator.comparing(Task::getCategory).reversed())
                        .forEach(System.out::println);
                break;

            case 3:
                //Status Sorting
                taskStream.sorted(
                        Comparator.comparing(Task::getStatus).reversed())
                        .forEach(System.out::println);
                break;

            case 4:
                //Deadline Sorting
                taskStream.sorted(
                        Comparator.comparing(Task::getDeadline).reversed())
                        .forEach(System.out::println);
        }
        System.out.println();

        int todoTasks = 0;
        int doneTasks = 0;
        int doingTasks = 0;

        for(Task t : TaskList.getTaskList()) {
            if(t.getStatus().equals("DONE")) {
                doneTasks += 1;
            } else if (t.getStatus().equals("TODO")){
                todoTasks += 1;
            } else{
                doingTasks += 1;
            }
        }

        System.out.println();
        System.out.println("TODO tasks: " + todoTasks);
        System.out.println("DOING tasks: " + doingTasks);
        System.out.println("DONE tasks: " + doneTasks);

    }

    public static void start() {
        read(askFilter());
    }
}
