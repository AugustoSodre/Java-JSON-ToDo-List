package org.model;

import java.util.Date;

public class Task {
    @Override
    public String toString() {
        return "====================\n" +
                "ID          : " + id + "\n" +
                "Task Name   : " + name + "\n" +
                "Description : " + description + "\n" +
                "Deadline    : " + new java.text.SimpleDateFormat("yyyy-MM-dd").format(deadline) + "\n" +
                "Priority    : " + priority + "\n" +
                "Category    : " + category + "\n" +
                "Status      : " + status + "\n" +
                "====================";
    }

    private int id;
    private String name;
    private String description;
    private Date deadline;
    private int priority;
    private String category;
    private String status;

    public Task() {};

    public Task(String name, String description, Date deadline, int priority, String category, String status) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.category = category;
        this.status = status;
    }

    public Task(int id, String name, String description, Date deadline, int priority, String category, String status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.category = category;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
