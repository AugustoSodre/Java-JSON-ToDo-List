package org.control;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class MenuController {

    public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static int getUserInput(){
        while (true) {
            try {
                return Integer.parseInt(br.readLine());
            } catch (Exception e) {
                System.out.println("Invalid input");
                System.out.print("Option: ");
            }
        }

    }

}
