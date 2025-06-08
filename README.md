[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GeL61fu8)

🔗 Paginated Data Viewer

This project is a full-stack web application for browsing paginated data using:

A React frontend

A Strapi backend

The frontend is responsible for managing pagination UI and interactions, while the backend exposes a paginated API that supplies the data.

⚙️ Architecture Overview

Frontend (React):
Responsible for UI rendering and managing pagination (e.g., navigating between pages, showing current page, etc.).

Backend (Strapi):
Serves as the data source via a paginated REST API endpoint. Handles data storage, retrieval, and pagination metadata.

🧱 Tech Stack

Layer	Technology
Frontend	React (Vite or CRA, Axios/fetch)
Backend	Strapi (Node.js headless CMS)
Database	SQLite/PostgreSQL/MySQL (configurable in Strapi)

📁 Project Structure

pgsql
Kopiëren
Bewerken
/client         --> React frontend
/server         --> Strapi backend
README.md       --> This file
🔌 Example API Endpoint
Example resource: items
The backend exposes a paginated endpoint like:

bash
Kopiëren
Bewerken
GET /api/items?pagination[page]=1&pagination[pageSize]=10
Query Parameters:

pagination[page]: Specifies the page number

pagination[pageSize]: Defines how many items per page

Sample Response:

json
Kopiëren
Bewerken
{
  "data": [...],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 5,
      "total": 50
    }
  }
}
💻 Frontend (React)

The React app is in charge of:

Fetching paginated data from Strapi

Displaying items in a list/grid

Handling pagination controls (next, previous, direct page access)

Showing loading, error, or empty states

Pagination logic relies on metadata from the API response.

🚀 Getting Started

1. Clone the Repository

bash
Kopiëren
Bewerken
git clone https://github.com/Nelson-Mart/eindwerk.git
cd paginated-data-viewer
2. Start the Backend (Strapi)

bash
Kopiëren
Bewerken
cd server
npm install
npm run develop
Backend runs at: https://jammin-api-zu4u.onrender.com/admin/

3. Start the Frontend (React)

bash
Kopiëren
Bewerken
cd ../client
npm install
npm start
Frontend runs at: https://eindwerk-react.netlify.app/

✨ Features

Paginated data browsing

Responsive interface

API-driven design

Loading & error handling

Modular and scalable codebase

📌 Notes

Ensure CORS is properly configured in Strapi to allow frontend access.

You can replace "items" with any other content type in Strapi (e.g., users, posts, articles).

Page size and pagination behavior can be customized in the frontend code.

🔗 Extra links

github: https://github.com/Nelson-Mart/eindwerk