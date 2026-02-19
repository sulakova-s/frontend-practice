# Lesson 1 Exercises - React Basics, JSX

## 📋 Basic Tasks

### 1a. Button with text

Create a button with the text "Good job!" using React.

### 1b. Paragraph with name

Create a paragraph with the text "My name is [NAME]" (replace [NAME] with your name).

### 1c. Design layout

Create the design shown in the screenshot (time code: 39.40).

### 1d. Cost calculation

You buy 1 pack of socks for $10 and 2 T-shirts for $8 each.

- Calculate the total order cost
- Save the result in a variable called `productCost`
- Display the result in the Console

### 1e. Display cost

Using the `productCost` variable from task 1d, create the design below and display it on the website.

## ⭐ Challenge Tasks

### 1f. Cost with shipping

Continuing from task 1e, let's add a shipping cost of $5:

- Create a variable `shippingCost`
- Calculate the total: `productCost + shippingCost`
- Display the result using this layout:

  _Note: replace A with productCost, B with shippingCost, C with the total_

### 1g. Loading DayJS

Load the DayJS library to work with dates:

```html
<script src="https://unpkg.com/supersimpledev/dayjs.js"></script>
```

Use `dayjs().format('MMMM D')` to get the current date and display it in the console.

### 1h. Display date

Continuing from task 1g, insert the date in a paragraph element and display it on the website.

### 1i. Display time

Use `dayjs().format('HH:mm:ss')` to get the current time and display it on the website.

### 1j. Create a clock

Create a clock that updates every second:

    1. Save the root in a variable:
    ```js
    const root = ReactDOM.createRoot(...);
    ```

    2. Use `setInterval` to update every second:
    ```js
    setInterval(() => {
    // your code here
    }, 1000);
    ```

    3. Inside setInterval, update the time on the website using `root.render()`
