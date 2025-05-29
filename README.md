# GitHub Actions Examples Repository

This repository serves as a collection of examples demonstrating various features and capabilities of GitHub Actions. Each workflow in `.github/workflows/` (and its corresponding code, if any, in the root directories like `04-using-actions/`) is designed to illustrate specific concepts.

## Featured Example: React Application CI Pipeline

A key example in this repository is the Continuous Integration (CI) pipeline for the React application located in `04-using-actions/react-app/`. The workflow for this application can be found in `.github/workflows/04=using-actions.yaml`.

This CI pipeline has been enhanced to include:

*   **Automated Triggers**: Runs on pushes and pull requests to the `main` branch, and can also be manually dispatched.
*   **Dependency Caching**: Speeds up execution by caching `node_modules`.
*   **Security Scanning**: Uses `npm audit` to check for vulnerabilities in dependencies.
*   **Linting**: Enforces code style and catches errors using ESLint.
*   **Formatting Checks**: Ensures code formatting consistency using Prettier.
*   **Unit Testing**: Runs tests using `npm test`.
*   **Application Build**: Verifies that the React application builds successfully using `npm run build`.

This setup demonstrates a robust CI process for a typical Node.js frontend application. Other files in this repository showcase different aspects of GitHub Actions, such as:

*   Basic building blocks and script execution
*   Workflow event triggers
*   Usage of different workflow runners
*   Contexts, expressions, variables, and functions
*   Execution flow control
*   Workflow inputs and outputs

Feel free to explore the examples to learn more about GitHub Actions!
