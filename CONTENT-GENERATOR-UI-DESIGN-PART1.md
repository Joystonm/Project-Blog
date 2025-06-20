# BlogVerse - Personality-Driven Content Generator UI Design (Part 1)

This document outlines a modern, visually appealing design for the BlogVerse Personality-Driven Content Generator page, one of the key LLM-powered features of the platform.

## Design Overview

The Personality-Driven Content Generator page features:
- A multi-step process for analyzing writing style and generating content
- Interactive input areas for writing samples
- Mood and topic selection interfaces
- Real-time AI feedback and analysis
- Preview and editing capabilities for generated content

## Header Section

```jsx
<header className="generator-header">
  <div className="container">
    <div className="generator-header-content">
      <h1>Personality-Driven <span className="highlight">Content Generator</span></h1>
      <p className="generator-description">Create blog posts that sound exactly like you—matching your style, tone, and mood.</p>
    </div>
    
    <div className="process-steps">
      <div className="step active">
        <div className="step-number">1</div>
        <div className="step-label">Writing Style</div>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-number">2</div>
        <div className="step-label">Topic & Mood</div>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-number">3</div>
        <div className="step-label">Generate</div>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-number">4</div>
        <div className="step-label">Edit & Publish</div>
      </div>
    </div>
  </div>
</header>
```

![Content Generator Header Mockup](https://example.com/mockups/generator-header.jpg)

*Design Notes: The header uses a gradient background with subtle pattern overlay. The process steps have a clean, modern design with clear visual indicators for the current step.*

## Step 1: Writing Style Analysis

```jsx
<section className="writing-style-section active-step">
  <div className="container">
    <div className="section-intro">
      <h2>Analyze Your <span className="highlight">Writing Style</span></h2>
      <p>Paste samples of your writing so our AI can learn your unique voice and style. The more text you provide, the better the results will be.</p>
    </div>
    
    <div className="input-options">
      <div className="input-option-tabs">
        <button className="option-tab active">Paste Text</button>
        <button className="option-tab">Upload Document</button>
        <button className="option-tab">Use Previous</button>
      </div>
      
      <div className="input-area">
        <div className="text-input-container">
          <textarea 
            className="style-input" 
            placeholder="Paste your blog posts, articles, or any writing samples here (minimum 300 words recommended)..."
            rows="12"
          ></textarea>
          <div className="word-count">
            <span className="current-count">0</span> / <span className="recommended-count">300</span> words
          </div>
        </div>
        
        <div className="sample-prompts">
          <h4>Not sure what to paste?</h4>
          <p>Try one of these sources:</p>
          <ul>
            <li>Previous blog posts or articles you've written</li>
            <li>Social media posts that reflect your voice</li>
            <li>Email newsletters you've sent to subscribers</li>
            <li>Transcripts from podcasts or videos you've created</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="style-profiles">
      <h3>Saved Writing Profiles</h3>
      <p>You can save different writing styles for various content types.</p>
      
      <div className="profile-cards">
        <div className="profile-card active">
          <div className="profile-icon">
            <img src="/assets/casual-icon.svg" alt="Casual Blog Style" />
          </div>
          <div className="profile-info">
            <h4>Casual Blog Style</h4>
            <p>Friendly, conversational tone with personal anecdotes</p>
          </div>
          <div className="profile-actions">
            <button className="btn-icon">
              <img src="/assets/edit-icon.svg" alt="Edit" />
            </button>
            <button className="btn-icon">
              <img src="/assets/delete-icon.svg" alt="Delete" />
            </button>
          </div>
        </div>
        
        <div className="profile-card">
          <div className="profile-icon">
            <img src="/assets/professional-icon.svg" alt="Professional Style" />
          </div>
          <div className="profile-info">
            <h4>Professional Style</h4>
            <p>Formal tone with industry terminology and data-driven insights</p>
          </div>
          <div className="profile-actions">
            <button className="btn-icon">
              <img src="/assets/edit-icon.svg" alt="Edit" />
            </button>
            <button className="btn-icon">
              <img src="/assets/delete-icon.svg" alt="Delete" />
            </button>
          </div>
        </div>
        
        <div className="profile-card add-new">
          <div className="add-icon">+</div>
          <p>Create New Profile</p>
        </div>
      </div>
    </div>
    
    <div className="style-analysis-results">
      <h3>Style Analysis</h3>
      <p>Our AI will analyze your writing to identify key characteristics of your style.</p>
      
      <div className="analysis-status">
        <div className="status-icon analyzing">
          <div className="pulse-animation"></div>
          <img src="/assets/analyzing-icon.svg" alt="Analyzing" />
        </div>
        <div className="status-text">
          <h4>Analyzing your writing style...</h4>
          <p>This will take just a moment.</p>
        </div>
      </div>
      
      <div className="analysis-results">
        <div className="result-card">
          <h4>Tone & Voice</h4>
          <div className="result-tags">
            <span className="result-tag">Conversational</span>
            <span className="result-tag">Enthusiastic</span>
            <span className="result-tag">Informative</span>
          </div>
          <div className="result-chart">
            <div className="chart-item">
              <span className="chart-label">Formal</span>
              <div className="chart-bar">
                <div className="chart-fill" style={{width: '30%'}}></div>
              </div>
              <span className="chart-label">Casual</span>
            </div>
            <div className="chart-item">
              <span className="chart-label">Technical</span>
              <div className="chart-bar">
                <div className="chart-fill" style={{width: '45%'}}></div>
              </div>
              <span className="chart-label">Simple</span>
            </div>
            <div className="chart-item">
              <span className="chart-label">Serious</span>
              <div className="chart-bar">
                <div className="chart-fill" style={{width: '25%'}}></div>
              </div>
              <span className="chart-label">Humorous</span>
            </div>
          </div>
        </div>
        
        <div className="result-card">
          <h4>Writing Structure</h4>
          <div className="result-stats">
            <div className="stat-item">
              <div className="stat-value">Medium</div>
              <div className="stat-label">Sentence Length</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">High</div>
              <div className="stat-label">Paragraph Variety</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Medium</div>
              <div className="stat-label">Vocabulary Richness</div>
            </div>
          </div>
          <div className="structure-notes">
            <p>You tend to use a mix of short and medium-length sentences with occasional longer ones for emphasis. Your paragraphs are typically 2-4 sentences long.</p>
          </div>
        </div>
        
        <div className="result-card">
          <h4>Distinctive Elements</h4>
          <ul className="distinctive-list">
            <li>Frequent use of rhetorical questions</li>
            <li>Personal anecdotes to illustrate points</li>
            <li>Occasional use of metaphors and analogies</li>
            <li>Direct reader address ("you" language)</li>
            <li>Bullet points and lists for clarity</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="step-navigation">
      <div></div>
      <button className="btn-primary btn-large next-step">Continue to Topic & Mood</button>
    </div>
  </div>
</section>
```

![Writing Style Analysis Mockup](https://example.com/mockups/writing-style-analysis.jpg)

*Design Notes: The writing style analysis section features a clean, focused design with clear instructions and visual feedback. The analysis results use charts and tags to visualize the AI's understanding of the user's writing style.*

## Step 2: Topic & Mood Selection

```jsx
<section className="topic-mood-section">
  <div className="container">
    <div className="section-intro">
      <h2>Select Your <span className="highlight">Topic & Mood</span></h2>
      <p>Choose what you want to write about and the emotional tone you'd like to convey.</p>
    </div>
    
    <div className="topic-selection">
      <h3>Article Topic</h3>
      <p>What would you like to write about today?</p>
      
      <div className="topic-input-container">
        <input 
          type="text" 
          className="topic-input" 
          placeholder="Enter your topic (e.g., 'The Benefits of Meditation for Productivity')"
        />
        <button className="btn-icon suggestion-btn">
          <img src="/assets/suggestion-icon.svg" alt="Get Suggestions" />
        </button>
      </div>
      
      <div className="topic-suggestions">
        <h4>Trending Topic Suggestions</h4>
        <div className="suggestion-tags">
          <button className="suggestion-tag">Remote Work Productivity Tips</button>
          <button className="suggestion-tag">AI Tools for Content Creators</button>
          <button className="suggestion-tag">Mindfulness Practices for Busy Professionals</button>
          <button className="suggestion-tag">Sustainable Living Habits</button>
          <button className="suggestion-tag">Personal Finance for Freelancers</button>
        </div>
      </div>
      
      <div className="topic-details">
        <h4>Topic Details</h4>
        <p>Add more specifics to guide the content generation (optional).</p>
        <textarea 
          className="details-input" 
          placeholder="Add key points, specific angles, or questions you want to address in your article..."
          rows="4"
        ></textarea>
      </div>
    </div>
    
    <div className="mood-selection">
      <h3>Article Mood</h3>
      <p>Select the emotional tone you want your article to convey.</p>
      
      <div className="mood-cards">
        <div className="mood-card active">
          <div className="mood-icon">
            <img src="/assets/informative-icon.svg" alt="Informative" />
          </div>
          <h4>Informative</h4>
          <p>Educational and fact-based approach</p>
        </div>
        
        <div className="mood-card">
          <div className="mood-icon">
            <img src="/assets/enthusiastic-icon.svg" alt="Enthusiastic" />
          </div>
          <h4>Enthusiastic</h4>
          <p>Excited and passionate tone</p>
        </div>
        
        <div className="mood-card">
          <div className="mood-icon">
            <img src="/assets/reflective-icon.svg" alt="Reflective" />
          </div>
          <h4>Reflective</h4>
          <p>Thoughtful and contemplative approach</p>
        </div>
        
        <div className="mood-card">
          <div className="mood-icon">
            <img src="/assets/humorous-icon.svg" alt="Humorous" />
          </div>
          <h4>Humorous</h4>
          <p>Light-hearted and entertaining</p>
        </div>
        
        <div className="mood-card">
          <div className="mood-icon">
            <img src="/assets/critical-icon.svg" alt="Critical" />
          </div>
          <h4>Critical</h4>
          <p>Analytical and evaluative perspective</p>
        </div>
        
        <div className="mood-card">
          <div className="mood-icon">
            <img src="/assets/inspirational-icon.svg" alt="Inspirational" />
          </div>
          <h4>Inspirational</h4>
          <p>Motivating and uplifting content</p>
        </div>
      </div>
    </div>
    
    <div className="content-structure">
      <h3>Content Structure</h3>
      <p>Choose the format and length for your article.</p>
      
      <div className="structure-options">
        <div className="option-group">
          <label>Article Format</label>
          <select className="format-select">
            <option>Standard Blog Post</option>
            <option>How-To Guide</option>
            <option>Listicle</option>
            <option>Opinion Piece</option>
            <option>Case Study</option>
            <option>Interview Style</option>
          </select>
        </div>
        
        <div className="option-group">
          <label>Article Length</label>
          <div className="length-slider-container">
            <input type="range" min="1" max="5" value="3" className="length-slider" />
            <div className="length-labels">
              <span>Brief</span>
              <span>Short</span>
              <span>Medium</span>
              <span>Long</span>
              <span>Detailed</span>
            </div>
            <div className="word-count-estimate">
              Approximately 800-1000 words
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="step-navigation">
      <button className="btn-secondary btn-large prev-step">Back to Writing Style</button>
      <button className="btn-primary btn-large next-step">Continue to Generate</button>
    </div>
  </div>
</section>
```

![Topic & Mood Selection Mockup](https://example.com/mockups/topic-mood-selection.jpg)

*Design Notes: The topic and mood selection section features intuitive input methods with visual cues. The mood cards have subtle hover and selection effects, and the structure options use familiar form controls with clear labels.*
