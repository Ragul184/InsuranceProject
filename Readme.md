# Insurance Policies Web App

## Overview
This is a full-stack web application built with **Angular 19 as the frontend** and **Node.js with Express using SQLite as the backend**. It allows users to:

- View a list of insurance policies
- Search policies by name
- Filter policies based on premium range, policy type, and coverage amount
- Sort policies by premium (ascending/descending)
- Paginate through results

---
## Tech Stack
### **Frontend**:
- Angular 19
- Angular Material UI
- SCSS for styling

### **Backend**:
- Node.js with Express.js
- SQLite database for storing data

---
## Setup and Installation

### **Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/Ragul184/InsuranceProject.git
   cd InsuranceProject/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```
   or
   ```sh
   npm start
   ```
   The backend runs on **http://localhost:8080**

### **Frontend Setup**
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular development server:
   ```sh
   ng serve --open
   ```
   The frontend runs on **http://localhost:4200**

---
## Approach & Trade-offs
### **Approach:**
- Used **SQLite database** to store insurance policies efficiently while keeping the setup simple.
- Used **Angular Material UI** for a **clean, responsive UI** with filters, sorting, and pagination.
- Used **Angular Standalone Components** to avoid `NgModule`, making the project **lightweight and modern**.

### **Trade-offs:**
- **SQLite is lightweight**, but for a high-scale application, PostgreSQL or MongoDB would be a better option.
- **No authentication**: This app is designed for public use without user accounts.

---
## Assumptions
- The dataset is small, so SQLite is sufficient.
- Users will interact with a web interface, so no authentication is needed.
- Policies have a **fixed set of attributes** (Name, Type, Premium, Coverage).
- Generated dummy data from the provided 3 rows to make it easy for pagination

---

## Author
Developed by **Raghul Karthik Narayanan**

