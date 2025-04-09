# Recoil State Demo

This project demonstrates a simple text input with a visibility toggle using Recoil, a state management library for React apps.

## Project Explanation

The main objective of this project is to showcase how Recoil can be used to manage state in a React application. In this demo, we have an input field whose text is revealed only when a checkbox is checked. Recoil helps us manage the state of the checkbox and the visibility of the text in the input field.

## Installation and Project Setup

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/raffiMartin069/recoil-state-demo.git
    cd recoil-state-demo
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the project:**
    ```bash
    npm start
    ```

The application will start on `http://localhost:3000`.

## Project Directory Structure

The directory structure of the project is as follows:

```plaintext
recoil-state-demo/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   ├── ToggleCheckbox.tsx
│   │   └── ...
│   ├── store/
│   │   ├── visibilityState.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json

This project was created by **Raffa**.
