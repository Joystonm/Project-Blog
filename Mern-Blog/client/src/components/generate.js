import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import '../style/content-generator.css';

// Styled components
const GeneratorHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(6, 4),
  marginBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
}));

const StepNumber = styled(Box)(({ theme, active }) => ({
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: active ? 'white' : 'rgba(255, 255, 255, 0.2)',
  color: active ? theme.palette.secondary.main : 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const StepConnector = styled(Box)(({ theme, active }) => ({
  width: 60,
  height: 2,
  backgroundColor: active ? theme.palette.secondary.main : 'rgba(255, 255, 255, 0.2)',
  margin: '0 var(--spacing-sm)',
  marginBottom: theme.spacing(4),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    backgroundColor: `${theme.palette.secondary.main}20`,
    zIndex: -1,
    borderRadius: theme.shape.borderRadius / 2,
  },
}));

const ProfileCard = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  border: active ? `2px solid ${theme.palette.secondary.main}` : '1px solid transparent',
  boxShadow: active ? '0 0 0 2px rgba(131, 56, 236, 0.2)' : theme.shadows[1],
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const ProfileIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

const MoodCard = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  border: active ? `2px solid ${theme.palette.secondary.main}` : '1px solid transparent',
  boxShadow: active ? '0 0 0 2px rgba(131, 56, 236, 0.2)' : theme.shadows[1],
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

const MoodIcon = styled(Box)(({ theme, color }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: color || theme.palette.secondary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const Generate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [writingStyle, setWritingStyle] = useState('');
  const [activeProfile, setActiveProfile] = useState(0);
  const [topic, setTopic] = useState('');
  const [topicDetails, setTopicDetails] = useState('');
  const [activeMood, setActiveMood] = useState(0);
  const [articleFormat, setArticleFormat] = useState('standard');
  const [articleLength, setArticleLength] = useState(3);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call to generate content
    setTimeout(() => {
      setGeneratedContent("Content will be generated here");
      setIsGenerating(false);
      handleNext();
    }, 3000);
  };
  
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <GeneratorHeader>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Personality-Driven <HighlightText>Content Generator</HighlightText>
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Create blog posts that sound exactly like you—matching your style, tone, and mood.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepNumber active={activeStep === 0}>1</StepNumber>
            <Typography variant="body2" sx={{ color: 'white' }}>Writing Style</Typography>
          </Box>
          
          <StepConnector active={activeStep >= 1} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepNumber active={activeStep === 1}>2</StepNumber>
            <Typography variant="body2" sx={{ color: 'white' }}>Topic & Mood</Typography>
          </Box>
          
          <StepConnector active={activeStep >= 2} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepNumber active={activeStep === 2}>3</StepNumber>
            <Typography variant="body2" sx={{ color: 'white' }}>Generate</Typography>
          </Box>
          
          <StepConnector active={activeStep >= 3} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepNumber active={activeStep === 3}>4</StepNumber>
            <Typography variant="body2" sx={{ color: 'white' }}>Edit & Publish</Typography>
          </Box>
        </Box>
      </GeneratorHeader>

      {/* Step 1: Writing Style Analysis */}
      {activeStep === 0 && (
        <Box sx={{ mb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionTitle variant="h4" component="h2">
              Analyze Your <HighlightText>Writing Style</HighlightText>
            </SectionTitle>
            <SectionDescription variant="body1">
              Paste samples of your writing so our AI can learn your unique voice and style. The more text you provide, the better the results will be.
            </SectionDescription>
          </Box>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Box sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex' }}>
                <Button 
                  sx={{ 
                    px: 3, 
                    py: 1, 
                    borderBottom: '2px solid transparent',
                    borderBottomColor: 'secondary.main',
                    borderRadius: 0,
                    fontWeight: 500
                  }}
                >
                  Paste Text
                </Button>
                <Button 
                  sx={{ 
                    px: 3, 
                    py: 1, 
                    color: 'text.secondary',
                    borderBottom: '2px solid transparent',
                    borderRadius: 0,
                    fontWeight: 500
                  }}
                >
                  Upload Document
                </Button>
                <Button 
                  sx={{ 
                    px: 3, 
                    py: 1, 
                    color: 'text.secondary',
                    borderBottom: '2px solid transparent',
                    borderRadius: 0,
                    fontWeight: 500
                  }}
                >
                  Use Previous
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                multiline
                rows={12}
                fullWidth
                placeholder="Paste your blog posts, articles, or any writing samples here (minimum 300 words recommended)..."
                value={writingStyle}
                onChange={(e) => setWritingStyle(e.target.value)}
                sx={{ mb: 1 }}
                className="style-input"
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="body2" color="text.secondary">
                  {writingStyle.split(' ').filter(word => word.trim() !== '').length} / 300 words
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ backgroundColor: 'grey.50', p: 2, borderRadius: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Not sure what to paste?</Typography>
              <Typography variant="body2">Try one of these sources:</Typography>
              <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                <li>Previous blog posts or articles you've written</li>
                <li>Social media posts that reflect your voice</li>
                <li>Email newsletters you've sent to subscribers</li>
                <li>Transcripts from podcasts or videos you've created</li>
              </ul>
            </Box>
          </Paper>
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              onClick={handleNext}
              disabled={writingStyle.length < 50}
            >
              Continue to Topic & Mood
            </Button>
          </Box>
        </Box>
      )}

      {/* Step 2: Topic & Mood Selection */}
      {activeStep === 1 && (
        <Box sx={{ mb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionTitle variant="h4" component="h2">
              Select Your <HighlightText>Topic & Mood</HighlightText>
            </SectionTitle>
            <SectionDescription variant="body1">
              Choose what you want to write about and the emotional tone you'd like to convey.
            </SectionDescription>
          </Box>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Article Topic</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              What would you like to write about today?
            </Typography>
            
            <Box sx={{ display: 'flex', mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Enter your topic (e.g., 'The Benefits of Meditation for Productivity')"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                sx={{ mr: 1 }}
                className="topic-input"
              />
              <Button variant="outlined" color="secondary">
                Get Suggestions
              </Button>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>Topic Details</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Add more specifics to guide the content generation (optional).
              </Typography>
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Add key points, specific angles, or questions you want to address in your article..."
                value={topicDetails}
                onChange={(e) => setTopicDetails(e.target.value)}
              />
            </Box>
          </Paper>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Content Structure</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Choose the format and length for your article.
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="format-select-label">Article Format</InputLabel>
                  <Select
                    labelId="format-select-label"
                    id="format-select"
                    value={articleFormat}
                    label="Article Format"
                    onChange={(e) => setArticleFormat(e.target.value)}
                  >
                    <MenuItem value="standard">Standard Blog Post</MenuItem>
                    <MenuItem value="howto">How-To Guide</MenuItem>
                    <MenuItem value="listicle">Listicle</MenuItem>
                    <MenuItem value="opinion">Opinion Piece</MenuItem>
                    <MenuItem value="case">Case Study</MenuItem>
                    <MenuItem value="interview">Interview Style</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>Article Length</Typography>
                <Slider
                  value={articleLength}
                  onChange={(e, newValue) => setArticleLength(newValue)}
                  step={1}
                  marks={[
                    { value: 1, label: 'Brief' },
                    { value: 2, label: 'Short' },
                    { value: 3, label: 'Medium' },
                    { value: 4, label: 'Long' },
                    { value: 5, label: 'Detailed' },
                  ]}
                  min={1}
                  max={5}
                  color="secondary"
                />
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                  Approximately {articleLength === 1 ? '300-500' : articleLength === 2 ? '500-800' : articleLength === 3 ? '800-1200' : articleLength === 4 ? '1200-1800' : '1800-2500'} words
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              size="large" 
              onClick={handleBack}
            >
              Back to Writing Style
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              onClick={handleNext}
              disabled={!topic}
            >
              Continue to Generate
            </Button>
          </Box>
        </Box>
      )}

      {/* Step 3: Generate Content */}
      {activeStep === 2 && (
        <Box sx={{ mb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionTitle variant="h4" component="h2">
              Generate Your <HighlightText>Content</HighlightText>
            </SectionTitle>
            <SectionDescription variant="body1">
              Our AI will create a blog post that matches your writing style, topic, and mood.
            </SectionDescription>
          </Box>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Advanced Options</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox defaultChecked color="secondary" />} 
                  label="Include introduction and conclusion" 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox defaultChecked color="secondary" />} 
                  label="Add subheadings for structure" 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox defaultChecked color="secondary" />} 
                  label="Include personal anecdotes" 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox defaultChecked color="secondary" />} 
                  label="Add calls-to-action" 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox color="secondary" />} 
                  label="Include statistics and data points" 
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel 
                  control={<Checkbox color="secondary" />} 
                  label="Suggest image placements" 
                />
              </Grid>
            </Grid>
          </Paper>
          
          {!isGenerating ? (
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                onClick={handleGenerate}
                sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
              >
                Generate My Blog Post
              </Button>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                This will take approximately 30-45 seconds.
              </Typography>
            </Box>
          ) : (
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <CircularProgress color="secondary" />
              </Box>
              
              <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Analyzing writing style patterns</Typography>
                    <LinearProgress variant="determinate" value={100} color="success" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Researching topic information</Typography>
                    <LinearProgress variant="determinate" value={100} color="success" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Generating content in your style</Typography>
                    <LinearProgress variant="determinate" value={65} color="secondary" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Refining and formatting</Typography>
                    <LinearProgress variant="determinate" value={0} color="secondary" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
              </Box>
            </Paper>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              size="large" 
              onClick={handleBack}
              disabled={isGenerating}
            >
              Back to Topic & Mood
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              onClick={handleNext}
              disabled={isGenerating || !generatedContent}
            >
              Continue to Edit & Publish
            </Button>
          </Box>
        </Box>
      )}

      {/* Step 4: Edit & Publish */}
      {activeStep === 3 && (
        <Box sx={{ mb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <SectionTitle variant="h4" component="h2">
              Edit & <HighlightText>Publish</HighlightText>
            </SectionTitle>
            <SectionDescription variant="body1">
              Review, refine, and publish your AI-generated blog post.
            </SectionDescription>
          </Box>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Your Generated Blog Post</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" size="small">
                  Copy
                </Button>
                <Button variant="outlined" size="small">
                  Download
                </Button>
                <Button variant="outlined" size="small">
                  Preview
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Paper 
                sx={{ 
                  p: 2, 
                  mb: 2, 
                  backgroundColor: 'grey.50', 
                  display: 'flex',
                  gap: 1,
                  overflowX: 'auto',
                  whiteSpace: 'nowrap'
                }}
              >
                <Button size="small" variant="contained" sx={{ minWidth: 'auto', px: 1 }}>
                  B
                </Button>
                <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }}>
                  I
                </Button>
                <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }}>
                  U
                </Button>
                <Divider orientation="vertical" flexItem />
                <Button size="small" variant="outlined">
                  Heading
                </Button>
                <Button size="small" variant="outlined">
                  List
                </Button>
                <Button size="small" variant="outlined">
                  Quote
                </Button>
                <Divider orientation="vertical" flexItem />
                <Button size="small" variant="outlined">
                  Link
                </Button>
                <Button size="small" variant="outlined">
                  Image
                </Button>
              </Paper>
              
              <Paper 
                sx={{ 
                  p: 3, 
                  minHeight: 300, 
                  border: '1px solid', 
                  borderColor: 'grey.300',
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Typography variant="body1" color="text.secondary">
                    Your generated content will appear here.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Paper>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Ready to Publish?</Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="outlined" color="secondary" size="large">
                Save as Draft
              </Button>
              <Button variant="outlined" color="secondary" size="large">
                Schedule
              </Button>
              <Button variant="contained" color="secondary" size="large">
                Publish Now
              </Button>
            </Box>
          </Paper>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              size="large" 
              onClick={handleBack}
            >
              Back to Generate
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              onClick={() => setActiveStep(0)}
            >
              Start New Article
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Generate;
