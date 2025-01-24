To-Do App with Authentication and Task Management

Welcome to the To-Do App! This is a modern React application designed to help you efficiently manage tasks, set priorities, and organize your daily activities. The app features user authentication to secure access, a persistent task list using localStorage, and a responsive layout to ensure a smooth user experience on any device.

Key Features:

1. Task Management:
- Add Tasks: Easily add tasks by typing into the input field and pressing the "Add Task" button or hitting Enter.
- Delete Tasks: Each task has a delete button to remove it from the list.
- Prioritize Tasks: Set priority levels (High, Medium, Low) to categorize tasks for better organization.

2. User Authentication:
- Login/Logout: Secure the app with a simple login and logout functionality.
- Task Protection: The task list is accessible only after successful authentication.

3. Persistent Data:
- Data Persistence: Tasks and user login status are saved to localStorage to maintain them across sessions.

4. Responsive Design:
- The app is built with CSS Flexbox and Grid to ensure a responsive, mobile-first design. Whether you are using a desktop, tablet, or smartphone, the user interface adapts seamlessly.

5. Redux for State Management:
- Tasks and user authentication are managed using Redux. For asynchronous actions (like login and API calls), the app leverages Redux Thunk.

Technologies Used:

- React for building the user interface and components.
- Redux for global state management (tasks and authentication).
- CSS (Flexbox, Grid) for a responsive and adaptive design.
- localStorage for data persistence between sessions.
- Redux Thunk for handling asynchronous actions (e.g., login simulation).

Setup Instructions:

1. Clone the Repository:
git clone (link unavailable)
cd todo-app

2. Install Dependencies:
npm install

3. Run the Development Server:
npm start

4. Access the Application:
Open http://localhost:3000 in your browser to start using the app.

Valid Credentials:

To log in and access the application, use the following credentials:
- Email: user@example.com
- Password: password123

These credentials will grant access to the task list and other features.

Live Demo:

The app is deployed and available for live testing at https://gleaming-pegasus-c57081.netlify.app/assigned. Visit the link to interact with the app and test all its features.

Screenshots:

- Login Screen:
![image](https://github.com/user-attachments/assets/73b20137-2260-45e0-952b-6d5973ae2fca)

- Task List View: ![Screenshot 2025-01-24 203552](https://github.com/user-attachments/assets/5823e926-7953-4f93-b3c5-a79826fa4fdf)

- Responsive Mobile View: ![image](https://github.com/user-attachments/assets/56795ee9-7b57-4b29-853e-94f670bcc2a4)
-Responsive Tab View: ![image](https://github.com/user-attachments/assets/a785411e-ac06-4be2-a54e-33f8e54022b3)



Contributing:

We welcome contributions! If you have suggestions, bug reports, or would like to improve the app, feel free to open an issue or submit a pull request.
