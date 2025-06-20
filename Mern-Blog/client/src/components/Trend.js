import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Tabs,
  Tab,
  Paper,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';
import '../style/trend-analyzer.css';

// Styled components
const TrendHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(6, 4),
  marginBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
}));

const StatCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  minWidth: '200px',
}));

const StatIcon = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const TrendMap = styled(Paper)(({ theme }) => ({
  minHeight: 300,
  position: 'relative',
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  padding: theme.spacing(2),
}));

const TrendBubble = styled(Box)(({ theme, size, color }) => {
  const sizes = {
    large: { width: 120, height: 120, fontSize: '1.125rem' },
    medium: { width: 90, height: 90, fontSize: '1rem' },
    small: { width: 60, height: 60, fontSize: '0.875rem' },
  };
  
  return {
    position: 'absolute',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    backgroundColor: color || theme.palette.primary.main,
    width: sizes[size].width,
    height: sizes[size].height,
    fontSize: sizes[size].fontSize,
    textAlign: 'center',
    padding: '10px',
    '&:hover': {
      transform: 'scale(1.1)',
      zIndex: 10,
    },
  };
});

const RecommendationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const TopicCategory = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || theme.palette.primary.light,
  color: 'white',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
  fontWeight: 600,
}));

const ArticleCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
}));

// Color mapping for categories
const categoryColors = {
  technology: '#3a86ff',
  science: '#8338ec',
  business: '#fb5607',
  health: '#38b000',
  default: '#ff006e'
};

const Trend = () => {
  const [tabValue, setTabValue] = useState(0);
  const [timeFilter, setTimeFilter] = useState('today');
  const [viewType, setViewType] = useState('bubble');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trendingData, setTrendingData] = useState({
    posts: [],
    recommendedCategories: []
  });

  useEffect(() => {
    fetchTrendingData();
  }, []);

  const fetchTrendingData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/reddit/trending');
      setTrendingData(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching trending data:', err);
      setError('Failed to load trending data. Please try again later.');
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Function to get random positions for trend bubbles
  const getRandomPosition = (index, total) => {
    // Create a grid-like positioning to avoid overlaps
    const rows = Math.ceil(Math.sqrt(total));
    const cols = Math.ceil(total / rows);
    
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    // Add some randomness within the cell
    const randomX = Math.random() * 10 - 5;
    const randomY = Math.random() * 10 - 5;
    
    return {
      top: `${(row * 100 / rows) + 5 + randomY}%`,
      left: `${(col * 100 / cols) + 5 + randomX}%`
    };
  };

  // Function to determine bubble size based on post score
  const getBubbleSize = (score) => {
    if (score > 1000) return 'large';
    if (score > 500) return 'medium';
    return 'small';
  };

  // Filter posts by selected category
  const filteredPosts = category === 'all' 
    ? trendingData.posts 
    : trendingData.posts.filter(post => post.category === category);

  // Sort posts based on selected sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'trending') return b.score - a.score;
    if (sortBy === 'commented') return b.comments - a.comments;
    if (sortBy === 'recent') return 0; // We don't have timestamp in our data
    return 0;
  });

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <TrendHeader>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            AI <span style={{ position: 'relative', '&::after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', backgroundColor: 'rgba(255,255,255,0.2)', zIndex: -1 } }}>Trend</span> Analyzer
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Discover what's trending and get personalized content ideas tailored to your audience.
          </Typography>
        </Box>
        
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <StatCard>
              <StatIcon>
                <RefreshIcon />
              </StatIcon>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Last Updated</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {new Date().toLocaleTimeString()}
                </Typography>
              </Box>
            </StatCard>
          </Grid>
          <Grid item>
            <StatCard>
              <StatIcon>
                <TrendingUpIcon />
              </StatIcon>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Trending Topics</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {loading ? 'Loading...' : `${trendingData.posts.length} Topics`}
                </Typography>
              </Box>
            </StatCard>
          </Grid>
          <Grid item>
            <StatCard>
              <StatIcon>
                <PersonIcon />
              </StatIcon>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Categories</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {loading ? 'Loading...' : `${trendingData.recommendedCategories.length} Categories`}
                </Typography>
              </Box>
            </StatCard>
          </Grid>
        </Grid>
      </TrendHeader>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Trend Visualization Section */}
      <Box sx={{ mb: 6 }}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              Trending Topics Map
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
                <Button 
                  variant={timeFilter === 'today' ? 'contained' : 'text'} 
                  color="primary"
                  onClick={() => setTimeFilter('today')}
                  sx={{ borderRadius: 0 }}
                >
                  Today
                </Button>
                <Button 
                  variant={timeFilter === 'week' ? 'contained' : 'text'} 
                  color="primary"
                  onClick={() => setTimeFilter('week')}
                  sx={{ borderRadius: 0 }}
                >
                  This Week
                </Button>
                <Button 
                  variant={timeFilter === 'month' ? 'contained' : 'text'} 
                  color="primary"
                  onClick={() => setTimeFilter('month')}
                  sx={{ borderRadius: 0 }}
                >
                  This Month
                </Button>
              </Box>
              <Box sx={{ display: 'flex', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
                <IconButton 
                  color={viewType === 'bubble' ? 'primary' : 'default'}
                  onClick={() => setViewType('bubble')}
                >
                  <FilterListIcon />
                </IconButton>
                <IconButton 
                  color={viewType === 'list' ? 'primary' : 'default'}
                  onClick={() => setViewType('list')}
                >
                  <FilterListIcon sx={{ transform: 'rotate(90deg)' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          
          <TrendMap>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ ml: 2 }}>Loading trending topics...</Typography>
              </Box>
            ) : viewType === 'bubble' ? (
              <Box sx={{ position: 'relative', height: 400 }}>
                {trendingData.posts.slice(0, 10).map((post, index) => (
                  <TrendBubble 
                    key={index}
                    size={getBubbleSize(post.score)}
                    color={categoryColors[post.category] || categoryColors.default}
                    sx={getRandomPosition(index, Math.min(10, trendingData.posts.length))}
                    title={post.title}
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    {post.title.length > 20 ? post.title.substring(0, 20) + '...' : post.title}
                  </TrendBubble>
                ))}
              </Box>
            ) : (
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {trendingData.posts.map((post, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      p: 2, 
                      borderBottom: '1px solid', 
                      borderColor: 'divider',
                      '&:hover': { backgroundColor: 'action.hover' },
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(post.url, '_blank')}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Chip 
                        label={post.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: categoryColors[post.category] || categoryColors.default,
                          color: 'white'
                        }} 
                      />
                      <Typography variant="body2" color="text.secondary">
                        Score: {post.score} | Comments: {post.comments}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1">{post.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Posted by u/{post.author} in r/{post.subreddit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </TrendMap>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            {Object.entries(categoryColors).map(([cat, color]) => (
              <Box key={cat} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 16, height: 16, borderRadius: 1, backgroundColor: color, mr: 1 }} />
                <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>{cat}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* Trending Articles Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
          Trending <span style={{ color: '#3a86ff' }}>Articles</span>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Popular content from around the web
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
            <Tabs 
              value={category} 
              onChange={(e, newValue) => setCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All Categories" value="all" />
              <Tab label="Technology" value="technology" />
              <Tab label="Science" value="science" />
              <Tab label="Business" value="business" />
              <Tab label="Health" value="health" />
            </Tabs>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">Sort by:</Typography>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="trending">Most Upvoted</MenuItem>
                  <MenuItem value="commented">Most Commented</MenuItem>
                  <MenuItem value="recent">Recently Posted</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <CircularProgress />
              <Typography variant="h6" sx={{ ml: 2 }}>Loading trending articles...</Typography>
            </Box>
          ) : sortedPosts.length === 0 ? (
            <Alert severity="info">No articles found for the selected category.</Alert>
          ) : (
            <Grid container spacing={3}>
              {sortedPosts.map((post, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ArticleCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Chip 
                          label={post.category} 
                          size="small" 
                          sx={{ 
                            backgroundColor: categoryColors[post.category] || categoryColors.default,
                            color: 'white'
                          }} 
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                          <ShareIcon sx={{ fontSize: 14, mr: 0.5 }} />
                          {post.score} upvotes
                        </Typography>
                      </Box>
                      
                      <Typography variant="h6" component="h3" gutterBottom>
                        {post.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Posted by u/{post.author} in r/{post.subreddit} • {post.comments} comments
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => window.open(post.url, '_blank')}
                        >
                          Read on Reddit
                        </Button>
                        <Button variant="contained" size="small">
                          Generate Similar
                        </Button>
                      </Box>
                    </CardContent>
                  </ArticleCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Trend;
