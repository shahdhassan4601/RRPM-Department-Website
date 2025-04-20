# Rheumatology, Rehabilitation, and Physical Medicine (RRPM) Department Website

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Development Process](#development-process)  
   - [Requirements](#requirements)  
   - [Design and Architecture](#design-and-architecture)  
   - [Implementation](#implementation)  
5. [Setup and Installation](#setup-and-installation)  
6. [Contribution Guidelines](#contribution-guidelines)  
7. [License](#license)  

---

## Project Overview

The RRPM Department Website is a comprehensive, web-based platform designed to raise public awareness about rheumatology, rehabilitation, and physical health. It aims to educate users on early signs and symptoms of related conditions, promote preventive healthcare, and connect the public with specialized medical units and services.

This platform offers detailed content on medical units, clinics, activities, and scientific research. With a clean, bilingual user interface (English and Arabic), it maximizes accessibility and user engagement. Integrated search and filtering tools allow users to quickly find relevant information. The platform also includes secure administrative tools for managing content efficiently.

---

## Features

- **Informative Content:** View detailed information about medical units, clinics, services, activities, and research.
- **Search and Filter:** Quickly locate content using keyword search and advanced filtering options.
- **Multi-Language Support:** Available in both English and Arabic.
- **Admin Dashboard:** Secure login for administrators to manage content, with full CRUD (Create, Read, Update, Delete) capabilities.
- **Real-Time Updates:** Dynamic status indicators for activities and events (e.g., upcoming, ongoing, completed).
- **Interactive Maps:** Integrated Google Maps for easy navigation to clinic and unit locations.

---

## Technologies Used

- **Frontend:** Vue.js, HTML, CSS, JavaScript  
- **Backend:** FastAPI (Python)  
- **Database:** MySQL or PostgreSQL  
- **APIs:** RESTful APIs, Google Maps API  
- **Hosting:** Microsoft Azure or Amazon Web Services (AWS)  

---

## Development Process

### Requirements

The project began with comprehensive requirement gathering, documented in the **Software Requirements Specification (SRS)**. This includes:

- Functional and non-functional requirements  
- Use case and activity diagrams  
- System constraints and design considerations  

### Design and Architecture

Key architectural and design decisions include:

- **Frontend:** Modular and responsive layout with reusable UI components.  
- **Backend:** RESTful APIs with clear endpoints for managing users, research, and activities.  
- **Database:** Relational schema to ensure data integrity and scalability.  
- **Security:** Role-based access control (RBAC) and secure HTTPS connections.  

### Implementation

- **Frontend Development:** Built using Vue.js to ensure a smooth and intuitive user experience.  
- **Backend Development:** Powered by FastAPI for efficient request handling and seamless integration.  
- **Database Integration:** Utilizes MySQL or PostgreSQL for reliable, structured data storage.  
- **API Integration:** REST APIs for dynamic content management and Google Maps API for location services.  

---

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/rrpm-department-website.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd rrpm-department-website
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Set environment variables**  
   Create a `.env` file or use `config/config.env` to define necessary configurations.

5. **Run the development server**  
   ```bash
   npm run dev
   ```

6. **Access the app**  
   Open your browser and go to `http://localhost:3000`.

---

## Contribution Guidelines

We welcome contributions to enhance and expand the RRPM Department Website. Please follow the process below:

### Branch Workflow

- **Requirement Phase** (`req` branch):  
  - Work on the SRS and refine project needs.
  - Push updates to `req` and create a pull request to `main`.

- **Design Phase** (`design` branch):  
  - Contribute to design artifacts like architecture diagrams and database schemas.
  - Push updates to `design` and open a pull request to `main`.

- **Development Phase** (`dev` branch):  
  - Implement features for frontend/backend.
  - Use sub-branches when necessary (e.g., `dev/frontend`, `dev/backend`).
  - Push changes to `dev` and submit a pull request to `main`.

### Commit Guidelines

- Write descriptive commit messages:  
  ```bash
  git commit -m "Add feature: admin dashboard for managing clinics"
  ```

- Push your branch to origin:  
  ```bash
  git push origin <branch-name>
  ```

- Open a pull request with a clear summary of your contributions.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
