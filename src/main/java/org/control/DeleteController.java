package org.control;

import org.model.TaskList;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DeleteController {
    public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void delete(int id){
        try {
            TaskList.removeTask(id);
            System.out.println("Task removed!");
        } catch (IndexOutOfBoundsException e) {
            System.out.println("Not able to remove task");
        }

    }

    public static int getUserInput(){
        try {
            System.out.println("Please enter the id of the task you would like to delete: ");
            return Integer.parseInt(br.readLine());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void start() {
        delete(getUserInput());
    }
}
