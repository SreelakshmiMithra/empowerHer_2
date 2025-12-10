// todosModule.js - Todos Data Management
import { auth } from './auth.js';

export const todos = {
  getTodos() {
    const user = auth.getCurrentUser();
    if (!user) return [];
    
    const allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return allTodos.filter(t => t.userId === user.id);
  },
  
  addTodo(title) {
    const user = auth.getCurrentUser();
    if (!user) return false;
    
    const allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = {
      id: Date.now(),
      userId: user.id,
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    allTodos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    return newTodo;
  },
  
  toggleTodo(id) {
    const allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = allTodos.find(t => t.id === id);
    
    if (todo) {
      todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(allTodos));
    }
  },
  
  deleteTodo(id) {
    let allTodos = JSON.parse(localStorage.getItem('todos')) || [];
    allTodos = allTodos.filter(t => t.id !== id);
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }
};