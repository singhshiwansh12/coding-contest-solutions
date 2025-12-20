# Contest Solutions Hub

A full-stack web application to browse, search, and filter competitive programming contest solutions. Built with **Node.js, Express, MongoDB, and Vanilla JavaScript**.

## 🚀 Features
*   **Contest Solutions Library**: Browse solutions from various competitive programming contests (CodeChef, Codeforces, etc.)
  
*   **Difficulty Levels**: View problems categorized by difficulty (Easy, Medium, Hard)
*   **C++ Solutions**: All solutions are provided in C++ with detailed explanations
*   **Clean UI**: Modern, responsive interface for easy navigation
*   **RESTful API**: Well-structured backend API with proper error handling

## 🛠 Tech Stack
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Mongoose ODM)
*   **Frontend**: HTML5, CSS3, Vanilla JavaScript
*   **Deployment**: Ready for deployment on Render/Railway

---

## ⚠️ Important Prerequisites
> **[IMPORTANT]** Ensure **MongoDB** is running locally on port `27017` **BEFORE** running the seed script or starting the server.

---

## ⚙️ How to Run Locally

### 1. Start MongoDB
Make sure your local MongoDB instance is running on port `27017`.

### 2. Install Dependencies
```bash
npm install
```

### 3. Seed Database
Run the seed script to populate the database with contest solutions.
```bash
npm run seed
```
*   **Note**: This inserts sample contest solutions and will log: `✅ Database seeded successfully!`

### 4. Start the Server
```bash
npm run dev
```
*   The server runs on **http://localhost:3000**
*   The frontend is served statically by the backend

### 5. Open the Application
Open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔍 Verification Steps
1.  **Run MongoDB**: Ensure MongoDB service is active on port 27017
2.  **`npm run seed`**: Verify "Database seeded successfully!" message in terminal
3.  **`npm run dev`**: Verify "Server running on port 3000" message
4.  **Open Browser**: Go to `http://localhost:3000`
5.  **Test Solutions Display**: Confirm solution cards are visible

---

## 📡 API Endpoints

### GET `/api/solutions`
Fetches all contest solutions.
```json
{
  "success": true,
  "count": 25,
  "data": [
    {
      "_id": "...",
      "problemName": "Maximum Subarray Sum",
      "contestName": "CodeChef Starters 115",
      "difficulty": "Medium",
      "cppCode": "...",
      "explanation": "..."
    }
  ]
}
```

### GET `/api/solutions?search=subarray`
Search solutions by problem or contest name.

### GET `/api/solutions?contest=CodeChef`
Filter solutions by contest name.

---

## 📂 Project Structure
```
contest-solutions/
├── models/
│   └── Solution.js          # Mongoose schema for solutions
├── public/
│   ├── index.html           # Frontend HTML
│   ├── styles.css           # Styling
│   └── script.js            # Frontend JavaScript
├── server.js                # Express server & API routes
├── seed.js                  # Database seeding script
├── package.json
└── README.md
```

---

## 💼 Key Features for Interviews
*   **Full-Stack Development**: Complete MERN-style application (with Vanilla JS instead of React)
*   **Database Design**: Efficient schema design for contest solutions
*   **Search & Filter Logic**: Client-side and server-side filtering implementation
*   **Clean Code**: Well-organized, maintainable codebase
*   **Error Handling**: Proper error handling on both frontend and backend
*   **RESTful API Design**: Following REST principles for API endpoints

## 🚀 Deployment
*   **Backend**: Deploy to Render/Railway
*   **Database**: Use MongoDB Atlas for cloud database
*   **Environment Variables**: Set `MONGODB_URI` for production database connection
*   **Frontend**: Served automatically by Express (monolithic deployment)
