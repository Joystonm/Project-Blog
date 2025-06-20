import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import '../style/home-page.css';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(10, 4),
  marginBottom: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 6),
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  position: 'relative',
  display: 'inline-block',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: '800px',
  margin: '0 auto',
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    backgroundColor: `${theme.palette.primary.main}20`,
    zIndex: -1,
    borderRadius: theme.shape.borderRadius / 2,
  },
}));

const CTASection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(8, 4),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
}));

const HomePage = () => {
  const { authState } = useAuth();

  // Feature data
  const features = [
    {
      id: 1,
      title: "AI Trend Analyzer",
      description: "Discover what's trending and get personalized content ideas tailored to your audience. Our AI analyzes popular topics to help you create relevant content.",
      link: "/trend",
    },
    {
      id: 2,
      title: "Personality-Driven Content",
      description: "Generate blog posts that sound exactly like you—matching your style, tone, and mood. Our AI learns your unique voice to create authentic content.",
      link: "/generate",
    },
    {
      id: 3,
      title: "Smart Article Summarization",
      description: "Transform lengthy articles into concise summaries without losing key insights. Perfect for research, content curation, or catching up on industry news.",
      link: "/articles",
    }
  ];

  // How it works steps
  const steps = [
    {
      number: 1,
      title: "Connect Your Style",
      description: "Upload your writing samples or past blog posts so our AI can learn your unique voice and style.",
    },
    {
      number: 2,
      title: "Choose Your Tool",
      description: "Select from our three AI-powered tools based on what you need: trends, summaries, or content generation.",
    },
    {
      number: 3,
      title: "Create & Publish",
      description: "Generate content that sounds like you, edit as needed, and publish directly to your blog.",
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Blog Smarter, <HighlightText>Not Harder</HighlightText>
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
            Transform your blogging experience with AI-powered tools that understand your unique voice.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to={authState.isAuthenticated ? "/post" : "/signup"}
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/articles"
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Explore Features
            </Button>
          </Box>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <Box sx={{ mb: 10, textAlign: 'center' }}>
        <SectionTitle variant="h3" component="h2">
          Powered by <HighlightText>AI</HighlightText>, Made for <HighlightText>You</HighlightText>
        </SectionTitle>
        <SectionSubtitle variant="h6" component="p">
          Three powerful tools to revolutionize your content creation
        </SectionSubtitle>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <FeatureCard sx={index === 1 ? { transform: 'scale(1.05)', zIndex: 1 } : {}}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to={feature.link}
                    sx={{ mt: 2 }}
                  >
                    Explore {feature.title.split(' ').pop()} <span style={{ marginLeft: '8px' }}>→</span>
                  </Button>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ mb: 10, textAlign: 'center' }}>
        <SectionTitle variant="h3" component="h2">
          How Chai & Chapters <HighlightText>Works</HighlightText>
        </SectionTitle>
        <SectionSubtitle variant="h6" component="p">
          Simple steps to enhance your blogging experience
        </SectionSubtitle>
        
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.number}>
              <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  backgroundColor: 'primary.main', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  mb: 2,
                  mx: 'auto'
                }}>
                  {step.number}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <CTASection>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Ready to Transform Your Blogging Experience?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
          Join other content creators who are saving time and creating better content with Chai & Chapters.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to={authState.isAuthenticated ? "/post" : "/signup"}
            sx={{ 
              borderRadius: 2,
              px: 6,
              py: 1.5,
              fontWeight: 600,
              backgroundColor: 'white',
              color: 'secondary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Get Started Now
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="/about"
            sx={{ 
              borderRadius: 2,
              px: 6,
              py: 1.5,
              fontWeight: 600,
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Learn More
          </Button>
        </Box>
      </CTASection>
    </Container>
  );
};

export default HomePage;
