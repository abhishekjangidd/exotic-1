# LuminaWood | Modern Furniture E-Commerce

A full-stack modern furniture e-commerce website built with Node.js, Express, PostgreSQL (Sequelize), Vanilla JavaScript, Tailwind CSS, and Vite.

## 🛠 Tech Stack
* **Frontend:** HTML5, Vanilla JavaScript (ES Modules), Tailwind CSS, Vite, Axios
* **Backend:** Node.js, Express.js, PostgreSQL, Sequelize ORM, JWT Authentication, bcryptjs

## 📁 Project Structure
The project is divided into two distinct parts:
* `backend/` - Node.js MVC server powering the REST API
* `frontend/` - Static frontend bundled with Vite

## 🚀 Setup Instructions

### 1. Database Setup
Ensure you have **PostgreSQL** installed and running on your local machine.
By default, the application looks for a database named `furniture_shop` with user `postgres` and password `postgres` at `localhost`.

If you don't have this database:
```sql
CREATE DATABASE furniture_shop;
```

### 2. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your environment variables (the `.env.example` file can be copied to `.env` if you wish to change defaults):
   ```bash
   cp .env.example .env
   ```
4. Run the database seeder to create the tables and insert demo products (run this once):
   ```bash
   npm run seed
   ```
5. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server will run at http://localhost:5000*

### 3. Frontend Setup
1. Open a *new* terminal window and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (Vite, Tailwind, PostCSS, Axios):
   ```bash
   npm install
   ```
3. Start the frontend Vite development server:
   ```bash
   npm run dev
   ```
   *Vite will start the client, usually on http://localhost:3000 or http://localhost:5173*

## 🛒 Features
* Responsive Hero, Categories, and Landing Page.
* Shop Page with live filtering, Search, and Pagination.
* Product detail pages with dynamic stock checking.
* Shopping Cart with quantity adjustment (stored in SQL DB, linked to user session).
* JWT User Authentication (Login / Register flow).
* Secure Checkout flow (Requires Login).
* Clean, minimal, soft beige/green aesthetic.
