package org.control;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MenuController {

    public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static int getUserInput(){
        try {
            return Integer.parseInt(br.readLine());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
