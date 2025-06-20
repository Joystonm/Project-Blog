# BlogVerse Implementation Guide - Phase 1

This guide provides detailed implementation steps for the first phase of UI/UX improvements for BlogVerse.

## 1. Setting Up the Design System

### Step 1: Install Dependencies

```bash
cd Mern-Blog/client
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install styled-components
npm install framer-motion
```

### Step 2: Create Theme Configuration

Create a new file at `client/src/theme/index.js`:

```javascript
import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: {
    main: '#3a86ff',
    light: '#83b5ff',
    dark: '#0a58ca',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#8338ec',
    light: '#a56ef5',
    dark: '#6019c0',
    contrastText: '#ffffff',
  },
  accent: {
    main: '#ff006e',
    light: '#ff4d94',
    dark: '#c5004f',
    contrastText: '#ffffff',
  },
  success: {
    main: '#38b000',
    light: '#70c94f',
    dark: '#2a8c00',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ffbe0b',
    light: '#ffce4d',
    dark: '#d99e00',
    contrastText: '#000000',
  },
  error: {
    main: '#d90429',
    light: '#e34a63',
    dark: '#a3001e',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#121212',
  },
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    success: colors.success,
    grey: colors.grey,
    background: {
      default: colors.grey[50],
      paper: '#ffffff',
    },
    text: {
      primary: colors.grey[800],
      secondary: colors.grey[600],
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    code: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.05)',
    '0px 8px 16px rgba(0, 0, 0, 0.05)',
    '0px 16px 24px rgba(0, 0, 0, 0.05)',
    '0px 24px 32px rgba(0, 0, 0, 0.05)',
    '0px 32px 40px rgba(0, 0, 0, 0.05)',
    // ... rest of the shadows
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(45deg, ${colors.primary.main} 30%, ${colors.primary.light} 90%)`,
        },
        containedSecondary: {
          background: `linear-gradient(45deg, ${colors.secondary.main} 30%, ${colors.secondary.light} 90%)`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});

export default theme;
```

### Step 3: Update App Entry Point

Modify `client/src/index.js` to include the theme provider:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### Step 4: Create Component Library

Create a components directory with reusable UI components:

```bash
mkdir -p client/src/components/ui
```

## 2. Layout & Navigation Implementation
### Step 1: Create Layout Components

Create a new file at `client/src/components/layout/MainLayout.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Home as HomeIcon,
  TrendingUp as TrendingUpIcon,
  Bookmark as BookmarkIcon,
  Create as CreateIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  AccountCircle,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Trending', icon: <TrendingUpIcon />, path: '/trend' },
    { text: 'Create Post', icon: <CreateIcon />, path: '/create' },
    { text: 'My Articles', icon: <BookmarkIcon />, path: '/articles' },
    { text: 'AI Generator', icon: <CreateIcon />, path: '/generate' },
  ];

  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            BlogVerse
          </Typography>
          <SearchBar>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt="User Profile"
                src="/static/images/avatar/1.jpg"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBarStyled>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              ml: 2,
            }}
          >
            BlogVerse
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor:
                  location.pathname === item.path
                    ? 'rgba(58, 134, 255, 0.08)'
                    : 'transparent',
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(58, 134, 255, 0.04)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path
                        ? 'primary.main'
                        : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight:
                        location.pathname === item.path ? 600 : 400,
                      color:
                        location.pathname === item.path
                          ? 'primary.main'
                          : 'inherit',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default MainLayout;
```

### Step 2: Update App.js to Use the New Layout

Modify `client/src/App.js`:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import TrendPage from './pages/TrendPage';
import ArticlesPage from './pages/ArticlesPage';
import GeneratePage from './pages/GeneratePage';
import PostPage from './pages/PostPage';
import CreatePostPage from './pages/CreatePostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected routes with layout */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <MainLayout>
                <HomePage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/trend"
          element={
            isAuthenticated ? (
              <MainLayout>
                <TrendPage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/articles"
          element={
            isAuthenticated ? (
              <MainLayout>
                <ArticlesPage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/generate"
          element={
            isAuthenticated ? (
              <MainLayout>
                <GeneratePage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/post/:id"
          element={
            isAuthenticated ? (
              <MainLayout>
                <PostPage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/create"
          element={
            isAuthenticated ? (
              <MainLayout>
                <CreatePostPage />
              </MainLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## 3. Home Page Redesign
### Step 1: Create Reusable UI Components

First, let's create some reusable components for the home page:

Create `client/src/components/ui/PostCard.jsx`:

```jsx
import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  BookmarkBorder as BookmarkIcon,
  Share as ShareIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  fontWeight: 500,
}));

const ReadingTime = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  padding: '2px 8px',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
}));

const PostCard = ({ post }) => {
  const {
    id,
    title,
    excerpt,
    coverImage,
    author,
    category,
    readingTime,
    publishedAt,
    viewCount,
  } = post;

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledCard>
      <CardMediaStyled image={coverImage} title={title}>
        <CategoryChip label={category} size="small" />
        <ReadingTime>{readingTime} min read</ReadingTime>
      </CardMediaStyled>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component={Link}
          to={`/post/${id}`}
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'block',
            mb: 1,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {excerpt}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={author.avatar}
              alt={author.name}
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {author.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formattedDate}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 1,
                color: 'text.secondary',
              }}
            >
              <VisibilityIcon sx={{ fontSize: 16, mr: 0.5 }} />
              <Typography variant="caption">{viewCount}</Typography>
            </Box>
            <IconButton size="small">
              <BookmarkIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default PostCard;
```

Create `client/src/components/ui/FeaturedPostCarousel.jsx`:

```jsx
import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Chip,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  position: 'relative',
  '& .slick-dots': {
    bottom: -40,
    '& li button:before': {
      fontSize: 12,
      color: theme.palette.primary.main,
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
}));

const FeaturedCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  height: 400,
  boxShadow: theme.shadows[4],
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
  },
}));

const ContentOverlay = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  color: '#fff',
  zIndex: 1,
  padding: theme.spacing(3),
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  left: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontWeight: 500,
  zIndex: 1,
}));

const FeaturedPostCarousel = ({ featuredPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {featuredPosts.map((post) => (
          <Box key={post.id} sx={{ p: 1 }}>
            <FeaturedCard>
              <CardMediaStyled image={post.coverImage} title={post.title} />
              <CategoryChip label={post.category} />
              <ContentOverlay>
                <Typography
                  variant="h4"
                  component={Link}
                  to={`/post/${post.id}`}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    display: 'block',
                    mb: 2,
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, opacity: 0.9, maxWidth: '80%' }}
                >
                  {post.excerpt}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={post.author.avatar}
                      alt={post.author.name}
                      sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {post.author.name}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        {' · '}
                        {post.readingTime} min read
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to={`/post/${post.id}`}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Read More
                  </Button>
                </Box>
              </ContentOverlay>
            </FeaturedCard>
          </Box>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default FeaturedPostCarousel;
```

### Step 2: Create the Home Page Component

Create `client/src/pages/HomePage.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Skeleton,
  Divider,
} from '@mui/material';
import {
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  TrendingUp as TrendingUpIcon,
  AccessTime as AccessTimeIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import FeaturedPostCarousel from '../components/ui/FeaturedPostCarousel';
import PostCard from '../components/ui/PostCard';
import { Link } from 'react-router-dom';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  position: 'relative',
  display: 'inline-block',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 60,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
  },
}));

// Mock data for featured posts
const mockFeaturedPosts = [
  {
    id: '1',
    title: 'The Future of AI in Content Creation',
    excerpt:
      'Discover how artificial intelligence is revolutionizing the way we create and consume content in the digital age.',
    coverImage: 'https://source.unsplash.com/random/1200x800/?ai',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    category: 'Technology',
    readingTime: 8,
    publishedAt: '2023-06-15T10:30:00Z',
    viewCount: 1245,
  },
  {
    id: '2',
    title: 'Sustainable Living: Small Changes, Big Impact',
    excerpt:
      'Learn how making small adjustments to your daily routine can contribute to a more sustainable and eco-friendly lifestyle.',
    coverImage: 'https://source.unsplash.com/random/1200x800/?sustainability',
    author: {
      name: 'Emma Roberts',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    category: 'Lifestyle',
    readingTime: 6,
    publishedAt: '2023-06-10T14:45:00Z',
    viewCount: 982,
  },
  {
    id: '3',
    title: 'The Psychology of Productivity',
    excerpt:
      'Explore the mental factors that influence productivity and discover evidence-based strategies to optimize your workflow.',
    coverImage: 'https://source.unsplash.com/random/1200x800/?productivity',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    category: 'Psychology',
    readingTime: 10,
    publishedAt: '2023-06-05T09:15:00Z',
    viewCount: 1567,
  },
];

// Mock data for regular posts
const mockPosts = [
  {
    id: '4',
    title: 'Mastering JavaScript Promises',
    excerpt:
      'A comprehensive guide to understanding and implementing JavaScript Promises for better asynchronous code.',
    coverImage: 'https://source.unsplash.com/random/800x600/?javascript',
    author: {
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    category: 'Programming',
    readingTime: 12,
    publishedAt: '2023-06-01T11:20:00Z',
    viewCount: 2341,
  },
  // Add more mock posts here...
  {
    id: '5',
    title: 'The Art of Mindful Eating',
    excerpt:
      'Discover how being present and mindful during meals can transform your relationship with food and improve overall well-being.',
    coverImage: 'https://source.unsplash.com/random/800x600/?food',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    category: 'Health',
    readingTime: 7,
    publishedAt: '2023-05-28T08:45:00Z',
    viewCount: 1876,
  },
  {
    id: '6',
    title: 'Building Resilience in Uncertain Times',
    excerpt:
      'Strategies and practices to develop emotional resilience and navigate through challenging and unpredictable situations.',
    coverImage: 'https://source.unsplash.com/random/800x600/?resilience',
    author: {
      name: 'James Wilson',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    category: 'Personal Growth',
    readingTime: 9,
    publishedAt: '2023-05-25T15:30:00Z',
    viewCount: 1543,
  },
  {
    id: '7',
    title: 'The Science of Sleep',
    excerpt:
      'Explore the latest research on sleep and learn evidence-based techniques to improve your sleep quality and overall health.',
    coverImage: 'https://source.unsplash.com/random/800x600/?sleep',
    author: {
      name: 'Lisa Chen',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    category: 'Health',
    readingTime: 8,
    publishedAt: '2023-05-20T09:10:00Z',
    viewCount: 2105,
  },
  {
    id: '8',
    title: 'Effective Remote Team Management',
    excerpt:
      'Best practices and tools for leading distributed teams and maintaining productivity in remote work environments.',
    coverImage: 'https://source.unsplash.com/random/800x600/?remote-work',
    author: {
      name: 'Robert Taylor',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    category: 'Business',
    readingTime: 11,
    publishedAt: '2023-05-18T13:25:00Z',
    viewCount: 1789,
  },
  {
    id: '9',
    title: 'Introduction to Machine Learning',
    excerpt:
      'A beginner-friendly guide to understanding the fundamentals of machine learning and its applications.',
    coverImage: 'https://source.unsplash.com/random/800x600/?machine-learning',
    author: {
      name: 'Jennifer Lee',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    category: 'Technology',
    readingTime: 14,
    publishedAt: '2023-05-15T10:50:00Z',
    viewCount: 3210,
  },
];

const HomePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('latest');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewModeChange = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setLoading(true);

    // Simulate API call with different sorting
    setTimeout(() => {
      let sortedPosts = [...mockPosts];
      
      if (newFilter === 'popular') {
        sortedPosts.sort((a, b) => b.viewCount - a.viewCount);
      } else if (newFilter === 'trending') {
        // In a real app, this would use a different metric
        sortedPosts.sort((a, b) => b.viewCount / b.readingTime - a.viewCount / a.readingTime);
      } else {
        // 'latest' is default
        sortedPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      }
      
      setPosts(sortedPosts);
      setLoading(false);
    }, 500);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome section for logged-in users */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome back, User!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Discover new stories, share your thoughts, and connect with writers around the world.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/create"
            sx={{ borderRadius: 2 }}
          >
            Write a Story
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/trend"
            sx={{ borderRadius: 2 }}
          >
            Explore Trends
          </Button>
        </Box>
      </Box>

      {/* Featured posts carousel */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle variant="h5" component="h2">
          Featured Stories
        </SectionTitle>
        <FeaturedPostCarousel featuredPosts={mockFeaturedPosts} />
      </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Latest posts section */}
      <Box>
        <FilterContainer>
          <Box>
            <SectionTitle variant="h5" component="h2">
              Latest Stories
            </SectionTitle>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                size="small"
                startIcon={<AccessTimeIcon />}
                color={filter === 'latest' ? 'primary' : 'inherit'}
                onClick={() => handleFilterChange('latest')}
                sx={{
                  fontWeight: filter === 'latest' ? 600 : 400,
                  '&:hover': { backgroundColor: 'rgba(58, 134, 255, 0.04)' },
                }}
              >
                Latest
              </Button>
              <Button
                size="small"
                startIcon={<TrendingUpIcon />}
                color={filter === 'trending' ? 'primary' : 'inherit'}
                onClick={() => handleFilterChange('trending')}
                sx={{
                  fontWeight: filter === 'trending' ? 600 : 400,
                  '&:hover': { backgroundColor: 'rgba(58, 134, 255, 0.04)' },
                }}
              >
                Trending
              </Button>
              <Button
                size="small"
                startIcon={<FavoriteIcon />}
                color={filter === 'popular' ? 'primary' : 'inherit'}
                onClick={() => handleFilterChange('popular')}
                sx={{
                  fontWeight: filter === 'popular' ? 600 : 400,
                  '&:hover': { backgroundColor: 'rgba(58, 134, 255, 0.04)' },
                }}
              >
                Popular
              </Button>
            </Box>
          </Box>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            aria-label="view mode"
            size="small"
          >
            <ToggleButton value="grid" aria-label="grid view">
              <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list view">
              <ViewListIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </FilterContainer>

        {loading ? (
          // Loading skeleton
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} md={viewMode === 'grid' ? 4 : 12} key={item}>
                <Box sx={{ width: '100%', height: viewMode === 'grid' ? 400 : 200 }}>
                  <Skeleton variant="rectangular" width="100%" height={viewMode === 'grid' ? 200 : 140} />
                  <Box sx={{ pt: 1 }}>
                    <Skeleton width="80%" height={28} />
                    <Skeleton width="100%" />
                    <Skeleton width="60%" />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton width={100} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} sm={viewMode === 'grid' ? 6 : 12} md={viewMode === 'grid' ? 4 : 12} key={post.id}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ borderRadius: 2, px: 4 }}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
```

## 4. Post Reading Experience
### Step 1: Create Post Reading Components

First, let's create components for the post reading experience:

Create `client/src/components/ui/ReadingProgressBar.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

const ProgressContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: theme.zIndex.appBar + 1,
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  backgroundColor: 'transparent',
  '.MuiLinearProgress-bar': {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
}));

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setProgress(scrollPercent * 100);
    };

    window.addEventListener('scroll', calculateScrollProgress);

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <ProgressContainer>
      <StyledLinearProgress variant="determinate" value={progress} />
    </ProgressContainer>
  );
};

export default ReadingProgressBar;
```

Create `client/src/components/ui/FloatingActionBar.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  IconButton,
  Tooltip,
  Zoom,
  Snackbar,
  Alert,
  Typography,
} from '@mui/material';
import {
  ThumbUp as ThumbUpIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Share as ShareIcon,
  TextFields as TextFieldsIcon,
  FormatSize as FormatSizeIcon,
  Comment as CommentIcon,
} from '@mui/icons-material';

const ActionBarContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: theme.spacing(2),
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  zIndex: 100,
  [theme.breakpoints.down('md')]: {
    left: 'auto',
    right: theme.spacing(2),
    top: 'auto',
    bottom: theme.spacing(2),
    flexDirection: 'row',
  },
}));

const CounterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(0.5),
}));

const FloatingActionBar = ({ postId, initialLikes = 0, initialBookmarked = false }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [fontSizeMode, setFontSizeMode] = useState('medium');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      showSnackbar('Post liked!');
    }
    // In a real app, you would make an API call here
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    showSnackbar(bookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
    // In a real app, you would make an API call here
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showSnackbar('Link copied to clipboard!');
    }
  };

  const handleFontSizeChange = () => {
    const modes = ['small', 'medium', 'large'];
    const currentIndex = modes.indexOf(fontSizeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setFontSizeMode(modes[nextIndex]);
    
    // Apply font size change to the article content
    const articleElement = document.querySelector('.article-content');
    if (articleElement) {
      articleElement.classList.remove('font-small', 'font-medium', 'font-large');
      articleElement.classList.add(`font-${modes[nextIndex]}`);
    }
    
    showSnackbar(`Font size: ${modes[nextIndex]}`);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <ActionBarContainer>
        <CounterBox>
          <Tooltip title={liked ? "Unlike" : "Like"} placement="right" TransitionComponent={Zoom}>
            <IconButton onClick={handleLike} color={liked ? "primary" : "default"}>
              <ThumbUpIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="caption" fontWeight={500}>
            {likes}
          </Typography>
        </CounterBox>
        
        <Tooltip title="Comments" placement="right" TransitionComponent={Zoom}>
          <IconButton component="a" href="#comments">
            <CommentIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title={bookmarked ? "Remove bookmark" : "Bookmark"} placement="right" TransitionComponent={Zoom}>
          <IconButton onClick={handleBookmark} color={bookmarked ? "primary" : "default"}>
            {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Share" placement="right" TransitionComponent={Zoom}>
          <IconButton onClick={handleShare}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Adjust font size" placement="right" TransitionComponent={Zoom}>
          <IconButton onClick={handleFontSizeChange}>
            {fontSizeMode === 'small' && <TextFieldsIcon fontSize="small" />}
            {fontSizeMode === 'medium' && <TextFieldsIcon />}
            {fontSizeMode === 'large' && <FormatSizeIcon />}
          </IconButton>
        </Tooltip>
      </ActionBarContainer>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FloatingActionBar;
```

### Step 2: Create the Post Page Component

Create `client/src/pages/PostPage.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  IconButton,
  Skeleton,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Reddit as RedditIcon,
} from '@mui/icons-material';
import ReadingProgressBar from '../components/ui/ReadingProgressBar';
import FloatingActionBar from '../components/ui/FloatingActionBar';
import PostCard from '../components/ui/PostCard';

// Styled components
const HeroImage = styled('div')(({ theme, image }) => ({
  height: 500,
  width: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    height: 300,
  },
}));

const ArticleContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(2),
  '& .font-small': {
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  '& .font-medium': {
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
  '& .font-large': {
    fontSize: '1.3rem',
    lineHeight: 1.8,
  },
}));

const ArticleContent = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  '& p': {
    marginBottom: theme.spacing(3),
  },
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    fontStyle: 'italic',
    margin: theme.spacing(3, 0),
    color: theme.palette.text.secondary,
  },
  '& img': {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& code': {
    fontFamily: '"JetBrains Mono", monospace',
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    fontSize: '0.9em',
  },
  '& pre': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    overflowX: 'auto',
    marginBottom: theme.spacing(3),
    '& code': {
      backgroundColor: 'transparent',
      color: 'inherit',
      padding: 0,
    },
  },
}));

const AuthorCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
}));

const CommentCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
}));

// Mock data for a single post
const mockPost = {
  id: '1',
  title: 'The Future of AI in Content Creation',
  content: `
    <p>Artificial Intelligence (AI) is rapidly transforming the landscape of content creation, offering new tools and capabilities that were once the realm of science fiction. From automated writing assistants to sophisticated image generators, AI technologies are becoming increasingly integrated into the creative process.</p>
    
    <h2>The Rise of AI Writing Tools</h2>
    
    <p>In recent years, we've witnessed the emergence of powerful language models capable of generating human-like text. These models, trained on vast datasets of written content, can now produce articles, stories, and even poetry that can be difficult to distinguish from human-written work.</p>
    
    <p>Content creators are increasingly using these tools to:</p>
    
    <ul>
      <li>Generate initial drafts or outlines</li>
      <li>Overcome writer's block</li>
      <li>Produce variations of existing content</li>
      <li>Create personalized content at scale</li>
    </ul>
    
    <blockquote>
      "AI won't replace writers, but writers who use AI will replace those who don't." - Anonymous
    </blockquote>
    
    <h2>Visual Content Generation</h2>
    
    <p>The advancements in AI-generated imagery have been equally impressive. Tools like DALL-E, Midjourney, and Stable Diffusion can create stunning visuals from text descriptions, opening new possibilities for illustrators, designers, and visual artists.</p>
    
    <p>These technologies are democratizing visual content creation, allowing individuals without traditional artistic training to bring their visions to life through simple text prompts.</p>
    
    <h2>Ethical Considerations</h2>
    
    <p>As with any transformative technology, the rise of AI in content creation brings important ethical questions:</p>
    
    <h3>Attribution and Ownership</h3>
    
    <p>When content is co-created with AI, questions of authorship and intellectual property become complex. Who owns the rights to AI-generated content? How should AI assistance be attributed?</p>
    
    <h3>Authenticity and Transparency</h3>
    
    <p>Should audiences be informed when content has been created or enhanced by AI? As these tools become more sophisticated, maintaining transparency about their use becomes increasingly important.</p>
    
    <h3>Impact on Creative Professions</h3>
    
    <p>How will the widespread adoption of AI tools affect professional writers, artists, and designers? While these technologies can enhance human creativity, they may also disrupt traditional career paths and workflows.</p>
    
    <h2>The Future is Collaborative</h2>
    
    <p>Despite concerns about AI replacing human creators, the most promising future appears to be one of collaboration. AI tools are most effective when they augment human creativity rather than attempt to replace it.</p>
    
    <p>By handling routine aspects of content creation, AI can free humans to focus on the elements that require emotional intelligence, cultural context, and lived experience—qualities that remain uniquely human.</p>
    
    <h2>Conclusion</h2>
    
    <p>The integration of AI into content creation represents both an opportunity and a challenge. As these technologies continue to evolve, creators who learn to effectively collaborate with AI tools will likely gain significant advantages in terms of productivity and creative possibilities.</p>
    
    <p>The key will be finding the right balance—using AI to enhance human creativity while preserving the authentic human voice and perspective that gives content its true value.</p>
  `,
  coverImage: 'https://source.unsplash.com/random/1200x800/?ai',
  author: {
    id: 'a1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Alex is a technology writer and AI researcher with over 10 years of experience in the field. He specializes in making complex technological concepts accessible to general audiences.',
  },
  category: 'Technology',
  tags: ['Artificial Intelligence', 'Content Creation', 'Digital Media', 'Future Tech'],
  readingTime: 8,
  publishedAt: '2023-06-15T10:30:00Z',
  viewCount: 1245,
  comments: [
    {
      id: 'c1',
      author: {
        name: 'Emma Roberts',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      content: 'This is a fascinating perspective on AI and content creation. I particularly appreciate the emphasis on collaboration rather than replacement.',
      publishedAt: '2023-06-15T14:25:00Z',
      likes: 8,
    },
    {
      id: 'c2',
      author: {
        name: 'Michael Chen',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      content: 'I work in digital marketing and we\'ve already started incorporating AI tools into our content pipeline. The productivity gains are real, but so are the ethical questions you raised.',
      publishedAt: '2023-06-16T09:12:00Z',
      likes: 5,
    },
    {
      id: 'c3',
      author: {
        name: 'Sarah Williams',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
      content: 'Do you think there should be regulations requiring disclosure when content is AI-generated or AI-assisted?',
      publishedAt: '2023-06-16T11:30:00Z',
      likes: 3,
    },
  ],
};

// Mock data for related posts
const mockRelatedPosts = [
  {
    id: '2',
    title: 'Understanding Machine Learning Algorithms',
    excerpt: 'A beginner-friendly guide to the most common machine learning algorithms and their applications.',
    coverImage: 'https://source.unsplash.com/random/800x600/?algorithm',
    author: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    category: 'Technology',
    readingTime: 10,
    publishedAt: '2023-06-10T08:15:00Z',
    viewCount: 982,
  },
  {
    id: '3',
    title: 'Ethical Considerations in AI Development',
    excerpt: 'Exploring the moral and ethical challenges that arise as artificial intelligence becomes more advanced.',
    coverImage: 'https://source.unsplash.com/random/800x600/?ethics',
    author: {
      name: 'Emma Roberts',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    category: 'Technology',
    readingTime: 7,
    publishedAt: '2023-06-05T14:30:00Z',
    viewCount: 756,
  },
  {
    id: '4',
    title: 'The Impact of GPT Models on Digital Content',
    excerpt: 'How large language models are changing the way we create, consume, and think about online content.',
    coverImage: 'https://source.unsplash.com/random/800x600/?digital',
    author: {
      name: 'David Kim',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    category: 'Technology',
    readingTime: 9,
    publishedAt: '2023-06-01T11:45:00Z',
    viewCount: 1105,
  },
];

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [immersiveMode, setImmersiveMode] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch post data
    const timer = setTimeout(() => {
      setPost(mockPost);
      setRelatedPosts(mockRelatedPosts);
      setLoading(false);
      
      // Add CSS class for font size control
      const articleContent = document.querySelector('.article-content');
      if (articleContent) {
        articleContent.classList.add('font-medium');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would submit the comment to an API
    console.log('Comment submitted:', comment);
    setComment('');
    // You could add the new comment to the post.comments array here
  };

  const toggleImmersiveMode = () => {
    setImmersiveMode(!immersiveMode);
    
    // Apply immersive mode styles
    const sidebar = document.querySelector('.MuiDrawer-root');
    const appBar = document.querySelector('.MuiAppBar-root');
    
    if (sidebar && appBar) {
      if (!immersiveMode) {
        sidebar.style.display = 'none';
        appBar.style.display = 'none';
      } else {
        sidebar.style.display = '';
        appBar.style.display = '';
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 4, mb: 4 }} />
          <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Skeleton variant="circular" width={50} height={50} sx={{ mr: 2 }} />
            <Box>
              <Skeleton variant="text" width={120} />
              <Skeleton variant="text" width={160} />
            </Box>
          </Box>
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} variant="text" height={30} sx={{ mb: 1 }} />
          ))}
        </Box>
      </Container>
    );
  }

  return (
    <>
      <ReadingProgressBar />
      <FloatingActionBar postId={post.id} initialLikes={post.viewCount} />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <FormControlLabel
            control={
              <Switch
                checked={immersiveMode}
                onChange={toggleImmersiveMode}
                color="primary"
              />
            }
            label="Immersive Mode"
          />
        </Box>
        
        <HeroImage image={post.coverImage} />
        
        <ArticleContainer>
          <Box sx={{ mb: 4 }}>
            <Chip
              label={post.category}
              color="primary"
              size="small"
              sx={{ mb: 2 }}
            />
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {post.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {post.author.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                  <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ mr: 2 }}>
                    {formatDate(post.publishedAt)}
                  </Typography>
                  <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2">
                    {post.readingTime} min read
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Box>
          </Box>
          
          <ArticleContent
            variant="body1"
            component="div"
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 4 }}>
            <IconButton color="primary" aria-label="share on facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share on twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share on linkedin">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share on reddit">
              <RedditIcon />
            </IconButton>
          </Box>
          
          <AuthorCard>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar
                src={post.author.avatar}
                alt={post.author.name}
                sx={{ width: 80, height: 80 }}
              />
              <Box>
                <Typography variant="h6" gutterBottom>
                  Written by {post.author.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.author.bio}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 2 }}
                >
                  Follow
                </Button>
              </Box>
            </CardContent>
          </AuthorCard>
          
          <Divider sx={{ my: 6 }} />
          
          <Box id="comments" sx={{ mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Comments ({post.comments.length})
            </Typography>
            
            <Box component="form" onSubmit={handleCommentSubmit} sx={{ mb: 4 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Add a comment..."
                value={comment}
                onChange={handleCommentChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!comment.trim()}
              >
                Post Comment
              </Button>
            </Box>
            
            {post.comments.map((comment) => (
              <CommentCard key={comment.id}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {comment.author.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(comment.publishedAt)}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {comment.content}
                      </Typography>
                      <Button size="small" startIcon={<ThumbUpIcon />}>
                        {comment.likes}
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </CommentCard>
            ))}
          </Box>
        </ArticleContainer>
        
        <Divider sx={{ my: 6 }} />
        
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Related Articles
          </Typography>
          <Grid container spacing={3}>
            {relatedPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default PostPage;
```

## 5. Content Creation Experience
### Step 1: Install Rich Text Editor Dependencies

```bash
cd Mern-Blog/client
npm install react-quill quill-image-resize-module-react draft-js react-draft-wysiwyg draftjs-to-html html-to-draftjs
```

### Step 2: Create Editor Components

Create `client/src/components/editor/RichTextEditor.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Tabs, Tab } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const EditorContainer = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
}));

const QuillEditor = styled(ReactQuill)(({ theme }) => ({
  '& .ql-toolbar': {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRadius: 0,
  },
  '& .ql-container': {
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    height: 400,
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
  '& .ql-editor': {
    padding: theme.spacing(2),
    '&.ql-blank::before': {
      fontStyle: 'normal',
      color: theme.palette.text.secondary,
    },
  },
}));

const DraftEditor = styled(Box)(({ theme }) => ({
  '& .rdw-editor-toolbar': {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRadius: 0,
    padding: theme.spacing(1),
  },
  '& .rdw-editor-main': {
    padding: theme.spacing(2),
    height: 400,
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
}));

const PreviewContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  height: 450,
  overflowY: 'auto',
  fontSize: '1.1rem',
  lineHeight: 1.7,
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  '& p': {
    marginBottom: theme.spacing(2),
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    fontStyle: 'italic',
    margin: theme.spacing(2, 0),
    color: theme.palette.text.secondary,
  },
  '& img': {
    maxWidth: '100%',
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
}));

const RichTextEditor = ({ value, onChange }) => {
  const [editorType, setEditorType] = useState('quill');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [quillValue, setQuillValue] = useState(value || '');

  const handleTabChange = (event, newValue) => {
    setEditorType(newValue);
  };

  const handleQuillChange = (content) => {
    setQuillValue(content);
    onChange(content);
  };

  const handleDraftChange = (state) => {
    setEditorState(state);
    const htmlContent = draftToHtml(convertToRaw(state.getCurrentContent()));
    onChange(htmlContent);
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const draftToolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
    },
  };

  return (
    <EditorContainer>
      <Tabs
        value={editorType}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab value="quill" label="Rich Editor" />
        <Tab value="draft" label="Advanced Editor" />
        <Tab value="preview" label="Preview" />
      </Tabs>

      {editorType === 'quill' && (
        <QuillEditor
          value={quillValue}
          onChange={handleQuillChange}
          modules={quillModules}
          placeholder="Write your story here..."
        />
      )}

      {editorType === 'draft' && (
        <DraftEditor>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleDraftChange}
            toolbar={draftToolbarOptions}
            placeholder="Write your story here..."
          />
        </DraftEditor>
      )}

      {editorType === 'preview' && (
        <PreviewContainer dangerouslySetInnerHTML={{ __html: quillValue }} />
      )}
    </EditorContainer>
  );
};

export default RichTextEditor;
```

### Step 3: Create the Post Creation Page

Create `client/src/pages/CreatePostPage.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
  Chip,
  IconButton,
  Divider,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  Add as AddIcon,
  Close as CloseIcon,
  Save as SaveIcon,
  Publish as PublishIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import RichTextEditor from '../components/editor/RichTextEditor';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
}));

const ImagePreview = styled('div')(({ theme, image }) => ({
  height: 200,
  width: '100%',
  backgroundImage: image ? `url(${image})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: theme.shape.borderRadius,
  border: image ? 'none' : `2px dashed ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  position: 'relative',
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const categories = [
  'Technology',
  'Programming',
  'Health',
  'Lifestyle',
  'Business',
  'Science',
  'Travel',
  'Food',
  'Art',
  'Personal',
  'Other',
];

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCurrentTagChange = (event) => {
    setCurrentTag(event.target.value);
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTag();
    }
  };

  const handleExcerptChange = (event) => {
    setExcerpt(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
  };

  const handleSaveDraft = () => {
    if (!title) {
      showSnackbar('Please add a title for your post', 'error');
      return;
    }

    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      showSnackbar('Draft saved successfully!', 'success');
      // In a real app, you would save the post to the database
    }, 1000);
  };

  const handlePublish = () => {
    if (!validateForm()) {
      return;
    }
    
    setDialogOpen(true);
  };

  const confirmPublish = () => {
    setDialogOpen(false);
    setIsPublishing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsPublishing(false);
      showSnackbar('Post published successfully!', 'success');
      // In a real app, you would publish the post and redirect to the post page
    }, 1500);
  };

  const validateForm = () => {
    if (!title) {
      showSnackbar('Please add a title for your post', 'error');
      return false;
    }
    
    if (!content || content === '<p><br></p>') {
      showSnackbar('Please add content to your post', 'error');
      return false;
    }
    
    if (!coverImage) {
      showSnackbar('Please upload a cover image', 'error');
      return false;
    }
    
    if (!category) {
      showSnackbar('Please select a category', 'error');
      return false;
    }
    
    return true;
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Create New Post
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <StyledPaper sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Post Title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter an engaging title..."
              sx={{ mb: 3 }}
              InputProps={{
                sx: { fontSize: '1.5rem', fontWeight: 600 },
              }}
            />
            
            <Typography variant="h6" gutterBottom sx={{ mt: 2, mb: 2 }}>
              Content
            </Typography>
            <RichTextEditor value={content} onChange={handleContentChange} />
          </StyledPaper>
          
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Excerpt
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={excerpt}
              onChange={handleExcerptChange}
              placeholder="Write a brief summary of your post (will be displayed in post previews)"
              helperText={`${excerpt.length}/200 characters`}
              inputProps={{ maxLength: 200 }}
            />
          </StyledPaper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <StyledPaper sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Cover Image
            </Typography>
            <ImagePreview image={coverImage}>
              {!coverImage && (
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Button>
              )}
              {coverImage && (
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                  onClick={handleRemoveImage}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </ImagePreview>
            {coverImage && (
              <Button
                component="label"
                variant="outlined"
                size="small"
                startIcon={<CloudUploadIcon />}
                sx={{ mt: 1 }}
              >
                Change Image
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
            )}
          </StyledPaper>
          
          <StyledPaper sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Category
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={category}
              onChange={handleCategoryChange}
              helperText="Select the main category for your post"
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </StyledPaper>
          
          <StyledPaper sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={currentTag}
                onChange={handleCurrentTagChange}
                onKeyPress={handleKeyPress}
                placeholder="Add a tag"
                sx={{ mr: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTag}
                disabled={!currentTag.trim()}
              >
                <AddIcon />
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={() => handleDeleteTag(tag)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </StyledPaper>
          
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              Actions
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              startIcon={<SaveIcon />}
              onClick={handleSaveDraft}
              disabled={isSaving || isPublishing}
              sx={{ mb: 2 }}
            >
              {isSaving ? 'Saving...' : 'Save Draft'}
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<PublishIcon />}
              onClick={handlePublish}
              disabled={isSaving || isPublishing}
            >
              {isPublishing ? 'Publishing...' : 'Publish Post'}
            </Button>
          </StyledPaper>
        </Grid>
      </Grid>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Publish Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to publish this post? Once published, it will be visible to all users.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmPublish} color="primary" variant="contained">
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CreatePostPage;
```

## 6. AI Feature Implementation
### Step 1: Create AI Trend Analyzer Component

Create `client/src/pages/TrendPage.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  CircularProgress,
  Skeleton,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Search as SearchIcon,
  Refresh as RefreshIcon,
  ArrowForward as ArrowForwardIcon,
  Reddit as RedditIcon,
  Twitter as TwitterIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const TrendingTopicCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  position: 'relative',
  display: 'inline-block',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 60,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

// Mock data for trending topics
const mockTrendingTopics = [
  {
    id: 1,
    title: 'The Rise of AI in Content Creation',
    source: 'Reddit',
    sourceIcon: <RedditIcon />,
    mentions: 1245,
    sentiment: 'positive',
    relatedTopics: ['AI', 'Content Creation', 'Technology'],
  },
  {
    id: 2,
    title: 'Web Development Frameworks in 2023',
    source: 'Reddit',
    sourceIcon: <RedditIcon />,
    mentions: 982,
    sentiment: 'neutral',
    relatedTopics: ['Web Development', 'React', 'Vue', 'Angular'],
  },
  {
    id: 3,
    title: 'Remote Work Culture Post-Pandemic',
    source: 'Twitter',
    sourceIcon: <TwitterIcon />,
    mentions: 1567,
    sentiment: 'mixed',
    relatedTopics: ['Remote Work', 'Work Culture', 'Pandemic'],
  },
  {
    id: 4,
    title: 'Sustainable Living Practices',
    source: 'Reddit',
    sourceIcon: <RedditIcon />,
    mentions: 756,
    sentiment: 'positive',
    relatedTopics: ['Sustainability', 'Environment', 'Lifestyle'],
  },
  {
    id: 5,
    title: 'Mental Health Awareness in Tech',
    source: 'Twitter',
    sourceIcon: <TwitterIcon />,
    mentions: 1105,
    sentiment: 'positive',
    relatedTopics: ['Mental Health', 'Technology', 'Workplace'],
  },
];

// Mock data for recommended articles
const mockRecommendedArticles = [
  {
    id: 1,
    title: 'How AI is Transforming Content Creation in 2023',
    excerpt: 'Explore the latest AI tools and techniques that are revolutionizing how content creators work.',
    image: 'https://source.unsplash.com/random/800x600/?ai',
    category: 'Technology',
    relevanceScore: 95,
  },
  {
    id: 2,
    title: 'The Future of React: What to Expect in 2024',
    excerpt: 'A deep dive into upcoming features and changes in the React ecosystem.',
    image: 'https://source.unsplash.com/random/800x600/?programming',
    category: 'Programming',
    relevanceScore: 88,
  },
  {
    id: 3,
    title: 'Building a Sustainable Home Office',
    excerpt: 'Practical tips for creating an eco-friendly and productive work environment at home.',
    image: 'https://source.unsplash.com/random/800x600/?office',
    category: 'Lifestyle',
    relevanceScore: 82,
  },
];

const TrendPage = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedTopics, setBookmarkedTopics] = useState([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setTrendingTopics(mockTrendingTopics);
      setRecommendedArticles(mockRecommendedArticles);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    
    // In a real app, you would fetch related articles based on the selected topic
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookmarkTopic = (topicId) => {
    if (bookmarkedTopics.includes(topicId)) {
      setBookmarkedTopics(bookmarkedTopics.filter(id => id !== topicId));
    } else {
      setBookmarkedTopics([...bookmarkedTopics, topicId]);
    }
  };

  const filteredTopics = trendingTopics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.relatedTopics.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'error';
      case 'mixed':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          AI Trend Analyzer
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Discover trending topics from across the web, analyzed with AI to help you create relevant content.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Trending Topics
              </Typography>
              <IconButton onClick={handleRefresh} disabled={refreshing}>
                {refreshing ? <CircularProgress size={24} /> : <RefreshIcon />}
              </IconButton>
            </Box>
            
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            {loading ? (
              Array.from(new Array(5)).map((_, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Skeleton variant="rectangular" height={80} sx={{ borderRadius: 1 }} />
                </Box>
              ))
            ) : (
              <List sx={{ maxHeight: 500, overflow: 'auto' }}>
                {filteredTopics.length > 0 ? (
                  filteredTopics.map((topic) => (
                    <TrendingTopicCard key={topic.id}>
                      <ListItem
                        button
                        selected={selectedTopic && selectedTopic.id === topic.id}
                        onClick={() => handleTopicSelect(topic)}
                        secondaryAction={
                          <IconButton edge="end" onClick={() => handleBookmarkTopic(topic.id)}>
                            {bookmarkedTopics.includes(topic.id) ? (
                              <BookmarkIcon color="primary" />
                            ) : (
                              <BookmarkBorderIcon />
                            )}
                          </IconButton>
                        }
                      >
                        <ListItemIcon>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            {topic.sourceIcon}
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={topic.title}
                          secondary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                              <Chip
                                label={`${topic.mentions} mentions`}
                                size="small"
                                variant="outlined"
                              />
                              <Chip
                                label={topic.sentiment}
                                size="small"
                                color={getSentimentColor(topic.sentiment)}
                              />
                            </Box>
                          }
                        />
                      </ListItem>
                    </TrendingTopicCard>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ py: 2, textAlign: 'center' }}>
                    No topics match your search
                  </Typography>
                )}
              </List>
            )}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          {selectedTopic ? (
            <Box>
              <Paper sx={{ p: 3, borderRadius: 3, mb: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {selectedTopic.title}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {selectedTopic.relatedTopics.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="h6" gutterBottom>
                  AI Analysis
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph>
                    This topic is trending with {selectedTopic.mentions} mentions across {selectedTopic.source}. 
                    The overall sentiment is {selectedTopic.sentiment}, indicating that users are 
                    {selectedTopic.sentiment === 'positive' ? ' responding favorably to this topic.' : 
                      selectedTopic.sentiment === 'negative' ? ' expressing concerns about this topic.' : 
                      ' showing mixed reactions to this topic.'}
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    Based on the current trend analysis, this topic is likely to remain relevant for the next 7-10 days, 
                    making it a good candidate for timely content creation.
                  </Typography>
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  Content Recommendations
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" fontWeight={500} gutterBottom>
                    Suggested Angles:
                  </Typography>
                  <ul>
                    <li>How {selectedTopic.title} is changing the industry landscape</li>
                    <li>Practical applications of {selectedTopic.title} for beginners</li>
                    <li>Expert opinions on the future of {selectedTopic.title}</li>
                    <li>Case studies showcasing successful implementation of {selectedTopic.title}</li>
                  </ul>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    component="a"
                    href="/create"
                  >
                    Write About This Topic
                  </Button>
                </Box>
              </Paper>
              
              <SectionTitle variant="h6">
                Recommended Articles
              </SectionTitle>
              
              <Grid container spacing={3}>
                {recommendedArticles.map((article) => (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <StyledCard>
                      <CardMedia
                        component="img"
                        height="140"
                        image={article.image}
                        alt={article.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Chip
                          label={`${article.relevanceScore}% Relevant`}
                          color="primary"
                          size="small"
                          sx={{ mb: 1 }}
                        />
                        <Typography variant="h6" component="h2" gutterBottom>
                          {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {article.excerpt}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', p: 4 }}>
              <TrendingUpIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2, opacity: 0.5 }} />
              <Typography variant="h5" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                Select a trending topic to see AI analysis and recommendations
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrendPage;
```
### Step 2: Create AI Article Summary Component

Create `client/src/pages/ArticlesPage.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Tabs,
  Tab,
  CircularProgress,
  Divider,
  Paper,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip,
} from '@mui/material';
import {
  Summarize as SummarizeIcon,
  Link as LinkIcon,
  Description as DescriptionIcon,
  ContentPaste as ContentPasteIcon,
  Delete as DeleteIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
}));

const SummaryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
}));

const KeyPointItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const ArticlesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [savedSummaries, setSavedSummaries] = useState([]);
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    // Reset any error messages when switching tabs
    setError('');
  };

  const handleUrlInputChange = (event) => {
    setUrlInput(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleSummarize = () => {
    // Validate input
    if (activeTab === 0 && !urlInput) {
      setError('Please enter a valid URL');
      return;
    }
    
    if (activeTab === 1 && !textInput) {
      setError('Please enter some text to summarize');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate API call to AI service
    setTimeout(() => {
      // Mock summary data
      const mockSummary = {
        id: Date.now(),
        title: activeTab === 0 ? 'Article from ' + new URL(urlInput).hostname : 'Custom Text Summary',
        originalContent: activeTab === 0 ? urlInput : textInput,
        contentType: activeTab === 0 ? 'url' : 'text',
        summary: "Artificial Intelligence (AI) is rapidly transforming content creation across industries. Language models can now generate human-like text, while image generators create visuals from descriptions. These tools help creators overcome blocks, produce variations, and personalize content at scale. However, ethical questions around attribution, transparency, and impact on creative professions remain. The most promising future involves collaboration between humans and AI, with technology handling routine tasks while humans provide emotional intelligence and cultural context.",
        keyPoints: [
          "AI tools like language models and image generators are revolutionizing content creation",
          "Content creators use AI to generate drafts, overcome writer's block, and create personalized content",
          "Ethical considerations include attribution, transparency, and impact on creative professions",
          "The future likely involves collaboration between humans and AI rather than replacement",
          "Human creativity, emotional intelligence, and cultural context remain uniquely valuable"
        ],
        readingTime: 8,
        timestamp: new Date().toISOString(),
        saved: false,
      };
      
      setSummary(mockSummary);
      setLoading(false);
      
      // Reset inputs
      if (activeTab === 0) {
        setUrlInput('');
      } else {
        setTextInput('');
      }
    }, 2000);
  };

  const handleSaveSummary = () => {
    if (summary) {
      const updatedSummary = { ...summary, saved: true };
      setSavedSummaries([updatedSummary, ...savedSummaries]);
      setSummary(null);
    }
  };

  const handleDeleteSummary = (id) => {
    setSavedSummaries(savedSummaries.filter(summary => summary.id !== id));
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would show a toast notification here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          AI Article Summary
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Get quick summaries of articles or long text passages using our AI-powered tool.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <StyledPaper>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              sx={{ mb: 3 }}
            >
              <Tab icon={<LinkIcon />} label="URL" />
              <Tab icon={<DescriptionIcon />} label="Text" />
            </Tabs>
            
            {activeTab === 0 && (
              <Box>
                <TextField
                  fullWidth
                  label="Article URL"
                  variant="outlined"
                  placeholder="https://example.com/article"
                  value={urlInput}
                  onChange={handleUrlInputChange}
                  error={!!error}
                  helperText={error}
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <LinkIcon color="action" sx={{ mr: 1 }} />
                    ),
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SummarizeIcon />}
                  onClick={handleSummarize}
                  disabled={loading}
                >
                  {loading ? 'Summarizing...' : 'Summarize Article'}
                </Button>
              </Box>
            )}
            
            {activeTab === 1 && (
              <Box>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  label="Text to Summarize"
                  variant="outlined"
                  placeholder="Paste or type the text you want to summarize..."
                  value={textInput}
                  onChange={handleTextInputChange}
                  error={!!error}
                  helperText={error}
                  sx={{ mb: 3 }}
                />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<ContentPasteIcon />}
                    onClick={() => navigator.clipboard.readText().then(text => setTextInput(text))}
                  >
                    Paste from Clipboard
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SummarizeIcon />}
                    onClick={handleSummarize}
                    disabled={loading}
                    sx={{ flexGrow: 1 }}
                  >
                    {loading ? 'Summarizing...' : 'Summarize Text'}
                  </Button>
                </Box>
              </Box>
            )}
            
            {summary && (
              <Box sx={{ mt: 4 }}>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Summary Results
                </Typography>
                
                <SummaryCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6">
                        {summary.title}
                      </Typography>
                      <Chip
                        icon={<SummarizeIcon />}
                        label={`${summary.readingTime} min read`}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    
                    <Typography variant="body1" paragraph>
                      {summary.summary}
                    </Typography>
                    
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
                      Key Points:
                    </Typography>
                    
                    <List dense>
                      {summary.keyPoints.map((point, index) => (
                        <KeyPointItem key={index}>
                          <ListItemText primary={point} />
                        </KeyPointItem>
                      ))}
                    </List>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                      <Button
                        variant="outlined"
                        startIcon={<ContentCopyIcon />}
                        onClick={() => handleCopyToClipboard(summary.summary)}
                      >
                        Copy Summary
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<BookmarkIcon />}
                        onClick={handleSaveSummary}
                      >
                        Save Summary
                      </Button>
                    </Box>
                  </CardContent>
                </SummaryCard>
              </Box>
            )}
          </StyledPaper>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Saved Summaries
            </Typography>
            
            {savedSummaries.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <BookmarkBorderIcon sx={{ fontSize: 60, color: 'text.secondary', opacity: 0.5, mb: 2 }} />
                <Typography color="text.secondary">
                  No saved summaries yet. Summarize an article and save it to see it here.
                </Typography>
              </Box>
            ) : (
              <List>
                {savedSummaries.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography
                              variant="body2"
                              color="text.primary"
                              sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                mb: 1,
                              }}
                            >
                              {item.summary}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Chip
                                size="small"
                                label={`${item.readingTime} min`}
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                label={new Date(item.timestamp).toLocaleDateString()}
                                variant="outlined"
                              />
                            </Box>
                          </Box>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Tooltip title="Share">
                          <IconButton edge="end" sx={{ mr: 1 }}>
                            <ShareIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton edge="end" onClick={() => handleDeleteSummary(item.id)}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))}
              </List>
            )}
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlesPage;
```
### Step 3: Create AI Personality Generator Component

Create `client/src/pages/GeneratePage.jsx`:

```jsx
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Divider,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Slider,
  Chip,
} from '@mui/material';
import {
  Create as CreateIcon,
  Psychology as PsychologyIcon,
  Mood as MoodIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Refresh as RefreshIcon,
  ContentCopy as ContentCopyIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  AutoAwesome as AutoAwesomeIcon,
} from '@mui/icons-material';
import RichTextEditor from '../components/editor/RichTextEditor';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
}));

const StepContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const ResultCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  position: 'relative',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -15,
    left: 20,
    width: 30,
    height: 30,
    backgroundColor: theme.palette.background.paper,
    transform: 'rotate(45deg)',
    boxShadow: theme.shadows[2],
    zIndex: -1,
  },
}));

const topics = [
  'Technology',
  'Health & Wellness',
  'Personal Development',
  'Business & Entrepreneurship',
  'Travel',
  'Food & Cooking',
  'Science',
  'Art & Creativity',
  'Environment & Sustainability',
  'Education',
  'Finance & Investing',
  'Relationships',
  'Sports & Fitness',
  'Politics & Current Events',
  'Philosophy',
  'Entertainment',
  'Fashion & Style',
  'Home & Garden',
  'Parenting',
  'Other',
];

const moods = [
  'Happy',
  'Reflective',
  'Excited',
  'Calm',
  'Professional',
  'Humorous',
  'Serious',
  'Inspirational',
  'Curious',
  'Passionate',
];

const GeneratePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [writingStyle, setWritingStyle] = useState('');
  const [topic, setTopic] = useState('');
  const [customTopic, setCustomTopic] = useState('');
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [complexity, setComplexity] = useState(50);
  const [length, setLength] = useState(500);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleWritingStyleChange = (event) => {
    setWritingStyle(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleCustomTopicChange = (event) => {
    setCustomTopic(event.target.value);
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleComplexityChange = (event, newValue) => {
    setComplexity(newValue);
  };

  const handleLengthChange = (event, newValue) => {
    setLength(newValue);
  };

  const handleGenerate = () => {
    setLoading(true);
    
    // Simulate API call to AI service
    setTimeout(() => {
      // Mock generated content
      const mockContent = `
        <h2>The Future of Sustainable Technology</h2>
        
        <p>As I sit here surrounded by gadgets that have become an essential part of modern life, I can't help but wonder about the environmental impact of our digital existence. The tech industry has given us incredible tools that connect us across vast distances, but at what cost to our planet?</p>
        
        <p>I've always believed that innovation shouldn't come at the expense of sustainability. The good news is that we're witnessing a significant shift in how technology companies approach environmental responsibility. From Apple's commitment to carbon neutrality to Microsoft's ambitious negative carbon goals, big tech is finally acknowledging its environmental footprint.</p>
        
        <h3>Renewable Energy Powers the Digital World</h3>
        
        <p>One of the most exciting developments I've been following is the transition to renewable energy sources for data centers. These massive facilities, which power our cloud services and internet activities, have traditionally been energy hogs. However, companies like Google have made tremendous strides in powering their operations with clean energy.</p>
        
        <p>I was thrilled to learn that many tech giants now operate carbon-neutral data centers, using a combination of solar, wind, and hydroelectric power. This shift not only reduces emissions but also demonstrates that sustainable practices can be economically viable.</p>
        
        <h3>Circular Design Principles</h3>
        
        <blockquote>
          "The most environmentally friendly product is the one you don't have to make."
        </blockquote>
        
        <p>This philosophy has led to the emergence of circular design principles in technology manufacturing. Rather than the traditional "take-make-dispose" model, companies are increasingly designing products with their entire lifecycle in mind.</p>
        
        <p>I'm particularly impressed by initiatives that focus on:</p>
        
        <ul>
          <li>Modular design that allows for easy repairs and upgrades</li>
          <li>Use of recycled materials in new products</li>
          <li>Take-back programs that properly recycle old devices</li>
          <li>Reduction of harmful chemicals in manufacturing</li>
        </ul>
        
        <h3>The Road Ahead</h3>
        
        <p>While I'm optimistic about these developments, there's still much work to be done. The rapid pace of technological change often encourages consumers to replace perfectly functional devices for the latest model. This creates a significant e-waste problem that we haven't fully addressed.</p>
        
        <p>I believe the future of sustainable technology lies in changing both industry practices and consumer behavior. As users, we can demand longer-lasting products, support companies with strong environmental commitments, and ensure our old devices are properly recycled.</p>
        
        <p>The technology industry has transformed our world in countless positive ways. Now it has the opportunity—and responsibility—to lead the way in creating a more sustainable future. I'm excited to see this transformation unfold and to be part of the solution through my own choices as a consumer and advocate.</p>
      `;
      
      setGeneratedContent(mockContent);
      setEditedContent(mockContent);
      setLoading(false);
    }, 3000);
  };

  const handleCopyToClipboard = () => {
    const contentToCopy = isEditing ? editedContent : generatedContent;
    // Strip HTML tags for plain text
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentToCopy;
    const plainText = tempDiv.textContent || tempDiv.innerText;
    
    navigator.clipboard.writeText(plainText);
    // In a real app, you would show a toast notification here
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleContentChange = (newContent) => {
    setEditedContent(newContent);
  };

  const handleRegenerateContent = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would call the AI service again
      setLoading(false);
    }, 2000);
  };

  const handleSaveToPost = () => {
    // In a real app, you would save this to a new post draft
    console.log('Saving content to new post:', isEditing ? editedContent : generatedContent);
    // Then redirect to the post editor
  };

  const steps = ['Writing Style', 'Topic Selection', 'Mood Setting', 'Generate'];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              Input Your Writing Style
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Paste a sample of your writing or any text that represents the style you want to emulate.
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              placeholder="Paste your writing sample here..."
              value={writingStyle}
              onChange={handleWritingStyleChange}
            />
          </StepContent>
        );
      case 1:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              Select Your Topic
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Choose a topic for your generated content or specify a custom topic.
            </Typography>
            <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
              <InputLabel>Topic</InputLabel>
              <Select
                value={topic}
                onChange={handleTopicChange}
                label="Topic"
              >
                {topics.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {topic === 'Other' && (
              <TextField
                fullWidth
                label="Custom Topic"
                variant="outlined"
                placeholder="Enter your specific topic..."
                value={customTopic}
                onChange={handleCustomTopicChange}
              />
            )}
          </StepContent>
        );
      case 2:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              Set Your Mood
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Select the emotional tone you want your content to have.
            </Typography>
            <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
              <InputLabel>Mood</InputLabel>
              <Select
                value={mood}
                onChange={handleMoodChange}
                label="Mood"
              >
                {moods.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <Typography variant="h6" gutterBottom>
              Advanced Settings
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography id="complexity-slider" gutterBottom>
                Complexity Level
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={complexity}
                    onChange={handleComplexityChange}
                    aria-labelledby="complexity-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={100}
                  />
                </Grid>
                <Grid item>
                  <Chip label={`${complexity}%`} />
                </Grid>
              </Grid>
            </Box>
            
            <Box>
              <Typography id="length-slider" gutterBottom>
                Content Length (words)
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={length}
                    onChange={handleLengthChange}
                    aria-labelledby="length-slider"
                    valueLabelDisplay="auto"
                    step={100}
                    marks
                    min={100}
                    max={1000}
                  />
                </Grid>
                <Grid item>
                  <Chip label={length} />
                </Grid>
              </Grid>
            </Box>
          </StepContent>
        );
      case 3:
        return (
          <StepContent>
            <Typography variant="h6" gutterBottom>
              Generate Your Content
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Review your selections and generate content that sounds like you.
            </Typography>
            
            <Box sx={{ mb: 3, p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Topic:
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {topic === 'Other' ? customTopic : topic}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Mood:
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {mood}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Length:
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    {length} words
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
              onClick={handleGenerate}
              disabled={loading || !topic || !mood || !writingStyle}
            >
              {loading ? 'Generating...' : 'Generate Content'}
            </Button>
          </StepContent>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          AI Personality Generator
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Create content that sounds like you—written in your style, on your topic, in your mood.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={generatedContent ? 6 : 12}>
          <StyledPaper>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            
            {getStepContent(activeStep)}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === steps.length - 1 ? handleGenerate : handleNext}
                endIcon={activeStep === steps.length - 1 ? <AutoAwesomeIcon /> : <ArrowForwardIcon />}
                disabled={(activeStep === steps.length - 1 && loading) || 
                  (activeStep === 0 && !writingStyle) ||
                  (activeStep === 1 && !topic) ||
                  (activeStep === 2 && !mood)}
              >
                {activeStep === steps.length - 1 ? 'Generate' : 'Next'}
              </Button>
            </Box>
          </StyledPaper>
        </Grid>
        
        {generatedContent && (
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AutoAwesomeIcon sx={{ mr: 1, color: 'primary.main' }} />
                Generated Content
              </Typography>
              
              <ResultCard>
                <CardContent>
                  <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <Tooltip title={isEditing ? "Save Changes" : "Edit Content"}>
                      <IconButton onClick={handleEditToggle} color={isEditing ? "primary" : "default"}>
                        {isEditing ? <SaveIcon /> : <EditIcon />}
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy to Clipboard">
                      <IconButton onClick={handleCopyToClipboard}>
                        <ContentCopyIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Regenerate">
                      <IconButton onClick={handleRegenerateContent} disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : <RefreshIcon />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                  
                  {isEditing ? (
                    <RichTextEditor value={editedContent} onChange={handleContentChange} />
                  ) : (
                    <Box
                      sx={{
                        mt: 2,
                        '& h2, & h3, & h4': {
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 600,
                          mb: 2,
                          mt: 3,
                        },
                        '& p': {
                          mb: 2,
                        },
                        '& blockquote': {
                          borderLeft: '4px solid',
                          borderColor: 'primary.main',
                          pl: 2,
                          py: 1,
                          fontStyle: 'italic',
                          my: 2,
                        },
                        '& ul, & ol': {
                          pl: 3,
                          mb: 2,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: generatedContent }}
                    />
                  )}
                </CardContent>
              </ResultCard>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<CreateIcon />}
                  onClick={handleSaveToPost}
                >
                  Use This Content in a New Post
                </Button>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default GeneratePage;
```

## 7. Implementation Notes

### Dependencies to Install

```bash
cd Mern-Blog/client
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @fontsource/poppins @fontsource/inter @fontsource/jetbrains-mono
npm install react-router-dom
npm install styled-components
npm install framer-motion
npm install react-quill
npm install draft-js react-draft-wysiwyg draftjs-to-html html-to-draftjs
npm install react-slick slick-carousel
```

### Backend API Endpoints to Implement

For the enhanced UI/UX to work properly, you'll need to implement these API endpoints in your server:

1. Authentication endpoints:
   - POST /api/auth/register
   - POST /api/auth/login
   - GET /api/auth/me

2. Post endpoints:
   - GET /api/posts
   - GET /api/posts/:id
   - POST /api/posts
   - PUT /api/posts/:id
   - DELETE /api/posts/:id
   - GET /api/posts/trending

3. AI feature endpoints:
   - POST /api/ai/summarize
   - POST /api/ai/analyze-trends
   - POST /api/ai/generate-content

### Next Steps

After implementing the UI components, you should:

1. Connect the frontend to your backend API
2. Implement proper authentication and protected routes
3. Set up state management (Redux or Context API)
4. Add form validation
5. Implement error handling
6. Add loading states and skeleton screens
7. Set up proper image upload functionality
8. Implement the AI features on the backend

## 8. Additional Resources

- [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/)
- [React Router Documentation](https://reactrouter.com/en/main)
- [React Quill Documentation](https://github.com/zenoamaro/react-quill)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Azure OpenAI API Documentation](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/)
