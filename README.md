📸 Snapshot — Cloud‑Native Expense Tracker

A full‑stack, cloud‑deployed SaaS application for tracking daily expenses. Snapshot combines a modern React frontend with a secure Django REST backend, containerized with Docker and deployed on Azure using cloud‑native services.
🚀 Live Demo

🔗 https://gray-coast-0ad65a10f.4.azurestaticapps.net/  
Username: Durond  
Password: password
✨ Features

    Track daily expenses with a clean, responsive UI

    User authentication (login + account creation)

    Real‑time CRUD operations for transactions

    Cloud‑native deployment with CI/CD

    Fully containerized backend for consistent builds

🧩 Tech Stack
Frontend

    React (Vite)

    JavaScript / HTML / CSS

    Tailwind CSS

    DaisyUI

Backend

    Python

    Django REST Framework

    PostgreSQL

Cloud & DevOps

    Azure Static Web Apps (CI/CD + global hosting)

    Azure Container Apps (backend hosting)

    Azure Container Registry (image storage)

    Docker (containerization)

    GitHub Actions (automated builds & deployments)

    Linux-based development & deployment environments

🏗️ Architecture Overview
Code

React Frontend (Static Web App)
        |
        |  HTTPS
        v
Django REST API (Azure Container Apps)
        |
        |  Internal Network
        v
PostgreSQL Database

    Frontend deployed via Azure Static Web Apps with GitHub Actions

    Backend container built with Docker, pushed to ACR, and deployed to Azure Container Apps

    PostgreSQL used for persistent, ACID‑compliant data storage

🛠️ Key Implementation Highlights

    Docker Containerization — Ensures consistent builds and eliminates environment drift across dev and cloud environments.

    Azure Container Apps — Provides serverless container hosting with automatic scaling and reduced operational overhead.

    Azure Container Registry — Stores and versions backend images for repeatable deployments.

    Azure CLI Automation — Scripts used to provision resources, push images, and deploy updates.

    Django REST API — Handles authentication, CRUD operations, and secure backend logic.

    React + Tailwind UI — Delivers a fast, responsive, and modern user experience.



HomePage:

<img width="1913" height="796" alt="image" src="https://github.com/user-attachments/assets/04b46b92-c880-433e-91ba-fcc90c78c642" />



Transaction Page:

<img width="1997" height="882" alt="image" src="https://github.com/user-attachments/assets/3bb47836-1afd-4b37-a943-05d7baf07392" />

