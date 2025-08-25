package org.main;

import org.control.SaveController;
import org.view.MenuMain;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        //Get the old list from the JSON file
        SaveController.retrieveData();

        //Start the main application
        MenuMain.start();

        //Save the new list to the JSON file
        SaveController.saveData();

    }
}