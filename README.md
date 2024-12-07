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
The RRPM Department Website is a comprehensive web-based platform designed to bridge the gap in public awareness regarding rheumatology, rehabilitation, and physical health. It aims to educate the public about the early signs and symptoms of related health conditions, provide preventative health information, and facilitate connections to specialized medical units and services. This platform is both informative and functional, catering to the needs of general users seeking information and administrators managing medical unit content.

The website provides detailed information on medical units, their clinics, activities, and scientific research. It also offers an intuitive and bilingual user interface (English and Arabic) to maximize accessibility and ease of use. By integrating search and filter functionalities, users can quickly locate relevant content. For administrators, the platform includes robust tools for managing units, activities, and research data securely and efficiently.

---

## Features
- **Informative Content:** Access information about medical units, clinics, services, activities, and scientific research.
- **Search and Filter:** Advanced functionality to locate content efficiently using keywords and filters.
- **Multi-Language Support:** Bilingual interface available in English and Arabic.
- **Administrative Tools:** Secure login for administrators to manage content, including CRUD operations for units, activities, and research.
- **Real-Time Updates:** Dynamic status updates for activities and events (upcoming, ongoing, completed).
- **Integrated Mapping:** Google Maps API integration for seamless navigation to medical units.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** 
- **Database:** MySQL or PostgreSQL
- **APIs:** RESTful APIs, Google Maps API
- **Hosting:** Microsoft Azure or AWS

---

## Development Process

### Requirements
The development process began with a thorough understanding of the project's objectives, documented in the **Software Requirements Specification (SRS)**. The SRS outlines:
- Functional and non-functional requirements.
- Use case diagrams and activity diagrams.
- General constraints and design considerations.

### Design and Architecture
The design phase focused on creating a scalable and maintainable system architecture:
- **Frontend Architecture:** Responsive design using a modular CSS structure and reusable components.
- **Backend Architecture:** RESTful API design with endpoints for user, activity, and research management.
- **Database Design:** Relational database schema to store structured data for units, activities, and research.
- **Security Measures:** Role-based access control and secure data transmission using HTTPS.

### Implementation
- **Frontend Development:** HTML, CSS, and JavaScript were used to build a user-friendly interface with multi-language support.
- **Backend Development:** ###### to handle server-side logic, user authentication, and CRUD operations.
- **Database Integration:** MySQL or PostgreSQL for data management, ensuring scalability and reliability.
- **API Integration:** Google Maps API for displaying clinic locations on an interactive map and RESTful APIs to do CRUD operations.

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rrpm-department-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rrpm-department-website
   ```

3. Install dependencies (if applicable):
   ```bash
   npm install  # For Node.js backend
   ```

4. Setup environment variables in `config/config.env`.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:3000`.

---

## Contribution Guidelines
We welcome contributions to improve the RRPM Department Website. To contribute:

1. **Requirement Phase Contributions** (Branch: `req`):
   - Work on documenting and refining requirements.
   - Update the Software Requirements Specification (SRS) and related documentation.
   - Push changes to the `req` branch and open a pull request to merge into `main`.

2. **Design and architecture Phase Contributions** (Branch: `design`):
   - Develop and enhance design artifacts, including diagrams, architecture documentation, and database schemas.
   - Push changes to the `design` branch and open a pull request to merge into `main`.

3. **Development Phase Contributions** (Branch: `dev`):
   - Implement frontend and backend features, and handle integration.
   - Use sub-branches if needed (e.g., `dev/frontend`, `dev/backend`).
   - Push changes to the `dev` branch and open a pull request to merge into `main`.

4. Ensure your commits have descriptive messages:
   ```bash
   git commit -m "Add new feature: <feature-description>"
   ```

5. Push your branch to the repository:
   ```bash
   git push origin <branch-name>
   ```

6. Open a pull request with a detailed explanation of your changes.

---

## License
This project is licensed under the [MIT License](LICENSE).
