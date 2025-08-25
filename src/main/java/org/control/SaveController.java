package org.control;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.model.Task;
import org.model.TaskList;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class SaveController {

    public static void saveData() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule()); // needed for LocalDate

        try {
            mapper.writeValue(new File("data.JSON"), TaskList.getTaskList());

        } catch (IOException e) {
            System.out.println("Error saving data");
            e.printStackTrace();
        }

        System.out.println("Saved data to file");

    }

    public static void retrieveData() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        List<Task> taskList = new ArrayList<>();
        File file = new File("data.JSON");

        if(file.exists() && file.length() > 0) {
            taskList = mapper.readValue(new File("data.JSON"), new TypeReference<List<Task>>() {});
        }


        TaskList.setTaskList(taskList);

    }

}
