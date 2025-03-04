# Interactive Registration Form Project

This project is an interactive registration form that validates the data entered by the user in real time. It allows users to enter their name, email, and phone number, displaying error messages if the information is invalid. The form cannot be submitted until all the data is correct.

## JavaScript Validation

The validation of the fields was implemented in JavaScript to ensure that the entered data is correct before submitting the form. Events were added to check in real time if the email has a valid format, if the phone number contains exactly 10 digits, and if the name is not empty. Additionally, it features dynamic error messages to alert the user when the data does not meet the requirements.

## Code:

The code includes `<input>` tags for each field, with attributes like "required" to ensure the information is validated directly by the browser.

The form elements are captured using `getElementById`.

It includes validation functions to check if the fields meet the established rules.

Events such as "input" are used to validate in real time, and "submit" to prevent the form from being submitted if there are errors.

Finally, error messages are displayed dynamically by modifying the `textContent` of the corresponding elements.



![Imagen](Img/Form2.JPG)
![Imagen](Img/Form3.JPG)
![Imagen](Img/Form4.JPG)
![Imagen](Img/Form1.JPG)




