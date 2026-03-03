# Lesson 3 Exercises - State and Event Handlers

## 📋 Basic Tasks

### 3a. First Click Handler

Create a button with the text "Clicked 0 times". When you click this button, display the word "Clicked" in the console.

- Hint: use the `onClick` event

### 3b. Adding State

Using `React.useState()`, save a count variable.

- The count should have an initial value of `0`
- `useState()` should return two values: `count` (the current data) and `setCount` (the updater function)
- Update the text in the button so it displays the current count instead of `0`
- When clicking the button, use the updater function to increase the count by `1`
- Click the button a few times to test your code

### 3c. Proper Grammar

Update the text in the button so that if the count is equal to `1`, the text displays "Clicked 1 time" instead of "Clicked 1 times".

### 3d. Reusable Counter

Separate the counter logic into its own component. Then, use this component to create **2 independent counters** on the website.

- Click both counters a few times to test
- Notice that each counter can have a different count

### 3e. Synchronized Counters

Modify the code so both counters display the **same count**.

- Do this by **lifting the state up** to a common parent component and passing it down via props

### 3f. Reset Button

Create a "Reset" button that sets the count back to `0` for all counters.

### 3g. Display As You Type

Create an `<input>` field and a `<p>` paragraph.

- As you type in the `<input>`, the text should appear in the `<p>` with "Hello " in front of it
- Hint: use `onChange` event and save the text in state

### 3h. Input Controls

Add **"Reset"** and **"Example"** buttons beside the `<input>`.

- **Reset**: clears the input text (and paragraph updates)
- **Example**: sets an example text like "Alice" in the input
- Hint: Use a **controlled input** (`value={text}` prop)

