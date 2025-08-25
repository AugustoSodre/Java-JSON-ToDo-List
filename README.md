# Java Task Management System

A console-based task management application built in Java following the MVC (Model-View-Controller) architectural pattern. This project allows users to create, read, update, delete, and organize tasks with various attributes like priority, category, and status.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks
- **Task Organization**: Sort tasks by priority, category, or status
- **Status Tracking**: Track tasks with `TODO`, `DOING`, and `DONE` statuses
- **Priority System**: Set task priorities from 1-5
- **Date Management**: Set deadlines with date validation
- **Data Persistence**: Save and load tasks from JSON files
- **Summary View**: Quick overview of tasks by status

## 🏗️ Architecture

This project follows the **MVC Pattern**:

- **Model**: `Task`, `TaskList` - Data representation and business logic
- **View**: `MenuMain`, `MenuCreate`, etc. - User interface components
- **Controller**: `CreateController`, `ReadController`, `SaveController`, etc. - Handle user actions and logic

## 🛠️ Technologies Used

- **Java** - Core programming language
- **MVC Pattern** - Architectural design pattern
- **ArrayList** - Dynamic data storage
- **SimpleDateFormat** - Date parsing and formatting
- **BufferedReader/InputStreamReader** - Console input handling
- **JSON** - Data persistence (via SaveController)

## 📋 Prerequisites

- Java Development Kit (JDK) 8 or higher
- IDE (IntelliJ IDEA, Eclipse, VS Code) or command line tools

## 🚀 Getting Started

### Installation

1. Clone or download the project files
2. Ensure all Java files are in the correct package structure:
   ```
   org/
   └── main/
       ├── Main.java
       ├── model/
       │   ├── Task.java
       │   └── TaskList.java
       ├── controller/
       │   ├── CreateController.java
       │   ├── ReadController.java
       │   └── SaveController.java
       └── view/
           ├── MenuMain.java
           └── MenuCreate.java
   ```

### Compilation

#### Using Command Line:
```bash
javac -d out/production/JavaProject $(find . -name "*.java")
```

#### Using IDE:
Simply build/compile the project using your IDE's build tools.

### Execution

#### Using Command Line:
```bash
java -cp out/production/JavaProject org.main.Main
```

#### Using IDE:
Run the `Main.java` file directly from your IDE.

## 📖 Usage

### Main Menu Options

When you start the application, you'll see a menu with the following options:

1. **Create Task** - Add a new task to the system
2. **View Tasks** - Display and sort existing tasks
3. **Update Task** - Modify existing task details
4. **Delete Task** - Remove tasks from the system
5. **Exit** - Save data and close the application

### Creating a Task

When creating a new task, you'll be prompted to enter:

- **Name**: Task title
- **Description**: Detailed task description
- **Deadline**: Due date in `yyyy-MM-dd` format
- **Priority**: Number from 1 (lowest) to 5 (highest)
- **Category**: Task category for organization
- **Status**: Choose from `TODO`, `DOING`, or `DONE`

### Viewing Tasks

The application offers several viewing options:

- **All Tasks**: Display all tasks
- **Sort by Priority**: Tasks ordered by priority level
- **Sort by Category**: Group tasks by category
- **Sort by Status**: Group tasks by completion status
- **Summary View**: Quick overview showing task count by status

## 🔧 Code Structure

### Key Classes

- **`Task`**: Represents individual tasks with all attributes
- **`TaskList`**: Manages the collection of tasks and provides utility methods
- **`CreateController`**: Handles task creation logic and validation
- **`ReadController`**: Manages task display and sorting operations
- **`SaveController`**: Handles data persistence to/from JSON files
- **`Main`**: Application entry point, initializes data and starts the menu system

### Data Flow

1. Application starts and loads existing tasks from JSON file
2. User interacts through console menus
3. Controllers process user input and update the TaskList
4. Changes are automatically saved to JSON file on exit

## 🚧 Known Issues & Improvements

### Current Limitations

- **Thread Safety**: Static TaskList may cause issues in concurrent environments
- **Task Removal**: Potential `ConcurrentModificationException` in removal logic
- **Error Handling**: Limited exception handling for JSON operations

### Suggested Improvements

1. **Enhanced Error Handling**: Add try-catch blocks for file operations
2. **Input Validation**: More robust validation for user inputs
3. **Thread Safety**: Implement thread-safe collections if needed
4. **User Feedback**: Add success/failure messages for all operations
5. **Data Backup**: Implement backup mechanisms for task data

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ‍💻 Author

[ Augusto S. Lima ]

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/java-task-manager/issues) on GitHub.

---