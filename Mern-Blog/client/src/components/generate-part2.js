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
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Generation Parameters</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Box sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    <Typography>📝</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">Writing Style</Typography>
                    <Typography variant="subtitle2">{profiles[activeProfile].name}</Typography>
                  </Box>
                  <Button size="small" sx={{ color: 'text.secondary' }} onClick={() => handleBack()}>Edit</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Box sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    <Typography>📌</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">Topic</Typography>
                    <Typography variant="subtitle2" noWrap>{topic}</Typography>
                  </Box>
                  <Button size="small" sx={{ color: 'text.secondary' }} onClick={() => handleBack()}>Edit</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Box sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    <Typography>{moods[activeMood].icon}</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">Mood</Typography>
                    <Typography variant="subtitle2">{moods[activeMood].name}</Typography>
                  </Box>
                  <Button size="small" sx={{ color: 'text.secondary' }} onClick={() => handleBack()}>Edit</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Box sx={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    <Typography>📊</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">Format & Length</Typography>
                    <Typography variant="subtitle2" noWrap>
                      {articleFormat === 'standard' ? 'Standard Blog Post' : 
                       articleFormat === 'howto' ? 'How-To Guide' : 
                       articleFormat === 'listicle' ? 'Listicle' : 
                       articleFormat === 'opinion' ? 'Opinion Piece' : 
                       articleFormat === 'case' ? 'Case Study' : 'Interview Style'} • {
                        articleLength === 1 ? 'Brief' : 
                        articleLength === 2 ? 'Short' : 
                        articleLength === 3 ? 'Medium' : 
                        articleLength === 4 ? 'Long' : 'Detailed'
                      }
                    </Typography>
                  </Box>
                  <Button size="small" sx={{ color: 'text.secondary' }} onClick={() => handleBack()}>Edit</Button>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          
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
                <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography>✨</Typography>
                </Box>
                Generate My Blog Post
              </Button>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                This will take approximately 30-45 seconds.
              </Typography>
            </Box>
          ) : (
            <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Box sx={{ 
                  width: 100, 
                  height: 100, 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(131, 56, 236, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'pulse 2s infinite'
                }}>
                  <CircularProgress color="secondary" />
                </Box>
              </Box>
              
              <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    backgroundColor: 'success.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mr: 2,
                    fontSize: '0.75rem'
                  }}>
                    ✓
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Analyzing writing style patterns</Typography>
                    <LinearProgress variant="determinate" value={100} color="success" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    backgroundColor: 'success.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mr: 2,
                    fontSize: '0.75rem'
                  }}>
                    ✓
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Researching topic information</Typography>
                    <LinearProgress variant="determinate" value={100} color="success" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mr: 2,
                    fontSize: '0.75rem',
                    animation: 'pulse 1.5s infinite'
                  }}>
                    3
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>Generating content in your style</Typography>
                    <LinearProgress variant="determinate" value={65} color="secondary" sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: 24, 
                    height: 24, 
                    borderRadius: '50%', 
                    backgroundColor: 'grey.400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mr: 2,
                    fontSize: '0.75rem'
                  }}>
                    4
                  </Box>
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
                <Button variant="outlined" size="small" startIcon={<span>📋</span>}>
                  Copy
                </Button>
                <Button variant="outlined" size="small" startIcon={<span>⬇️</span>}>
                  Download
                </Button>
                <Button variant="outlined" size="small" startIcon={<span>🔍</span>}>
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
                  <span>B</span>
                </Button>
                <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }}>
                  <span><i>I</i></span>
                </Button>
                <Button size="small" variant="outlined" sx={{ minWidth: 'auto', px: 1 }}>
                  <span><u>U</u></span>
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
                  minHeight: 500, 
                  border: '1px solid', 
                  borderColor: 'grey.300',
                  borderRadius: 1
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                    The Benefits of Meditation for Productivity: Finding Focus in a Distracted World
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph>
                  Have you ever found yourself staring at your computer screen, completely overwhelmed by your to-do list and unable to focus on the task at hand? I've been there more times than I can count. In our hyper-connected world, distractions are everywhere, and our attention spans seem to be shrinking by the day.
                </Typography>
                
                <Typography variant="body1" paragraph>
                  That's why I started exploring meditation as a way to improve my focus and productivity. And let me tell you, the results have been nothing short of amazing! In this post, I'll share how incorporating just a few minutes of meditation into your daily routine can transform your productivity and help you accomplish more with less stress.
                </Typography>
                
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 4 }}>
                  What is Meditation, Really?
                </Typography>
                
                <Typography variant="body1" paragraph>
                  Before we dive in, let's clear something up. Meditation isn't about emptying your mind or achieving some mystical state of enlightenment (though that would be nice!). At its core, meditation is simply the practice of training your attention and awareness.
                </Typography>
                
                <Typography variant="body1" paragraph>
                  Think of it as a workout for your brain. Just like you hit the gym to strengthen your muscles, meditation strengthens your ability to focus and stay present. And just like physical exercise, the benefits compound over time.
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  [Content truncated for preview]
                </Typography>
              </Paper>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Paper sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>1,024</Typography>
                  <Typography variant="body2" color="text.secondary">Words</Typography>
                </Paper>
                <Paper sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>5:12</Typography>
                  <Typography variant="body2" color="text.secondary">Read Time</Typography>
                </Paper>
                <Paper sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>8</Typography>
                  <Typography variant="body2" color="text.secondary">Sections</Typography>
                </Paper>
              </Box>
              <Paper sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 1, backgroundColor: 'secondary.light', color: 'white' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>94%</Typography>
                <Typography variant="body2">Style Match</Typography>
              </Paper>
            </Box>
          </Paper>
          
          <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Enhance Your Content</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography>➕</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Expand a Section</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                    Add more detail to any section of your article
                  </Typography>
                  <Button variant="outlined" color="secondary" fullWidth>Select Section</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography>✂️</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Shorten Content</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                    Make your article more concise
                  </Typography>
                  <Button variant="outlined" color="secondary" fullWidth>Select Section</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography>🎭</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Adjust Tone</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                    Make content more formal or casual
                  </Typography>
                  <Button variant="outlined" color="secondary" fullWidth>Adjust</Button>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography>🔍</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>SEO Optimize</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                    Enhance for search engines
                  </Typography>
                  <Button variant="outlined" color="secondary" fullWidth>Optimize</Button>
                </Paper>
              </Grid>
            </Grid>
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
