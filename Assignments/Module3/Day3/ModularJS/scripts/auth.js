// auth.js - Authentication Module using localStorage
export const auth = {
  signup(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'User already exists' };
    }
    
    const newUser = { id: Date.now(), email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'Signup successful' };
  },
  
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return { success: false, message: 'Invalid credentials' };
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Login successful', user };
  },
  
  logout() {
    localStorage.removeItem('currentUser');
  },
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  },
  
  isLoggedIn() {
    return !!this.getCurrentUser();
  }
};