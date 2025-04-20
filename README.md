# Password Generator

A React application that allows users to generate strong and secure passwords based on their specified criteria.

## Features

-   **Adjustable Password Length:** Users can set the desired length of the generated password (between 4 and 20 characters).
-   **Character Set Options:** Users can choose to include or exclude uppercase letters, lowercase letters, numbers, and special symbols in the generated password.
-   **Password Display:** The generated password is clearly displayed in a designated box.
-   **Copy to Clipboard:** A convenient button allows users to easily copy the generated password to their clipboard.
-   **Input Validation:** The application ensures that at least one character set is selected before generating a password.

## Technologies Used

-   React
-   CSS (for styling)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd password-generator
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
2.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Usage

1.  Use the number input field to set the desired length of the password.
2.  Check the boxes corresponding to the character sets you want to include in the password (Uppercase, Lowercase, Numbers, Symbols).
3.  Click the "Generate Password" button. The generated password will appear in the password box.
4.  Click the "Copy to Clipboard" button to copy the generated password to your system's clipboard.

## File Structure

password-generator/
├── public/
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   └── PasswordGenerator.js  <-- Main component
│   ├── OTP.css                     <-- Styles for the component
│   ├── ...
├── package.json
├── README.md
└── ...
