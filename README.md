# Global News Aggregator + Trending Topics

A full-stack web application that aggregates news articles, allows filtering by topic, and automatically calculates trending keywords from the content. Built with **Node.js, Express, MongoDB, and Vanilla JS**.

## 🚀 Features
*   **News Feed**: Browse latest news articles with titles, descriptions, and categories.
*   **Topic Filtering**: Filter news by categories (Technology, Business, Sports, etc.) using a dropdown that includes an '**All**' option to reset.
*   **Trending Analysis**: Dynamically calculates top 5 trending keywords based on word frequency in news titles and descriptions (excluding stop words like 'the', 'and', 'for').
*   **Robust API**: RESTful API with error handling and **404 protection**.
*   **Beginner-Friendly Code**: Frontend uses `async/await` + `try/catch` for clear error handling.

## 🛠 Tech Stack
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Mongoose ODM)
*   **Frontend**: HTML5, CSS3, Vanilla JavaScript (Served via `public/index.html`)

---

## ⚠️ Important Prerequisites
> **[IMPORTANT]** Ensure **MongoDB** is running locally on port `27017` **BEFORE** running the seed script or starting the server.

---

## ⚙️ How to Run Locally

### 1. Start MongoDB
Make sure your local MongoDB instance is running.

### 2. Install Dependencies
```bash
npm install
```

### 3. Seed Database
Run the seed script to populate the database with sample data.
```bash
npm run seed
```
*   **Note**: This inserts **10 sample news items** and will log a success message: `✅ Seed successful`.

### 4. Start the Server
```bash
npm run dev
```
*   The backend server runs on **http://localhost:5000**.
*   The frontend is served statically by the backend.

### 5. Open the Application
Open your browser and navigate to:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🔍 Verification Steps
1.  **Run MongoDB**: Ensure the service is active.
2.  **`npm run seed`**: Verify "Seed successful" message in terminal.
3.  **`npm run dev`**: Verify "Server running on http://localhost:5000" message.
4.  **Open Browser**: Go to `http://localhost:5000`.
5.  **Test News Feed**: Confirm news cards are visible.
6.  **Test Trending Keywords**: Check the sidebar for top keywords.
7.  **Test Filter Dropdown**: Select 'Technology' and verify list updates; select 'All' to reset.

---

## 📡 Sample API Responses

### GET `/api/news`
Fetches all news articles.
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "651a...",
      "title": "AI Takes Over...",
      "description": "Artificial Intelligence is writing...",
      "category": "technology",
      "publishedAt": "2023-12-01T..."
    }
  ]
}
```

### GET `/api/trending`
Returns top 5 keywords.
```json
{
  "success": true,
  "data": [
    { "keyword": "technology", "count": 5 },
    { "keyword": "market", "count": 3 }
  ]
}
```

---

## 💼 Interview Hooks
(Things to mention during an interview)
*   **Full-stack Integration**: Seamless communication between Express backend and Vanilla JS frontend.
*   **Trending Algorithm**: Custom logic to parse natural language (titles/descriptions) and extract meaningful trends.
*   **Database Operations**: efficient CRUD interactions using Mongoose.
*   **Clean Architecture**: Separation of concerns (Models, Routes, Public assets).

## 🚀 Deployment (Brief)
*   **Backend**: Deploy to Render/Railway. Set `MONGO_URI` env var to your MongoDB Atlas connection string.
*   **Frontend**: Served automatically by the backend (monolithic deployment).
