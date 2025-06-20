# Chai & Chapters - AI-Powered Blogging Platform | HackTheLLM Submission

Chai & Chapters is an intelligent blogging platform built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), enhanced with LLM-powered features that transform the blogging experience through personalized content generation, trend analysis, and smart summarization.

## 🚀 HackTheLLM Submission Details

### How LLMs Power BlogVerse

Our platform leverages Large Language Models in three innovative ways:

1. **AI Trend Analyzer**: Combines Reddit API data with LLM analysis to identify trending topics and generate personalized content recommendations based on user interests.

2. **Smart Article Summarization**: Uses LLM capabilities to transform lengthy articles into concise, informative summaries while preserving key insights.

3. **Personality-Driven Content Generator**: Our flagship feature analyzes a user's writing style, preferred topics, and current mood to generate blog content that authentically reflects their unique voice.

### Demo & Documentation

- [Demo Video](https://youtube.com/your-demo-link) (3-minute walkthrough)
- [GitHub Repository](https://github.com/yourusername/Project-Blog)
- [Devpost Submission](https://devpost.com/your-submission-link)

## Project Structure

```
MERN-BLOG/
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   └── utils/      # Utility functions
├── server/             # Backend Node.js/Express server
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── services/       # LLM integration services
│   ├── node_modules/   # Backend dependencies
│   ├── .env            # Environment variables
│   └── server.js       # Main server file
├── package.json        # Root package.json
└── package-lock.json   # Dependency lock file
```

## LLM Integration Architecture

BlogVerse integrates LLMs through a custom middleware layer that:

1. **Processes user inputs** (writing samples, topic preferences, mood indicators)
2. **Constructs optimized prompts** for different use cases
3. **Handles API communication** with the LLM provider
4. **Post-processes responses** for formatting and presentation
5. **Caches common requests** to improve performance and reduce API costs

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)
* MongoDB Atlas account or local MongoDB installation
* API key for your preferred LLM provider (OpenAI, Claude, etc.)

### Configuration

1. Create a `.env` file in the `server` directory with the following variables:

```
JWT_SECRET=your-very-secure-secret-key-12345
MONGODB_URI=mongodb://localhost/mern-blog
PORT=8000
LLM_API_KEY=your-llm-api-key
LLM_PROVIDER=openai  # or claude, mistral, etc.
REDDIT_API_KEY=your-reddit-api-key
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

Runs at: `http://localhost:8000`

## Key Features

### Core Features
* User authentication (Register/Login)
* Create, read, and delete blog posts
* Responsive UI with clean design

### LLM-Powered Features

#### AI Trend Analyzer (`/trend`)

* Integrates **Reddit API** to fetch currently trending articles
* Uses **LLM** to analyze trending topics and extract key themes
* Recommends personalized topics based on user interest and activity
* Generates content outlines for trending topics with a single click

#### AI Article Summary (`/articles`)

* Allows users to input article URLs or text
* Summarizes lengthy content into bite-sized takeaways using LLM
* Provides different summary lengths (brief, standard, detailed)
* Extracts key points and generates discussion questions

#### AI Personality Generator (`/generate`)

Create content tailored to your personal style and mood:

1. **Writing Style Input**: Paste your past text/chat/content to learn your style
2. **Topic Selection**: Choose the article topic you want to generate
3. **Mood Setting**: Select your current mood (e.g., Happy, Angry, Reflective) to personalize tone

The result? A blog post that sounds like *you*—written in your style, on your topic, in your mood.

## Screenshots Preview

Here's a quick look at what you can expect inside **BlogVerse**:

---

### Home Page

![Home Page](https://github.com/user-attachments/assets/7f6f0a8d-244d-4adb-8ee6-e846d6b79b89)

---

### Quick Article Summary

![Article-Quick Summary](https://github.com/user-attachments/assets/b7062f51-a3db-4d08-8ba7-740c598d6c45)

---

### Post

Create and read beautifully formatted blog posts.

![Post](https://github.com/user-attachments/assets/62915180-7e07-4f50-b625-8db86334f856)

---

### Trending Topics

Stay updated with trending articles using Reddit + LLM insights.

![Trend Page](https://github.com/user-attachments/assets/7a155917-6420-4151-bd2a-eda5cc945d83)

---

### AI Generator

Generate articles based on your writing style, topic, and mood.

![Generate](https://github.com/user-attachments/assets/446b9d6c-5c94-4092-9f6c-81234783777e)

---

## Technologies Used

* **Frontend**: React.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Authentication**: JSON Web Tokens (JWT)
* **LLM Integration**: OpenAI API (configurable for other providers)
* **External API**: Reddit API
* **Styling**: CSS

## Future Enhancements

* Multi-modal content generation (text + images)
* Collaborative writing with AI assistance
* Sentiment analysis for reader feedback
* Content optimization suggestions

## Team Members

* [Your Name](https://github.com/yourusername)
* [Team Member 2](https://github.com/teammember2)
* [Team Member 3](https://github.com/teammember3)

## Hackathon Journey

From our initial idea to working prototype, we've focused on creating a platform that demonstrates the practical application of LLMs in content creation while maintaining the human touch that makes blogging personal and engaging.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change or improve.
