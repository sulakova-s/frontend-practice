# Lesson 4 Exercises - CSS and Hooks

## 📋 Basic Tasks

### 4a. Styled Button

Create a button with the text "ON" using React and CSS.

- Use the background color: `rgb(25, 135, 84)`

### 4b. Toggle State

Using `React.useState()`, save a boolean `isButtonOn`.

- This state will switch between `true` and `false` when clicking the button
- Using `isButtonOn` and the **Ternary Operator** (`?:`), switch the text between "ON" and "OFF" when clicking the button

### 4c. Conditional Styling

When the button is "OFF", make it red.

- Using the **Ternary Operator**, give the button a different `className` based on its state
- Use the background color: `rgb(220, 53, 69)` for the OFF state

## ⭐ Challenge Exercises

### 4d. Login Form with State (from Exercise 2d)

- You can copy the code from `2d-login-form.html` or start from scratch to challenge yourself
- Add a blue background color to the button: `rgb(0, 123, 255)`
- The form should include:
  - "Hello, welcome to my website" paragraph
  - Email input field
  - Password input field
  - Login button
  - Sign up button

### 4e. Show/Hide Password Button

Add a **"Show"** button next to the password field that toggles the password visibility.

- Use `React.useState()` to create a boolean `showPassword` state (initial value: `false`)
- When clicking the button, toggle `showPassword` between `true` and `false`
- Use the ternary operator to switch the password `<input>`'s `type` prop:
  - If `showPassword` is `true`: `type="text"` (password is visible)
  - If `showPassword` is `false`: `type="password"` (password is hidden)
- The button text should also toggle between **"Show"** and **"Hide"**

### 4f. Clock with Hooks (from Lesson 1)

Rebuild the clock from Lesson 1.

1.  **Load DayJS:** Add the script for the DayJS library in your HTML.
    ```html
    <script src="https://unpkg.com/supersimpledev/dayjs.js"></script>
    ```
2.  **Create State:** Use `React.useState()` to create a state variable `time` (initial value can be an empty string).
3.  **Set up the Timer:** Use `React.useEffect()` to run a piece of code **only once** after the component is created.
    - Inside this `useEffect`, set up a timer using `setInterval(() => { ... }, 1000)` that runs every second.
    - Inside the `setInterval` function, get the current time string using `dayjs().format('HH:mm:ss')` and update your `time` state with it.
4.  **Display the Clock:** Display the current time from the state in a paragraph, like: `Current time: {time}`.

### 4g. Understanding the `useEffect` Dependency Array

This exercise will help you see _why_ the dependency array `[]` is crucial.

1.  Inside the `setInterval` function from exercise 4f, add a `console.log('run code');`.
2.  First, run your clock with the empty dependency array `[]` in `useEffect`. Check the console — how many times does "run code" appear per second?
3.  Now, **remove the dependency array** completely (`useEffect(() => { ... })`). Run the code again and observe the console. What happens? Why do you think this is happening?

### 4h. Counter with Refs (from Exercise 3c)

Build a counter with Reset and Auto Click buttons.

- Use `React.useState()` to store the count (start from 0)
- Add buttons: "+1" (increment), "Reset" (set to 0), "Auto Click" (starts auto-increment)
- Use `React.useRef()` to get a reference to the "+1" button element
- When clicking "Auto Click", use `setInterval` to call `buttonRef.current.click()` every second
- Display the count like: `Clicked {count} times`

### 4i. Style the Counter

Style the counter from 4h with a clean, centered design.

- Background color for counter: `rgb(25, 135, 84)`
- Wrap buttons in a flexbox container
- Center buttons horizontally: `justify-content: center;`
- Make flexbox full height: `height: 100vh;`
- Add light gray background to flexbox: `rgb(222, 222, 222);`
- Remove default `<body>` margin: `margin: 0;` (applies to top and bottom)
- Center content vertically: `align-items: center;`
