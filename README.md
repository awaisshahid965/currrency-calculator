# Project Setup and Run Guide

This guide walks you through the steps to set up and run the project in a development environment, ensuring adherence to best practices.

## Prerequisites

Make sure the following software is installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 20.9.0 or higher)
- [npm](https://www.npmjs.com/) (version 10.1.0 or higher)

## Clone the Repository

```bash
git clone https://github.com/awaisshahid965/currency-calculator.git
cd currency-calculator
```

## Install Dependencies

Navigate to the project directory and install the dependencies using the following command:

```bash
npm run pre-install
npm run setup
```

## Run the Application

Start the development server with the following command:

```bash
npm run dev
```

This command initiates the development server. Open your browser and go to `http://localhost:3000` to access the application.

## Project Structure

The project is organized into distinct directories, each serving a specific purpose:

### Server Structure:

- **`config`**: This directory houses configuration files essential for setting up and customizing the server environment. These configurations may include settings for databases, third-party integrations, and general server behavior.

- **`api`**: The `api` directory is the heart of the server, encompassing controllers, routers, models, and types. 
  - **Controllers**: Manage the application's business logic, processing requests, and generating appropriate responses.
  - **Routers**: Define and handle the routes that the server will respond to, directing requests to the appropriate controllers.
  - **Models**: Represent the data structures used in the application, ensuring consistency and reliability.
  - **Types**: Include TypeScript type definitions that enhance code clarity and maintainability.

- **`repositories`**: In this directory, you'll find classes responsible for all database operations. These classes promote abstraction, ensuring a loosely-coupled structure and facilitating maintenance and scalability.

- **`utils`**: The `utils` directory houses utility functions shared across the project. Additionally, decorators are included to enhance code modularity and maintainability.

### Client Structure:

- **`app`**: This directory contains the routes folder, defining the client-side navigation and structure of the application.

- **`lib`**: The `lib` directory hosts configuration files for libraries used in the project, such as Firebase. This ensures a centralized and organized approach to managing external dependencies.

- **`shared/components`**: Essential components that are reused across the project reside here. These components contribute to a consistent and cohesive user interface.

- **`shared/types`**: TypeScript type definitions that are shared across the client-side codebase. These types enhance code clarity and reduce the likelihood of errors.

- **`shared/ui`**: UI components that are shared across the project structure are located here. These components encapsulate visual elements to maintain a unified design.

- **`shared/utils`**: Utility functions that are shared across the client-side codebase are placed in this directory, promoting code reuse and maintainability.

- **`services`**: This directory houses services responsible for consuming APIs and handling data retrieval. These services enhance separation of concerns and facilitate clean, modular code.

- **`context`**: The `context` directory includes React context implementations, promoting state management and sharing data between components in an efficient manner.

## Contributing

We invite contributions from the community. Feel free to contribute by forking the repository, making improvements, and creating pull requests.

## License

This project is licensed under the [MIT License](LICENSE).