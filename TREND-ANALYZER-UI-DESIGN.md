# BlogVerse - AI Trend Analyzer UI Design

This document outlines a modern, visually appealing design for the BlogVerse AI Trend Analyzer page, one of the key LLM-powered features of the platform.

## Design Overview

The AI Trend Analyzer page follows a clean, data-driven design with:
- Interactive visualizations of trending topics
- Personalized content recommendations
- Clear categorization of trends
- One-click content generation options
- Responsive layout for all devices

## Header Section

```jsx
<header className="trend-header">
  <div className="container">
    <div className="trend-header-content">
      <h1>AI <span className="highlight">Trend</span> Analyzer</h1>
      <p className="trend-description">Discover what's trending and get personalized content ideas tailored to your audience.</p>
    </div>
    
    <div className="trend-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <img src="/assets/refresh-icon.svg" alt="Refresh Icon" />
        </div>
        <div className="stat-info">
          <h3>Last Updated</h3>
          <p>Today, 2:45 PM</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">
          <img src="/assets/trending-icon.svg" alt="Trending Icon" />
        </div>
        <div className="stat-info">
          <h3>Trending Topics</h3>
          <p>42 New Today</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="stat-icon">
          <img src="/assets/personalized-icon.svg" alt="Personalized Icon" />
        </div>
        <div className="stat-info">
          <h3>For You</h3>
          <p>12 Recommendations</p>
        </div>
      </div>
    </div>
  </div>
</header>
```

![Trend Analyzer Header Mockup](https://example.com/mockups/trend-header.jpg)

*Design Notes: The header uses a gradient background with subtle pattern overlay. The stat cards have a glass-morphism effect with slight transparency and blur.*

## Trend Visualization Section

```jsx
<section className="trend-visualization">
  <div className="container">
    <div className="visualization-header">
      <h2>Trending Topics Map</h2>
      <div className="visualization-controls">
        <div className="time-filter">
          <button className="filter-btn active">Today</button>
          <button className="filter-btn">This Week</button>
          <button className="filter-btn">This Month</button>
        </div>
        <div className="view-toggle">
          <button className="toggle-btn active">
            <img src="/assets/bubble-view-icon.svg" alt="Bubble View" />
          </button>
          <button className="toggle-btn">
            <img src="/assets/list-view-icon.svg" alt="List View" />
          </button>
        </div>
      </div>
    </div>
    
    <div className="trend-map">
      <div className="trend-bubbles">
        {/* This would be a dynamic visualization with differently sized bubbles representing trends */}
        <div className="trend-bubble large" style={{top: '30%', left: '20%'}}>
          <span>AI Ethics</span>
        </div>
        <div className="trend-bubble medium" style={{top: '50%', left: '60%'}}>
          <span>Remote Work</span>
        </div>
        <div className="trend-bubble small" style={{top: '70%', left: '40%'}}>
          <span>NFTs</span>
        </div>
        <div className="trend-bubble medium" style={{top: '20%', left: '70%'}}>
          <span>Climate Tech</span>
        </div>
        <div className="trend-bubble large" style={{top: '60%', left: '15%'}}>
          <span>Mental Health</span>
        </div>
        {/* More bubbles would be dynamically generated */}
      </div>
    </div>
    
    <div className="trend-legend">
      <div className="legend-item">
        <div className="legend-color" style={{backgroundColor: 'var(--primary-color)'}}></div>
        <span>Technology</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{backgroundColor: 'var(--secondary-color)'}}></div>
        <span>Health & Wellness</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{backgroundColor: 'var(--accent-color)'}}></div>
        <span>Business</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{backgroundColor: 'var(--error-color)'}}></div>
        <span>Entertainment</span>
      </div>
      <div className="legend-item">
        <div className="legend-color" style={{backgroundColor: 'var(--success-color)'}}></div>
        <span>Lifestyle</span>
      </div>
    </div>
  </div>
</section>
```

![Trend Visualization Mockup](https://example.com/mockups/trend-visualization.jpg)

*Design Notes: The trend map is an interactive bubble chart where the size of each bubble represents the popularity of the topic. Bubbles are color-coded by category and can be clicked to see more details.*

## Personalized Recommendations Section

```jsx
<section className="personalized-recommendations">
  <div className="container">
    <div className="section-header">
      <h2>Recommended for <span className="highlight">You</span></h2>
      <p>Based on your interests and audience engagement</p>
    </div>
    
    <div className="recommendation-cards">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="topic-category" style={{backgroundColor: 'var(--primary-light)'}}>Technology</div>
          <div className="relevance-score">
            <div className="score-icon">
              <img src="/assets/match-icon.svg" alt="Match Score" />
            </div>
            <span>98% Match</span>
          </div>
        </div>
        <h3>The Future of AI in Content Creation</h3>
        <p>Explore how artificial intelligence is transforming how creators produce and distribute content.</p>
        <div className="recommendation-stats">
          <div className="stat">
            <img src="/assets/trending-up-icon.svg" alt="Trending Up" />
            <span>Trending Up</span>
          </div>
          <div className="stat">
            <img src="/assets/audience-icon.svg" alt="Audience" />
            <span>High Engagement</span>
          </div>
        </div>
        <div className="recommendation-actions">
          <button className="btn-primary">Generate Outline</button>
          <button className="btn-secondary">Save for Later</button>
        </div>
      </div>
      
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="topic-category" style={{backgroundColor: 'var(--secondary-color)'}}>Health</div>
          <div className="relevance-score">
            <div className="score-icon">
              <img src="/assets/match-icon.svg" alt="Match Score" />
            </div>
            <span>92% Match</span>
          </div>
        </div>
        <h3>Mindfulness Techniques for Creative Professionals</h3>
        <p>Discover how mindfulness practices can boost creativity and reduce burnout for content creators.</p>
        <div className="recommendation-stats">
          <div className="stat">
            <img src="/assets/trending-up-icon.svg" alt="Trending Up" />
            <span>Steady Growth</span>
          </div>
          <div className="stat">
            <img src="/assets/audience-icon.svg" alt="Audience" />
            <span>Medium Engagement</span>
          </div>
        </div>
        <div className="recommendation-actions">
          <button className="btn-primary">Generate Outline</button>
          <button className="btn-secondary">Save for Later</button>
        </div>
      </div>
      
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="topic-category" style={{backgroundColor: 'var(--accent-color)'}}>Business</div>
          <div className="relevance-score">
            <div className="score-icon">
              <img src="/assets/match-icon.svg" alt="Match Score" />
            </div>
            <span>87% Match</span>
          </div>
        </div>
        <h3>Monetization Strategies for Content Creators in 2025</h3>
        <p>Learn about emerging revenue models and how to diversify your income streams as a creator.</p>
        <div className="recommendation-stats">
          <div className="stat">
            <img src="/assets/trending-up-icon.svg" alt="Trending Up" />
            <span>Rapidly Rising</span>
          </div>
          <div className="stat">
            <img src="/assets/audience-icon.svg" alt="Audience" />
            <span>Very High Engagement</span>
          </div>
        </div>
        <div className="recommendation-actions">
          <button className="btn-primary">Generate Outline</button>
          <button className="btn-secondary">Save for Later</button>
        </div>
      </div>
    </div>
    
    <div className="load-more">
      <button className="btn-outline">Load More Recommendations</button>
    </div>
  </div>
</section>
```

![Personalized Recommendations Mockup](https://example.com/mockups/personalized-recommendations.jpg)

*Design Notes: Each recommendation card has a subtle hover effect that elevates the card and increases the shadow. The match percentage is calculated based on the user's interests and past content performance.*

## Trending Articles Section

```jsx
<section className="trending-articles">
  <div className="container">
    <div className="section-header">
      <h2>Trending <span className="highlight">Articles</span></h2>
      <p>Popular content from around the web</p>
    </div>
    
    <div className="articles-filter">
      <div className="filter-tabs">
        <button className="filter-tab active">All Categories</button>
        <button className="filter-tab">Technology</button>
        <button className="filter-tab">Health</button>
        <button className="filter-tab">Business</button>
        <button className="filter-tab">Entertainment</button>
        <button className="filter-tab">Lifestyle</button>
      </div>
      <div className="sort-options">
        <label>Sort by:</label>
        <select className="sort-select">
          <option>Trending Now</option>
          <option>Most Shared</option>
          <option>Most Commented</option>
          <option>Recently Published</option>
        </select>
      </div>
    </div>
    
    <div className="articles-grid">
      <div className="article-card">
        <div className="article-image">
          <img src="/assets/article1.jpg" alt="Article thumbnail" />
          <div className="source-badge">TechCrunch</div>
        </div>
        <div className="article-content">
          <h3>How AI is Revolutionizing Content Creation in 2025</h3>
          <p>The latest advancements in AI are changing how we create and consume content...</p>
          <div className="article-meta">
            <div className="meta-item">
              <img src="/assets/clock-icon.svg" alt="Clock icon" />
              <span>2 hours ago</span>
            </div>
            <div className="meta-item">
              <img src="/assets/share-icon.svg" alt="Share icon" />
              <span>2.4K shares</span>
            </div>
          </div>
          <div className="article-actions">
            <button className="btn-secondary">Summarize</button>
            <button className="btn-primary">Generate Similar</button>
          </div>
        </div>
      </div>
      
      {/* More article cards would follow the same structure */}
      {/* Additional article cards would be displayed in a responsive grid */}
    </div>
    
    <div className="pagination">
      <button className="pagination-btn prev">
        <img src="/assets/arrow-left-icon.svg" alt="Previous" />
      </button>
      <div className="pagination-numbers">
        <button className="pagination-number active">1</button>
        <button className="pagination-number">2</button>
        <button className="pagination-number">3</button>
        <span className="pagination-ellipsis">...</span>
        <button className="pagination-number">12</button>
      </div>
      <button className="pagination-btn next">
        <img src="/assets/arrow-right-icon.svg" alt="Next" />
      </button>
    </div>
  </div>
</section>
```

![Trending Articles Mockup](https://example.com/mockups/trending-articles.jpg)

*Design Notes: The article cards have a clean design with a prominent image, clear typography, and action buttons. The grid is responsive and adjusts based on screen size.*

## Content Generation Modal

```jsx
<div className="modal content-generation-modal">
  <div className="modal-overlay"></div>
  <div className="modal-content">
    <div className="modal-header">
      <h2>Generate Content Outline</h2>
      <button className="modal-close">×</button>
    </div>
    
    <div className="modal-body">
      <div className="topic-info">
        <h3>Topic: The Future of AI in Content Creation</h3>
        <div className="topic-tags">
          <span className="topic-tag">Technology</span>
          <span className="topic-tag">Artificial Intelligence</span>
          <span className="topic-tag">Content Creation</span>
        </div>
      </div>
      
      <div className="generation-options">
        <div className="option-group">
          <label>Outline Length</label>
          <div className="radio-buttons">
            <label className="radio-label">
              <input type="radio" name="length" value="brief" />
              <span>Brief</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="length" value="standard" checked />
              <span>Standard</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="length" value="detailed" />
              <span>Detailed</span>
            </label>
          </div>
        </div>
        
        <div className="option-group">
          <label>Content Style</label>
          <div className="radio-buttons">
            <label className="radio-label">
              <input type="radio" name="style" value="informative" checked />
              <span>Informative</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="style" value="opinion" />
              <span>Opinion</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="style" value="tutorial" />
              <span>Tutorial</span>
            </label>
          </div>
        </div>
        
        <div className="option-group">
          <label>Target Audience</label>
          <select className="audience-select">
            <option>General Readers</option>
            <option>Technical Professionals</option>
            <option>Business Leaders</option>
            <option>Creative Professionals</option>
          </select>
        </div>
        
        <div className="option-group">
          <label>Include</label>
          <div className="checkbox-options">
            <label className="checkbox-label">
              <input type="checkbox" checked />
              <span>Key Statistics</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" checked />
              <span>Expert Quotes</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" checked />
              <span>Case Studies</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Counterarguments</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="ai-processing">
        <div className="processing-animation">
          <div className="pulse-animation"></div>
          <img src="/assets/ai-processing-icon.svg" alt="AI Processing" />
        </div>
        <div className="processing-text">
          <h4>AI is analyzing trending data</h4>
          <p>Creating a personalized outline based on your preferences...</p>
        </div>
      </div>
      
      <div className="generated-outline">
        <h3>Generated Outline</h3>
        <div className="outline-content">
          <div className="outline-section">
            <h4>1. Introduction</h4>
            <ul>
              <li>Current state of content creation</li>
              <li>The growing role of AI in creative industries</li>
              <li>Key statistics on AI adoption in content creation</li>
            </ul>
          </div>
          
          <div className="outline-section">
            <h4>2. Types of AI in Content Creation</h4>
            <ul>
              <li>Natural Language Processing (NLP) tools</li>
              <li>Image and video generation AI</li>
              <li>Voice synthesis and audio creation</li>
              <li>Content personalization engines</li>
            </ul>
          </div>
          
          <div className="outline-section">
            <h4>3. Benefits and Opportunities</h4>
            <ul>
              <li>Increased productivity and efficiency</li>
              <li>Enhanced creativity through AI collaboration</li>
              <li>Personalization at scale</li>
              <li>Case study: How Company X increased output by 300%</li>
            </ul>
          </div>
          
          <div className="outline-section">
            <h4>4. Challenges and Limitations</h4>
            <ul>
              <li>Quality control and human oversight</li>
              <li>Ethical considerations and copyright issues</li>
              <li>The importance of maintaining authenticity</li>
              <li>Expert quote on balancing AI and human creativity</li>
            </ul>
          </div>
          
          <div className="outline-section">
            <h4>5. Future Trends</h4>
            <ul>
              <li>Multimodal AI systems</li>
              <li>Collaborative AI tools for teams</li>
              <li>AI-powered content strategy and distribution</li>
              <li>Statistics on projected market growth</li>
            </ul>
          </div>
          
          <div className="outline-section">
            <h4>6. Conclusion</h4>
            <ul>
              <li>Key takeaways for content creators</li>
              <li>How to prepare for an AI-enhanced future</li>
              <li>Call to action: Experimenting with AI tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="modal-footer">
      <button className="btn-secondary">Regenerate</button>
      <button className="btn-secondary">Edit Outline</button>
      <button className="btn-primary">Create Full Article</button>
    </div>
  </div>
</div>
```

![Content Generation Modal Mockup](https://example.com/mockups/content-generation-modal.jpg)

*Design Notes: The modal has a clean, focused design with clear sections for options and the generated outline. The AI processing animation provides visual feedback while the LLM is generating content.*

## CSS Styling for Trend Analyzer

```css
/* Trend Analyzer Specific Styles */

/* Header Styles */
.trend-header {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  color: white;
  padding: var(--spacing-2xl) 0;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
}

.trend-header-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
}

.trend-header-content h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.trend-description {
  font-size: 1.25rem;
  opacity: 0.9;
}

.trend-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  min-width: 200px;
}

.stat-icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
}

.stat-info h3 {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
}

.stat-info p {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

/* Trend Visualization Styles */
.trend-visualization {
  background-color: var(--background-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.visualization-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.visualization-controls {
  display: flex;
  gap: var(--spacing-md);
}

.time-filter, .view-toggle {
  display: flex;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.filter-btn, .toggle-btn {
  background: var(--background);
  border: 1px solid var(--border-color);
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  font-size: 0.875rem;
}

.filter-btn.active, .toggle-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.trend-map {
  background-color: var(--background);
  border-radius: var(--radius-md);
  height: 400px;
  position: relative;
  margin-bottom: var(--spacing-lg);
  border: 1px solid var(--border-color);
}

.trend-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.trend-bubble {
  position: absolute;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition-normal);
}

.trend-bubble.large {
  width: 120px;
  height: 120px;
  background-color: var(--primary-color);
  font-size: 1.125rem;
}

.trend-bubble.medium {
  width: 90px;
  height: 90px;
  background-color: var(--secondary-color);
  font-size: 1rem;
}

.trend-bubble.small {
  width: 60px;
  height: 60px;
  background-color: var(--accent-color);
  font-size: 0.875rem;
}

.trend-bubble:hover {
  transform: scale(1.1);
  z-index: 10;
}

.trend-legend {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-sm);
  margin-right: var(--spacing-sm);
}

/* Add more specific styles for other sections */
```

## Responsive Design for Trend Analyzer

```css
/* Responsive Styles for Trend Analyzer */

@media (max-width: 1024px) {
  .trend-stats {
    flex-wrap: wrap;
  }
  
  .stat-card {
    min-width: 160px;
  }
  
  .visualization-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .trend-map {
    height: 350px;
  }
  
  .recommendation-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .trend-header-content h1 {
    font-size: 2.5rem;
  }
  
  .trend-description {
    font-size: 1.125rem;
  }
  
  .visualization-controls {
    flex-direction: column;
    width: 100%;
  }
  
  .time-filter, .view-toggle {
    width: 100%;
  }
  
  .filter-btn {
    flex: 1;
  }
  
  .trend-map {
    height: 300px;
  }
  
  .recommendation-cards {
    grid-template-columns: 1fr;
  }
  
  .articles-filter {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .filter-tabs {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .trend-header-content h1 {
    font-size: 2rem;
  }
  
  .trend-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-card {
    width: 100%;
  }
  
  .trend-map {
    height: 250px;
  }
  
  .trend-bubble.large {
    width: 90px;
    height: 90px;
  }
  
  .trend-bubble.medium {
    width: 70px;
    height: 70px;
  }
  
  .trend-bubble.small {
    width: 50px;
    height: 50px;
  }
  
  .modal-content {
    width: 95%;
    max-height: 90vh;
    overflow-y: auto;
  }
}
```

## Image Requirements for Trend Analyzer

1. **Icon Set**
   - Refresh icon
   - Trending icon
   - Personalized recommendation icon
   - Bubble view and list view toggle icons
   - Category icons for different content types
   - Match score icon
   - Trending up/down indicators
   - Clock and share icons
   - Navigation arrows

2. **Visualization Elements**
   - Background pattern for the trend map
   - Bubble designs with subtle gradients
   - Visual indicators for trend strength

3. **Article Thumbnails**
   - High-quality images related to trending topics
   - Consistent aspect ratio (16:9 recommended)
   - Overlay elements for source badges

4. **AI Processing Animation**
   - Animated icon showing AI analysis in progress
   - Pulse animation elements
   - Progress indicators
