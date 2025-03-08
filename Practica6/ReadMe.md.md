
# School Registration Web Application

## Overview

This web application provides a user-friendly interface for registering students into a school system. It uses HTML for the structure, CSS for styling, and JavaScript for dynamic interactions and local storage handling.

## Files Breakdown

### `index.html`

This file contains the HTML structure of the registration form.

- **Form Fields**: Inputs for full name, email, date of birth, and grade.
- **Submit Button**: Triggers the `register()` function on click to process and display the entered information.
- **Display Area**: A table where registered student information is dynamically listed.

### `register.js`

Handles logic and interactions within the application.

- **Student Object**: Constructor function for creating student objects with a unique ID and provided details.
- **Registration Process**: Adds new student entries to an array and updates the display table.
- **Local Storage**: Uses local storage to save and retrieve registered student data across sessions.
- **Event Listeners**: Includes listeners for form submission and input handling for improved user experience.

### `style.css`

Applies styles to the HTML elements to enhance the visual layout and usability.

- **Form Styling**: Ensures the form is visually appealing and clearly readable.
- **Responsive Table**: Styles for the student display table, including color-coded rows and hover effects.
- **Interactive Elements**: Visual feedback for buttons and inputs, such as hover and focus states.

## Functionality

- **Add Student**: Users can add new students through the form, which immediately updates the table below.
- **Persistent Storage**: Student data is stored in the browser's local storage, allowing persistence across page reloads.
- **Remove Student**: Each student entry in the table includes a 'Remove' button, enabling the deletion of that entry both visually and from storage.

## Conclusion

This application simplifies the process of student registration with a clean, intuitive interface and responsive design, making it easy to use on various devices.


![Imagen](Img/Cap1.JPG)
![Imagen](Img/Cap2.PNG)
![Imagen](Img/Cap3.PNG)
