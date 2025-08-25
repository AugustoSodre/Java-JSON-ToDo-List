package org.view;

import org.control.MenuController;

public class MenuMain {

    public static void start() {

        //Main loop of the whole Application
        int option = -1;
        while (option != 0) {
            printMainMenu();

            option = chooseOptionMenu();
        }
    }

    public static void printMainMenu() {
        System.out.println();
        System.out.println("-----------------------------");

        System.out.println("Main Menu");
        System.out.println();
        System.out.println("Choose an option:");
        System.out.println("1. Add Task");
        System.out.println("2. Show Tasks");
        System.out.println("3. Delete Task");
        System.out.println("0. Exit");

        System.out.println("-----------------------------");
        System.out.println();

        System.out.print("Option: ");
    }

    public static void cleanScreen() {
        for (int i = 0; i < 50; i++) {
            System.out.println();
        }
    }

    public static int chooseOptionMenu(){
        //Controller instance

        //Matching the chosen option
        switch (MenuController.getUserInput()) {
            case 0:
                return 0;

            case 1:
                cleanScreen();
                MenuCreate.start();
                return 1;

            case 2:
                cleanScreen();
                MenuRead.start();
                return 2;

            case 3:
                cleanScreen();
                MenuDelete.start();
                return 3;

            default:
                System.out.println("Invalid input");
                cleanScreen();
                return -1;
        }
    }

}