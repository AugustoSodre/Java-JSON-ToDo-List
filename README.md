# Task Management System

A comprehensive task management application with both console-based Java implementation and modern web frontend. This project demonstrates the evolution from a command-line interface to a responsive web application, showcasing full-stack development skills and different architectural approaches.

## Project Overview

This repository contains two implementations of the same task management concept:

1. **Java Console Application** - A robust backend system following MVC architecture
2. **Web Application** - A modern, responsive frontend with dynamic task management

Both implementations share core functionality but demonstrate different approaches to user interaction and data management.

## Features

### Core Functionality (Both Implementations)
- **CRUD Operations**: Create, Read, Update, and Delete tasks
- **Task Organization**: Sort and organize tasks by priority, category, and status
- **Status Tracking**: Track tasks with `TODO`, `DOING`, and `DONE` statuses
- **Priority System**: Set task priorities from 1 (lowest) to 5 (highest)
- **Date Management**: Set and track task deadlines
- **Data Persistence**: Save and load tasks (JSON for Java, localStorage for Web)
- **Category System**: Organize tasks by custom categories

### Web Application Exclusive Features
- **Batch Operations**: Select and update multiple tasks simultaneously
- **Real-time Updates**: Instant visual feedback for all operations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Dark theme with smooth animations and hover effects
- **Visual Priority Indicators**: Color-coded priority system

### Java Application Exclusive Features
- **Detailed Reporting**: Comprehensive task summaries and analytics
- **Robust Validation**: Extensive input validation and error handling
- **File-based Persistence**: JSON file storage with backup capabilities
- **Menu-driven Navigation**: Intuitive console-based user interface

## 🏗️ Architecture

### Java Implementation (MVC Pattern)
```
src/
└── org/main/
    ├── Main.java                 # Application entry point
    ├── model/
    │   ├── Task.java            # Task entity
    │   └── TaskList.java        # Task collection management
    ├── controller/
    │   ├── CreateController.java # Task creation logic
    │   ├── ReadController.java   # Task retrieval and display
    │   └── SaveController.java   # Data persistence
    └── view/
        ├── MenuMain.java        # Main menu interface
        └── MenuCreate.java      # Task creation interface
```

### Web Implementation (Frontend Architecture)
```
frontend/
├── content/
│   └── index.html              # Main application page
├── css/
│   └── style.css              # Modern styling and animations
└── js/
    ├── main.js                # Core application logic
    └── footer.js              # Footer functionality
```

## 🛠️ Technologies Used

### Java Implementation
- **Java 8+** - Core programming language
- **MVC Pattern** - Architectural design pattern
- **ArrayList** - Dynamic data storage
- **SimpleDateFormat** - Date parsing and formatting
- **BufferedReader/InputStreamReader** - Console input handling
- **JSON** - Data serialization and persistence

### Web Implementation
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with custom properties and animations
- **Vanilla JavaScript** - Core functionality and DOM manipulation
- **Local Storage API** - Client-side data persistence
- **CSS Grid & Flexbox** - Responsive layout system
- **Inter Font** - Modern typography

## 📋 Prerequisites

### Java Application
- Java Development Kit (JDK) 8 or higher
- IDE (IntelliJ IDEA, Eclipse, VS Code) or command line tools

### Web Application
- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+)
- Local development server (optional, for development)

## 🚀 Getting Started

### Java Application Setup

#### Installation
1. Clone or download the project files
2. Ensure all Java files are in the correct package structure
3. Verify Java installation: `java -version`

#### Compilation
```bash
# Using Command Line
javac -d out/production/JavaProject $(find . -name "*.java")

# Using IDE
# Simply build/compile the project using your IDE's build tools
```

#### Execution
```bash
# Using Command Line
java -cp out/production/JavaProject org.main.Main

# Using IDE
# Run the Main.java file directly from your IDE
```

### Web Application Setup

#### Installation
1. Clone or download the project files
2. Ensure the following file structure:
   ```
   frontend/
   ├── content/index.html
   ├── css/style.css
   └── js/main.js
   ```

#### Running the Application
```bash
# Option 1: Direct file opening
# Open html/index.html in your web browser

# Option 2: Local server (recommended)
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using Live Server (VS Code extension)
# Right-click on index.html and select "Open with Live Server"
```

## 📖 Usage Guide

### Java Console Application

#### Main Menu Options
1. **Create Task** - Add a new task with all properties
2. **View Tasks** - Display tasks with sorting options
3. **Update Task** - Modify existing task details
4. **Delete Task** - Remove tasks from the system
5. **Exit** - Save data and close application

#### Creating Tasks
When creating a task, provide:
- **Name**: Descriptive task title
- **Description**: Detailed task information
- **Deadline**: Due date in `yyyy-MM-dd` format
- **Priority**: Integer from 1 (lowest) to 5 (highest)
- **Category**: Custom category for organization
- **Status**: Initial status (`TODO`, `DOING`, `DONE`)

### Web Application

#### Interface Overview
The web application features a three-column Kanban board:
- **To-Do**: New and pending tasks
- **Doing**: Tasks currently in progress
- **Done**: Completed tasks

#### Task Management
- **Creating Tasks**: Use the form at the bottom of the page
- **Editing Tasks**: Click the "Edit" button on any task
- **Deleting Tasks**: Click the "Delete" button on any task
- **Batch Updates**: Select multiple tasks using checkboxes and update their status simultaneously

#### Advanced Features
- **Priority Sorting**: Tasks are automatically sorted by priority within each column
- **Visual Feedback**: Hover effects and smooth transitions enhance user experience
- **Responsive Design**: Adapts to different screen sizes automatically

## 🎨 Design Features

### Visual Design Philosophy
The web application embraces modern design principles:

- **Dark Theme**: Reduces eye strain and provides a premium feel
- **Glassmorphism**: Subtle transparency effects for depth
- **Micro-animations**: Smooth transitions and hover effects
- **Color Psychology**: Distinct colors for different task states
- **Typography**: Inter font for excellent readability

### Color Scheme
- **Background**: Deep space grays with subtle gradients
- **Cards**: Elevated surfaces with transparency
- **Accents**: 
  - Blue for To-Do tasks
  - Orange for Doing tasks  
  - Green for Done tasks
- **Interactive Elements**: Purple primary color for actions

## 🔧 Configuration & Customization

### Java Application
- **Data Storage**: Modify `SaveController.java` to change file location
- **Menu Options**: Extend menu classes to add new features
- **Validation Rules**: Update controllers for custom validation logic

### Web Application
- **Styling**: Modify CSS custom properties in `:root` for theme changes
- **Storage**: Currently uses localStorage; can be extended for server storage
- **UI Components**: Modular JavaScript functions for easy customization

## 🚧 Known Issues & Limitations

### Java Implementation
- **Thread Safety**: Static TaskList may cause issues in concurrent environments
- **Error Handling**: Limited exception handling for edge cases
- **User Interface**: Console-based interface limits user experience

### Web Implementation
- **Data Persistence**: Limited to browser localStorage (no server backup)
- **Browser Compatibility**: Requires modern browsers for full functionality
- **Offline Support**: No service worker implementation yet

## 🔮 Future Enhancements

### Planned Features
- **Backend Integration**: Connect web frontend to Java backend via REST API
- **User Authentication**: Multi-user support with login system
- **Cloud Storage**: Sync tasks across devices
- **Mobile App**: React Native or Flutter implementation
- **Collaboration**: Real-time task sharing and collaboration
- **Advanced Analytics**: Task completion metrics and productivity insights
- **Notification System**: Deadline reminders and alerts
- **Export/Import**: CSV, PDF, and other format support

### Technical Improvements
- **Progressive Web App**: Offline support and installability
- **Performance Optimization**: Lazy loading and virtual scrolling
- **Accessibility**: Enhanced screen reader support and keyboard navigation
- **Internationalization**: Multi-language support
- **Testing Suite**: Comprehensive unit and integration tests

## Contributing

We welcome contributions to both implementations! Here's how to get involved:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Make your changes** following the existing code style
4. **Add tests** for new functionality
5. **Commit your changes**: `git commit -m 'Add some AmazingFeature'`
6. **Push to the branch**: `git push origin feature/AmazingFeature`
7. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code formatting and naming conventions
- Write clear, descriptive commit messages
- Update documentation for any new features
- Test your changes thoroughly before submitting

## 📊 Project Statistics

- **Total Lines of Code**: ~1,500+ (Java: ~800, Web: ~700)
- **Development Time**: 2-3 weeks
- **Features Implemented**: 15+ core features
- **Browser Support**: 95%+ modern browser coverage
- **Responsive Breakpoints**: 3 (Mobile, Tablet, Desktop)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Augusto S. Lima**

- GitHub: [@AugustoSodre](https://github.com/AugustoSodre)   
- LinkedIn: [Augusto S. Lima](https://www.linkedin.com/in/augusto-s-lima-8167352a6/)

## Acknowledgments

- **Design Inspiration**: Trello
- **Font**: Inter by Rasmus Andersson

---

*This project demonstrates full-stack development capabilities, from backend architecture to modern frontend design. It serves as both a functional application and a showcase of programming skills across multiple technologies.*
