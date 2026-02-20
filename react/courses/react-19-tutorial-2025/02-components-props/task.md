# Lesson 2 Exercises - Components and Props

## 📋 Basic Tasks

### 2a. First Component

Create an `<App>` component that returns a paragraph with the text:
"Hello, welcome to my website" inside. Then, render this `<App>`.

### 2b. Adding Buttons

Continuing from 2a, in the `<App>` component, add 2 buttons after the paragraph: "Login" and "Sign up"
- Use a Fragment to group them together `<>...</>`
- Use `()` to write the JSX on multiple lines

### 2c. Adding Text Boxes

Continuing from 2b, add 2 text boxes above the buttons with placeholders "Email" and "Password".
- Lay out the textboxes on separate lines using `<div>`
- Add `type="password"` to the password textbox to hide the text

### 2d. Creating a Component

Create a new component called `LoginForm`, and move all login-related code (textboxes and buttons) into this component. Then in `<App>`, use `<LoginForm>`.

## ⭐ Challenge Exercises

### 2e. Product Display
Create an `<App>` component that displays a product:

```
Cotton socks
Price: $10.90
[Add to Cart]
```

### 2f. Reusable Component
Display 3 products: socks, tennis balls, and t-shirt.
Create a `<ProductDetails>` component and use props to make it reusable.

### 2g. Adding Discount
Add a `discountPrice` prop to `<ProductDetails>`. If it exists, display it under the original price.
- Give socks a discount price of $5.45

### 2h. Styling Discount
If a product has a discount, cross out the original price using `<del>` tags.
- Only cross out if discount exists (check with `discountPrice`)

### 2i. Ternary Operator
Update the previous exercise to use a **ternary operator** in JSX:
```js
const result = condition ? valueIfTrue : valueIfFalse;
```

### 2j. Adding Images
  1. Download product images from:
    - `supersimple.dev/images/cotton-socks.png`
    - `supersimple.dev/images/tennis-balls.png`
    - `supersimple.dev/images/plain-t-shirt.png`

  2. Add an `imageSrc` prop to `<ProductDetails>` and display an `<img>` at the top


## 📁 Solutions

### [`login-form.html`]
Contains exercises:
- **2a** - First component with welcome message
- **2b** - Login/Sign up buttons  
- **2c** - Email & password fields
- **2d** - LoginForm component

### [`product-list.html`]
Contains exercises:
- **2e** - Single product display
- **2f** - Three products with reusable component
- **2g-2i** - Discount, strikethrough, ternary operator
- **2j** - Product images

## 🖼️ resourses
[`./my-solutions/images/`] - product images for exercise 2j