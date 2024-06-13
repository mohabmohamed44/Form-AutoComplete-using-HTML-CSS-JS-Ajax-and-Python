# Registration Form with Autocomplete and Validation

This project implements a registration form with autocomplete functionality for the username field and validation for the email and password fields using Flask (Python web framework) for the backend and JavaScript with AJAX for the frontend.

## Components and Features

### Frontend (HTML/CSS/JavaScript)

- **HTML (`index.html`)**:
  - Contains a registration form with fields for username, email, and password.

- **CSS (`styles.css`)**:
  - Provides styling for the form and its elements to enhance user experience.

- **JavaScript (`script.js`)**:
  - Implements autocomplete functionality for the username field using **AJAX** to communicate with Flask backend.
  - Validates email format using regular expressions.
  - Provides client-side form validation to ensure all fields are filled correctly before submission.
  - Displays form submission status messages (success or error) dynamically on the webpage.

### Backend (Flask)

- **`autocomplete.py`**:
  - Implements a Flask web application.
  - **Routes**:
    - `/`: Renders the `index.html` template which contains the registration form.
    - `/autocomplete`: Handles GET requests with a query parameter (`query`) to provide autocomplete suggestions for usernames based on a predefined list (`names.txt`).
  - **Static Files**: Serves static CSS (`styles.css`) and JavaScript (`script.js`) files using Flask's `send_from_directory` function to ensure proper handling of static resources.
  - **Validation**: Implements basic validation for the email field using a regular expression (`validateEmail` function in `script.js`).

### Autocomplete Functionality

- As the user types in the username field, JavaScript fetches suggestions from the backend (`/autocomplete`) based on the input query using AJAX.
- Suggestions are displayed dynamically below the username field and allow the user to select from the list.

### Form Validation

- Checks if all fields (username, email, password) are filled out before allowing form submission.
- Validates the email format using a regular expression to ensure it matches the standard email pattern.

### User Experience

- Provides immediate feedback to the user regarding form validation errors or successful form submission.
- Enhances usability with autocomplete for usernames, making it easier for users to select their desired username.

## Project Workflow

- **Setup**: Ensure Flask and necessary dependencies are installed (`pip install Flask`).
- **File Organization**: Maintain a clear directory structure (`templates`, `static`) for HTML templates and static files (CSS, JavaScript).
- **Implementation**:
  - Write HTML/CSS for the form layout and styling.
  - Implement JavaScript with AJAX to handle autocomplete and form validation on the client-side.
  - Develop Flask routes (`/` for rendering HTML, `/autocomplete` for handling autocomplete requests).
  - Test and debug the application to ensure proper functionality across different browsers.

## Purpose

The purpose of this project is to demonstrate the integration of Flask with frontend technologies (HTML, CSS, JavaScript) to create a responsive and interactive web form. It showcases the use of Flask for backend processing (autocomplete suggestions) and client-side JavaScript with AJAX for dynamic user interactions (autocomplete and form validation). This project serves as a practical example of building a web application that combines frontend and backend technologies to enhance user experience and ensure data integrity.
