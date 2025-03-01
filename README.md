# Devyani Thokal's Portfolio

This repository contains the source code for my personal portfolio website. It showcases my skills, projects, experience, certifications, and contact information.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This portfolio website is designed to provide an overview of my professional experience, skills, and projects. It serves as a central hub for potential employers, collaborators, and anyone interested in my work.

## Features

- **Hero Section:** Introduces me and highlights my key skills.
- **About Section:** Provides a detailed overview of my background and expertise.
- **Projects Section:** Showcases my projects with descriptions and images, including category filters and project modals.
- **Experience Section:** Details my professional experience, including job roles and responsibilities.
- **Skills Section:** Lists my technical skills and areas of expertise.
- **Certifications Section:** Displays my certifications with images and links to view them.
- **Contact Section:** Provides contact information and links to my social media profiles.
- **Connect Sidebar:** Sticky sidebar containing social media icons for easy connection.
- **Responsive Design:** Ensures the website looks great on all devices.
- **Clean and Modern UI:** Uses a consistent purple color palette and modern styling.
- **Smooth Scrolling:** Enhances user experience with smooth scrolling transitions.
- **Back to Top Button:** Allows users to easily navigate to the top of the page.

## Technologies Used

- **React:** For building the user interface.
- **JavaScript (ES6+):** For application logic.
- **HTML5 & CSS3:** For structuring and styling the website.
- **React Icons:** For using social media and other icons.
- **JSON:** For storing data (projects, certifications, etc.).
- **Git:** For version control.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** (version 12 or higher)
- **npm** (Node Package Manager) or **yarn**

### Installation

1.  Clone the repository:

    ```bash
    git clone [repository_url]
    cd [repository_name]
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## File Structure

portfolio/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── About.js
│ │ ├── Certifications.js
│ │ ├── ConnectSidebar.js
│ │ ├── Contact.js
│ │ ├── Experience.js
│ │ ├── Footer.js
│ │ ├── Hero.js
│ │ ├── Navbar.js
│ │ ├── Projects.js
│ │ ├── Skills.js
│ │ └── ... other components ...
│ ├── data/
│ │ ├── certifications.json
│ │ ├── projects.json
│ │ └── ... other data files ...
│ ├── assets/
│ │ ├── images/
│ │ │ ├── ... certification images ...
│ │ │ ├── ... project images ...
│ │ │ └── ... other images ...
│ ├── styles/
│ │ └── styles.css
│ ├── App.js
│ └── index.js
├── package.json
├── README.md
└── .gitignore
