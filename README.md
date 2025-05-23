# BlogVerse - MERN Stack Blogging Application

BlogVerse is a full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), now enhanced with AI-powered content features for smarter blogging and user engagement.

## Project Structure

```
MERN-BLOG/
├── client/             # Frontend React application
├── server/             # Backend Node.js/Express server
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── node_modules/   # Backend dependencies
│   ├── .env            # Environment variables
│   └── server.js       # Main server file
├── package.json        # Root package.json
└── package-lock.json   # Dependency lock file
```

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)
* MongoDB Atlas account or local MongoDB installation

### Configuration

1. Create a `.env` file in the `server` directory with the following variables:

```
JWT_SECRET=your-very-secure-secret-key-12345
MONGODB_URI=mongodb://localhost/mern-blog
PORT=8000
```

## Running the Application

### Frontend Development Server

```bash
cd MERN-BLOG/client
npm start
```

Runs at: `http://localhost:3000`

### Backend Server

```bash
cd MERN-BLOG/server
npm start
```

Runs at: `http://localhost:5000`

## Features

* User authentication (Register/Login)
* Create, read, and delete blog posts
* Responsive UI with clean design

### 🔥 New AI-Powered Features

#### 🧠 AI Trend Analyzer (`/trend`)

* Integrates **Reddit API** to fetch currently trending articles.
* Uses **AI** to analyze trending topics.
* Recommends personalized topics based on user interest and activity.

#### ✍️ AI Article Summary (`/articles`)

* Allows users to input article URLs or text.
* Summarizes lengthy content into bite-sized takeaways using AI.
* Ideal for readers who want quick insights before diving deep.

#### 🧬 AI Personality Generator (`/generate`)

Create content tailored to your personal style and mood:

1. **Writing Style Input**: Paste your past text/chat/content to learn your style.
2. **Topic Selection**: Choose the article topic you want to generate.
3. **Mood Setting**: Select your current mood (e.g., Happy, Angry, Reflective) to personalize tone.

The result? A blog post that sounds like *you*—written in your style, on your topic, in your mood.

## Technologies Used

* **Frontend**: React.js, React Router, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JSON Web Tokens (JWT)
* **AI Services**: OpenAI API (or similar)
* **External API**: Reddit API
* **Styling**: CSS

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change or improve.
