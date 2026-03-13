# Lesson 5 Exercises - React Project Setup with Vite

## ⭐ Challenge Exercises

### 5f. Create a New React Project with Login Form

Create a new React project and move your login form into it.

1. **Create a new Vite project:**
   ```
   npm create vite@latest login-form -- --template react
   cd login-form
   npm install
   ```

2. **Move your LoginForm code:**
   - Take the login form component with show/hide password functionality from exercise 4e
   - Replace the content of `src/App.jsx` with your login form code
   - Make sure to import `useState` at the top: `import { useState } from 'react';`

3. **Separate code into JSX and CSS files:**
   - Create `src/App.css` and move all your styles there
   - Import it in `App.jsx`: `import './App.css';`
   - Your component should now have clean JSX with `className` attributes

4. **Test your project:**
   ```
   npm run dev
   ```
   - Open the browser and verify the login form works
   - Test the show/hide password toggle button