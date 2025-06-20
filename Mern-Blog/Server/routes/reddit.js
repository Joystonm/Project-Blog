const express = require('express');
const axios = require('axios');
const router = express.Router();

// A list of predefined categories based on keywords
const categories = {
  technology: [
    'AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Blockchain', 'Cloud',
    'Programming', 'Web Development', 'Cybersecurity', 'Data Science', 'DevOps',
    'IoT', 'Augmented Reality', 'Virtual Reality', 'Edge Computing', 'Quantum Computing',
    '5G', 'Robotics', 'Software Engineering', 'Mobile Apps', 'Linux', 'JavaScript',
    'Python', 'React', 'Django', 'Automation', 'SaaS', 'Open Source', 'GitHub', 'Big Data'
  ],
  science: [
    'Space', 'Physics', 'Biology', 'Chemistry', 'Astronomy', 'Genetics', 'Evolution',
    'Ecology', 'Climate Change', 'Geology', 'Botany', 'Zoology', 'Paleontology',
    'Meteorology', 'Anatomy', 'Neuroscience', 'Scientific Research', 'Lab Experiments'
  ],
  business: [
    'Startups', 'Economy', 'Finance', 'Cryptocurrency', 'Stock Market', 'Investments',
    'Entrepreneurship', 'Marketing', 'Sales', 'E-commerce', 'Venture Capital', 'Trade',
    'Banking', 'Real Estate', 'Merger', 'Acquisition', 'Business Strategy', 'Analytics'
  ],
  health: [
    'Fitness', 'Nutrition', 'Mental Health', 'Wellness', 'Healthcare', 'Medicine',
    'Exercise', 'Vaccines', 'Diseases', 'Therapy', 'Yoga', 'Sleep', 'Public Health',
    'Doctor', 'Hospital', 'Diagnosis', 'Treatment', 'Meditation', 'COVID-19'
  ]
};

// Simple test endpoint to check if the route is working
router.get('/test', (req, res) => {
  res.json({ message: 'Reddit API route is working!' });
});

// Define your endpoint
router.get('/trending', async (req, res) => {
  try {
    // Use multiple subreddits for more diverse content
    const subreddits = ['technology', 'science', 'business', 'health'];
    let allPosts = [];
    
    // Get posts from each subreddit
    for (const subreddit of subreddits) {
      try {
        const response = await axios.get(
          `https://www.reddit.com/r/${subreddit}/top.json?limit=5&t=day`,
          {
            headers: { 'User-Agent': 'Chai&Chapters/1.0' },
          }
        );
        
        const posts = response.data.data.children.map(post => ({
          title: post.data.title,
          url: `https://reddit.com${post.data.permalink}`,
          score: post.data.score,
          comments: post.data.num_comments,
          author: post.data.author,
          subreddit: post.data.subreddit,
          category: subreddit // Default category is the subreddit name
        }));
        
        allPosts = [...allPosts, ...posts];
      } catch (error) {
        console.log(`Error fetching from r/${subreddit}:`, error.message);
        // Continue with other subreddits even if one fails
      }
    }
    
    // If we couldn't get any posts, return an error
    if (allPosts.length === 0) {
      return res.status(500).json({ error: 'Failed to fetch Reddit trends' });
    }
    
    // Categorize the trending posts based on keywords in titles
    allPosts.forEach(post => {
      Object.keys(categories).forEach(category => {
        for (const keyword of categories[category]) {
          if (post.title.toLowerCase().includes(keyword.toLowerCase())) {
            post.category = category;
            break;
          }
        }
      });
    });
    
    // Count posts by category
    const categoryCounts = {};
    allPosts.forEach(post => {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    
    // Recommend the top categories based on trending posts
    const recommendedCategories = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by most frequent
      .map(([category]) => category);
    
    // Send the response with trending posts and recommendations
    res.json({
      posts: allPosts,
      recommendedCategories,
    });
  } catch (err) {
    console.error('Reddit API error:', err.message);
    res.status(500).json({ error: 'Failed to fetch Reddit trends' });
  }
});

module.exports = router;
