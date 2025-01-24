import { createSlice } from '@reduxjs/toolkit';

// Helper functions for localStorage
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : []; // Parse JSON or return empty array
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadFromLocalStorage(), // Load initial state from localStorage
  reducers: {
    // Add a new task with default values for completed, important, planned, priority, category, and location
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        completed: false,
        important: false,
        planned: false,
        priority: action.payload.priority || 'Medium', // Default to Medium priority
        category: action.payload.category || 'Indoor', // Default to Indoor category
        location: action.payload.location || '', // Location is optional
      };
      state.push(newTask);
      saveToLocalStorage(state); // Save updated state to localStorage
    },

    // Toggle the completed status of a task
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      saveToLocalStorage(state); // Save updated state to localStorage
    },

    // Toggle the important status of a task
    toggleImportant: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
      saveToLocalStorage(state); // Save updated state to localStorage
    },

    // Delete a task
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      saveToLocalStorage(updatedState); // Save updated state to localStorage
      return updatedState;
    },

    // Move a task to planned status
    moveToPlanned: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.planned = true;
      }
      saveToLocalStorage(state); // Save updated state to localStorage
    },

    // Update the priority of a task
    setPriority: (state, action) => {
      const { id, priority } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.priority = priority;
      }
      saveToLocalStorage(state); // Save updated state to localStorage
    },

    // Update the location of a task (can be used for outdoor tasks)
    setLocation: (state, action) => {
      const { id, location } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.location = location;
      }
      saveToLocalStorage(state); // Save updated state to localStorage
    },
  },
});

export const { 
  addTask, 
  toggleComplete, 
  toggleImportant, 
  deleteTask, 
  moveToPlanned, 
  setPriority,
  setLocation 
} = tasksSlice.actions;

export default tasksSlice.reducer;
