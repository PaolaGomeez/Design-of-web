# Authentication System and Dashboard

This project is a web application that allows users to register, log in, and access an interactive dashboard. The system displays real-time information, such as the current weather and financial data (Bitcoin price), by integrating with external APIs. The backend is developed in PHP, while the frontend uses HTML, CSS, and JavaScript.

## Project Structure

The project is organized into two main areas: **Backend** and **Frontend**.

### Backend

- **PHP:**  
  - **login.php:** Verifies user credentials and handles the login process.
  - **register.php:** Processes new user registrations.
  - **logout.php:** Ends the user session.

> **Note:** These PHP files are located in the `backend` folder and communicate with the frontend via Fetch API requests.

### Frontend

- **index.html:**  
  The login page for users. It includes a login form and links to `login.js` to manage the process.

- **login.js:**  
  Handles authentication by sending the user data (email and password) to the `login.php` endpoint using Fetch. On success, it stores the user’s information in `sessionStorage` and redirects to the dashboard.

- **registration.html:**  
  The registration page for new users. It contains a form that asks for name, age, email, and password, and links to `registration.js`.

- **registration.js:**  
  Captures the data from the registration form and sends it via Fetch to the `register.php` endpoint. It displays success or error messages and redirects to the login page upon successful registration.

- **styles.css:**  
  Defines the appearance of the login and registration pages, featuring modern styles and animations for a pleasant user experience.

- **dashboard.html:**  
  The main page displayed after logging in. It welcomes the user (showing their name) and contains two informational cards:
  - **Current Weather:** Displays the temperature and weather description for Mexico City, obtained from OpenWeatherMap.
  - **Financial Data:** Displays the Bitcoin to USD exchange rate using CoinAPI.

- **dashboard.css:**  
  Sets the design and style of the dashboard, including the layout of the cards and interactive effects.

- **dashboard.js:**  
  Makes requests to two external APIs:
  - **OpenWeatherMap:** To obtain the current weather in Mexico City.
  - **CoinAPI:** To obtain the BTC/USD exchange rate.

- **verify.js:**  
  Checks if the user has an active session (stored in `sessionStorage`) before accessing protected pages, redirecting to the login page if not.

- **logout.js:**  
  Manages the logout process by clearing `sessionStorage`, calling `logout.php` using Fetch, and redirecting the user to the login page.

## Usage

- **User Registration:**  
  Visit `registration.html` to create a new account.

- **Login:**  
  Enter your credentials on `index.html` to access the application.

- **Dashboard:**  
  Once authenticated, you will be redirected to `dashboard.html`, where you can view the current weather and real-time financial information.

- **Logout:**  
  Use the "Logout" button on the dashboard to end your session and return to the login page.

## Additional Notes

- **Session Management:**  
  The application uses `sessionStorage` on the client side to store user information and protect private pages through `verify.js`.

- **Asynchronous Interaction:**  
  Requests between the frontend and backend are made using the Fetch API, which allows the interface to update without reloading the page.

- **External APIs:**  
  - **Weather:** OpenWeatherMap is used to obtain weather information for Mexico City.
  - **Financial Data:** CoinAPI is used to obtain the Bitcoin price in USD.

## Screenshots
![img](images/image1.JPG)
![img](images/image2.JPG)
![img](images/image3.JPG)
