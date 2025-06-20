# BlogVerse - Modern MERN Stack Blogging Platform with AI

BlogVerse is a full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), enhanced with AI-powered features and a modern, responsive UI/UX design.

![BlogVerse Banner](https://source.unsplash.com/random/1200x400/?blog)

## Features

### Core Functionality

- **User Authentication**: Secure registration and login system
- **Content Management**: Create, read, update, and delete blog posts
- **Responsive Design**: Optimized for all devices and screen sizes
- **Rich Text Editing**: Advanced editor with formatting options

### AI-Powered Features

#### AI Trend Analyzer (`/trend`)

Discover trending topics to write about:

- Integrates **Reddit API** to fetch currently trending articles
- Uses **AI** to analyze trending topics and sentiment
- Recommends personalized topics based on user interest and activity
- Provides content angle suggestions for each trend

![Trend Analyzer](https://github.com/user-attachments/assets/7a155917-6420-4151-bd2a-eda5cc945d83)

#### AI Article Summary (`/articles`)

Get quick insights from lengthy content:

- Summarize articles by URL or pasted text
- Extract key points and main ideas
- Save summaries for later reference
- Adjustable summary length and complexity

![Article Summary](https://github.com/user-attachments/assets/b7062f51-a3db-4d08-8ba7-740c598d6c45)

#### AI Personality Generator (`/generate`)

Create content that sounds like you:

1. **Writing Style Input**: Paste your past writing to learn your style
2. **Topic Selection**: Choose what you want to write about
3. **Mood Setting**: Select your desired emotional tone
4. **Advanced Controls**: Adjust complexity and length

![AI Generator](https://github.com/user-attachments/assets/446b9d6c-5c94-4092-9f6c-81234783777e)

### Enhanced User Experience

- **Immersive Reading Mode**: Distraction-free content consumption
- **Reading Progress Tracking**: Visual progress indicator while reading
- **Content Discovery**: Personalized recommendations and trending topics
- **Social Features**: Comments, likes, and sharing capabilities
- **Bookmarking**: Save favorite articles for later reading

## Project Structure

```
BlogVerse/
├── client/             # Frontend React application
│   ├── public/         # Static files
│   ├── src/            # React source code
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── theme/      # Design system
│   │   ├── utils/      # Helper functions
│   │   └── App.js      # Main application component
├── server/             # Backend Node.js/Express server
│   ├── controllers/    # Request handlers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Helper functions
│   ├── .env            # Environment variables
│   └── server.js       # Main server file
├── .gitignore          # Git ignore file
├── package.json        # Root package.json
└── README.md           # Project documentation
```

## Technology Stack

### Frontend
- **React.js**: UI library
- **Material UI**: Component library
- **React Router**: Navigation
- **React Quill**: Rich text editor
- **Framer Motion**: Animations
- **Axios**: API requests

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **Azure OpenAI API**: AI capabilities

### DevOps
- **Git**: Version control
- **npm**: Package management
- **ESLint**: Code linting
- **Prettier**: Code formatting

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)
* MongoDB Atlas account or local MongoDB installation
* Azure OpenAI API key (for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blogverse.git
cd blogverse
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the `server` directory:
```
JWT_SECRET=your-very-secure-secret-key-12345
MONGODB_URI=mongodb://localhost/blogverse
PORT=8000
AZURE_OPENAI_KEY=your-azure-openai-api-key
AZURE_OPENAI_ENDPOINT=your-azure-openai-endpoint
REDDIT_CLIENT_ID=your-reddit-client-id
REDDIT_CLIENT_SECRET=your-reddit-client-secret
```

### Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd server
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

#### Production Build

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the production server:
```bash
cd ../server
npm start
```

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/7f6f0a8d-244d-4adb-8ee6-e846d6b79b89)

### Post Reading Experience
![Post](https://github.com/user-attachments/assets/62915180-7e07-4f50-b625-8db86334f856)

### AI Article Summary
![Article Summary](https://github.com/user-attachments/assets/b7062f51-a3db-4d08-8ba7-740c598d6c45)

### AI Trend Analyzer
![Trend Page](https://github.com/user-attachments/assets/7a155917-6420-4151-bd2a-eda5cc945d83)

### AI Content Generator
![Generate](https://github.com/user-attachments/assets/446b9d6c-5c94-4092-9f6c-81234783777e)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Material UI](https://mui.com/) for the component library
- [React Quill](https://github.com/zenoamaro/react-quill) for the rich text editor
- [Azure OpenAI](https://azure.microsoft.com/en-us/services/cognitive-services/openai-service/) for AI capabilities
- [Unsplash](https://unsplash.com/) for the placeholder images
