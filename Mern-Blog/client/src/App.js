// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { AuthProvider } from "./components/AuthContext";
import About from "./components/About";
import Profile from "./components/Profile";
import Trend from "./components/Trend";
import Generate from "./components/generate";
import theme from "./theme";
import { Box, Container } from "@mui/material";

// Import fonts
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Navbar />
          <Box component="main" sx={{ pt: 2, pb: 6 }}>
            <Container maxWidth="xl">
              <Routes>
                {/* Auth routes */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                
                {/* Content routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/articles/:id" element={<Article />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/post" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/trend" element={<Trend />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
