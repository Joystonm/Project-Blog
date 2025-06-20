# BlogVerse - Smart Article Summarization UI Design

This document outlines a modern, visually appealing design for the BlogVerse Smart Article Summarization page, one of the key LLM-powered features of the platform.

## Design Overview

The Smart Article Summarization page features:
- Clean, focused interface for inputting articles
- Multiple summarization options
- Visual representation of the summarization process
- Easy-to-read output with key points highlighted
- Options to save, share, or expand summaries

## Header Section

```jsx
<header className="summary-header">
  <div className="container">
    <div className="summary-header-content">
      <h1>Smart Article <span className="highlight">Summarization</span></h1>
      <p className="summary-description">Transform lengthy articles into concise summaries without losing key insights.</p>
    </div>
  </div>
</header>
```

![Summary Header Mockup](https://example.com/mockups/summary-header.jpg)

*Design Notes: The header uses a gradient background with subtle pattern overlay. The typography is clean and impactful with the highlight effect on "Summarization".*

## Input Section

```jsx
<section className="article-input-section">
  <div className="container">
    <div className="input-container">
      <div className="input-tabs">
        <button className="input-tab active">URL</button>
        <button className="input-tab">Text</button>
        <button className="input-tab">Upload</button>
      </div>
      
      <div className="input-content">
        <div className="url-input active">
          <div className="input-field-container">
            <input 
              type="text" 
              className="url-field" 
              placeholder="Paste article URL here (e.g., https://example.com/article)"
            />
            <button className="btn-primary fetch-btn">Fetch Article</button>
          </div>
          <div className="recent-urls">
            <h4>Recent URLs</h4>
            <div className="url-history">
              <div className="history-item">
                <div className="history-icon">
                  <img src="/assets/article-icon.svg" alt="Article" />
                </div>
                <div className="history-content">
                  <h5>The Future of Remote Work</h5>
                  <p>techcrunch.com • 2 days ago</p>
                </div>
                <button className="btn-icon">
                  <img src="/assets/reload-icon.svg" alt="Reload" />
                </button>
              </div>
              
              <div className="history-item">
                <div className="history-icon">
                  <img src="/assets/article-icon.svg" alt="Article" />
                </div>
                <div className="history-content">
                  <h5>10 Productivity Hacks for 2025</h5>
                  <p>medium.com • 5 days ago</p>
                </div>
                <button className="btn-icon">
                  <img src="/assets/reload-icon.svg" alt="Reload" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-input">
          <textarea 
            className="article-text-field" 
            placeholder="Paste the full article text here..."
            rows="10"
          ></textarea>
          <div className="text-controls">
            <div className="word-count">
              <span className="current-count">0</span> words
            </div>
            <button className="btn-secondary clear-btn">Clear Text</button>
          </div>
        </div>
        
        <div className="upload-input">
          <div className="upload-area">
            <div className="upload-icon">
              <img src="/assets/upload-icon.svg" alt="Upload" />
            </div>
            <h4>Drag & Drop File</h4>
            <p>or</p>
            <button className="btn-secondary browse-btn">Browse Files</button>
            <p className="upload-note">Supported formats: PDF, DOCX, TXT (Max 10MB)</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="summary-options">
      <h3>Summarization Options</h3>
      
      <div className="options-grid">
        <div className="option-group">
          <label>Summary Length</label>
          <div className="radio-buttons">
            <label className="radio-label">
              <input type="radio" name="length" value="brief" />
              <span>Brief</span>
              <span className="hint">~10% of original</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="length" value="standard" checked />
              <span>Standard</span>
              <span className="hint">~25% of original</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="length" value="detailed" />
              <span>Detailed</span>
              <span className="hint">~40% of original</span>
            </label>
          </div>
        </div>
        
        <div className="option-group">
          <label>Summary Style</label>
          <div className="radio-buttons">
            <label className="radio-label">
              <input type="radio" name="style" value="bullet" />
              <span>Bullet Points</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="style" value="paragraph" checked />
              <span>Paragraphs</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="style" value="outline" />
              <span>Outline</span>
            </label>
          </div>
        </div>
        
        <div className="option-group">
          <label>Include</label>
          <div className="checkbox-options">
            <label className="checkbox-label">
              <input type="checkbox" checked />
              <span>Key Points</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" checked />
              <span>Main Arguments</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Statistics & Data</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Discussion Questions</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="summarize-action">
        <button className="btn-primary btn-large summarize-btn">
          <div className="btn-icon">
            <img src="/assets/summarize-icon.svg" alt="Summarize" />
          </div>
          <span>Summarize Article</span>
        </button>
      </div>
    </div>
  </div>
</section>
```

![Article Input Mockup](https://example.com/mockups/article-input.jpg)

*Design Notes: The input section provides multiple ways to input content with a clean tab interface. The summarization options are clearly presented with intuitive controls.*

## Article Preview Section

```jsx
<section className="article-preview-section">
  <div className="container">
    <div className="preview-container">
      <div className="preview-header">
        <h3>Article Preview</h3>
        <div className="article-meta">
          <div className="meta-item">
            <img src="/assets/source-icon.svg" alt="Source" />
            <span>TechCrunch</span>
          </div>
          <div className="meta-item">
            <img src="/assets/calendar-icon.svg" alt="Date" />
            <span>June 15, 2025</span>
          </div>
          <div className="meta-item">
            <img src="/assets/time-icon.svg" alt="Read Time" />
            <span>12 min read</span>
          </div>
          <div className="meta-item">
            <img src="/assets/word-icon.svg" alt="Word Count" />
            <span>2,450 words</span>
          </div>
        </div>
      </div>
      
      <div className="article-content">
        <h2 className="article-title">The Future of Remote Work: How AI is Transforming Distributed Teams</h2>
        
        <div className="article-excerpt">
          <p>The landscape of remote work has evolved dramatically since the global shift in 2020. What began as a temporary solution has become a permanent fixture in the modern workplace. According to recent studies, over 70% of companies now offer some form of remote work option, with 30% moving to fully distributed models.</p>
          
          <p>This transformation has been accelerated by advancements in artificial intelligence tools designed specifically for remote collaboration. From AI meeting assistants that can transcribe, summarize, and extract action items from virtual meetings to sophisticated project management systems that can predict bottlenecks before they occur, technology is addressing the traditional pain points of distributed teams.</p>
          
          <p className="excerpt-fade">However, these technological solutions bring their own challenges. Companies must navigate concerns about data privacy, the potential for AI bias, and the delicate balance between helpful automation and intrusive surveillance. Additionally, as AI takes over routine tasks, remote workers must adapt by developing skills that complement rather than compete with automated systems...</p>
        </div>
        
        <div className="article-truncated">
          <div className="truncated-indicator">
            <div className="indicator-line"></div>
            <div className="indicator-text">Article continues (2,100 more words)</div>
            <div className="indicator-line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

![Article Preview Mockup](https://example.com/mockups/article-preview.jpg)

*Design Notes: The article preview section shows a snippet of the original article with metadata and a clear indication that it's been truncated. The design is clean and focused on readability.*

## Summarization Process Section

```jsx
<section className="summarization-process-section">
  <div className="container">
    <div className="process-container">
      <div className="process-animation">
        <div className="animation-graphic">
          <img src="/assets/summarization-animation.svg" alt="Summarization Process" className="animated" />
        </div>
      </div>
      
      <div className="process-steps">
        <div className="process-step completed">
          <div className="step-indicator">
            <div className="indicator-icon">✓</div>
          </div>
          <div className="step-details">
            <h4>Analyzing article structure</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="process-step completed">
          <div className="step-indicator">
            <div className="indicator-icon">✓</div>
          </div>
          <div className="step-details">
            <h4>Identifying key concepts</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="process-step active">
          <div className="step-indicator">
            <div className="indicator-icon pulse"></div>
          </div>
          <div className="step-details">
            <h4>Generating concise summary</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="process-step">
          <div className="step-indicator">
            <div className="indicator-icon">4</div>
          </div>
          <div className="step-details">
            <h4>Extracting key points</h4>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '0%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

![Summarization Process Mockup](https://example.com/mockups/summarization-process.jpg)

*Design Notes: The summarization process section provides visual feedback during the AI processing with an engaging animation and clear progress indicators.*

## Summary Results Section

```jsx
<section className="summary-results-section">
  <div className="container">
    <div className="results-container">
      <div className="results-header">
        <h3>Article Summary</h3>
        <div className="results-actions">
          <button className="btn-icon">
            <img src="/assets/copy-icon.svg" alt="Copy" />
          </button>
          <button className="btn-icon">
            <img src="/assets/download-icon.svg" alt="Download" />
          </button>
          <button className="btn-icon">
            <img src="/assets/share-icon.svg" alt="Share" />
          </button>
        </div>
      </div>
      
      <div className="summary-content">
        <h2 className="summary-title">The Future of Remote Work: How AI is Transforming Distributed Teams</h2>
        
        <div className="summary-text">
          <p>Remote work has evolved from a temporary solution to a permanent workplace model, with 70% of companies now offering remote options and 30% becoming fully distributed. This shift has been accelerated by AI tools designed for remote collaboration, including meeting assistants that transcribe and summarize virtual meetings, and project management systems that predict potential bottlenecks.</p>
          
          <p>While these AI solutions enhance productivity, they present challenges related to data privacy, potential bias, and the balance between automation and surveillance. As AI handles routine tasks, remote workers must develop complementary skills rather than competing with automated systems.</p>
          
          <p>The most successful remote-first companies are those that combine AI tools with strong human-centered policies. These organizations focus on clear communication protocols, results-based performance metrics rather than activity monitoring, and regular in-person gatherings to build team cohesion.</p>
        </div>
        
        <div className="key-points">
          <h4>Key Points</h4>
          <ul className="points-list">
            <li>70% of companies now offer remote work options, with 30% fully distributed</li>
            <li>AI meeting assistants and project management tools are addressing traditional remote work challenges</li>
            <li>Companies must balance AI implementation with data privacy and surveillance concerns</li>
            <li>Workers need to develop skills that complement rather than compete with AI</li>
            <li>Successful remote-first companies combine AI tools with human-centered policies</li>
          </ul>
        </div>
        
        <div className="discussion-questions">
          <h4>Discussion Questions</h4>
          <ol className="questions-list">
            <li>How can companies implement AI tools while respecting employee privacy?</li>
            <li>What skills will be most valuable for remote workers as AI automation increases?</li>
            <li>How might the balance between in-office and remote work evolve over the next five years?</li>
          </ol>
        </div>
      </div>
      
      <div className="summary-stats">
        <div className="stat-item">
          <div className="stat-value">612</div>
          <div className="stat-label">Words</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">25%</div>
          <div className="stat-label">Of Original</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">3:05</div>
          <div className="stat-label">Read Time</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">5</div>
          <div className="stat-label">Key Points</div>
        </div>
      </div>
    </div>
    
    <div className="summary-actions">
      <div className="action-buttons">
        <button className="btn-secondary">
          <img src="/assets/regenerate-icon.svg" alt="Regenerate" />
          <span>Regenerate</span>
        </button>
        <button className="btn-secondary">
          <img src="/assets/expand-icon.svg" alt="Expand" />
          <span>Make Longer</span>
        </button>
        <button className="btn-secondary">
          <img src="/assets/shorten-icon.svg" alt="Shorten" />
          <span>Make Shorter</span>
        </button>
        <button className="btn-secondary">
          <img src="/assets/simplify-icon.svg" alt="Simplify" />
          <span>Simplify</span>
        </button>
      </div>
      
      <div className="save-action">
        <button className="btn-primary btn-large">
          <img src="/assets/save-icon.svg" alt="Save" />
          <span>Save to My Summaries</span>
        </button>
      </div>
    </div>
  </div>
</section>
```

![Summary Results Mockup](https://example.com/mockups/summary-results.jpg)

*Design Notes: The summary results section presents the AI-generated summary in a clean, readable format with clear sections for the main summary, key points, and discussion questions. The action buttons allow for easy refinement of the summary.*

## Related Summaries Section

```jsx
<section className="related-summaries-section">
  <div className="container">
    <div className="section-header">
      <h3>Related Summaries</h3>
      <button className="btn-text">View All</button>
    </div>
    
    <div className="summaries-grid">
      <div className="summary-card">
        <div className="card-header">
          <div className="source-badge">Harvard Business Review</div>
          <div className="date">June 10, 2025</div>
        </div>
        <h4>The Hybrid Work Model: Finding the Right Balance</h4>
        <p>An analysis of how companies are structuring hybrid work policies and the impact on productivity and employee satisfaction.</p>
        <div className="card-footer">
          <div className="stats">
            <span>5 min read</span>
            <span>•</span>
            <span>Standard Summary</span>
          </div>
          <button className="btn-icon">
            <img src="/assets/arrow-right-icon.svg" alt="View" />
          </button>
        </div>
      </div>
      
      <div className="summary-card">
        <div className="card-header">
          <div className="source-badge">MIT Technology Review</div>
          <div className="date">June 5, 2025</div>
        </div>
        <h4>AI Collaboration Tools: The New Workplace Essential</h4>
        <p>How artificial intelligence is being integrated into workplace collaboration tools and changing team dynamics.</p>
        <div className="card-footer">
          <div className="stats">
            <span>3 min read</span>
            <span>•</span>
            <span>Brief Summary</span>
          </div>
          <button className="btn-icon">
            <img src="/assets/arrow-right-icon.svg" alt="View" />
          </button>
        </div>
      </div>
      
      <div className="summary-card">
        <div className="card-header">
          <div className="source-badge">Forbes</div>
          <div className="date">May 28, 2025</div>
        </div>
        <h4>Remote Work Security: Protecting Distributed Teams</h4>
        <p>Best practices for maintaining cybersecurity in remote and hybrid work environments as threats continue to evolve.</p>
        <div className="card-footer">
          <div className="stats">
            <span>4 min read</span>
            <span>•</span>
            <span>Standard Summary</span>
          </div>
          <button className="btn-icon">
            <img src="/assets/arrow-right-icon.svg" alt="View" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

![Related Summaries Mockup](https://example.com/mockups/related-summaries.jpg)

*Design Notes: The related summaries section shows other articles the user might be interested in, presented in a clean card layout with key information about each summary.*

## CSS Styling for Article Summarization

```css
/* Article Summarization Specific Styles */

/* Header Styles */
.summary-header {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
  color: white;
  padding: var(--spacing-2xl) 0;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
}

.summary-header-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.summary-header-content h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.summary-description {
  font-size: 1.25rem;
  opacity: 0.9;
}

/* Input Section Styles */
.input-container {
  background-color: var(--background-alt);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.input-tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--spacing-lg);
}

.input-tab {
  padding: var(--spacing-md) var(--spacing-lg);
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}

.input-tab.active {
  color: var(--primary-color);
}

.input-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.input-content > div {
  display: none;
}

.input-content > div.active {
  display: block;
}

.input-field-container {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.url-field {
  flex: 1;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
}

.fetch-btn {
  white-space: nowrap;
}

.recent-urls h4 {
  font-size: 1rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-light);
}

.history-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  background-color: var(--background);
}

.history-icon {
  margin-right: var(--spacing-md);
}

.history-content {
  flex: 1;
}

.history-content h5 {
  margin: 0;
  font-size: 1rem;
}

.history-content p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-light);
}

.article-text-field {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  resize: vertical;
  font-family: var(--font-primary);
}

.text-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-md);
}

.word-count {
  font-size: 0.875rem;
  color: var(--text-light);
}

.upload-area {
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-2xl);
  text-align: center;
}

.upload-icon {
  margin-bottom: var(--spacing-md);
}

.upload-area h4 {
  margin-bottom: var(--spacing-sm);
}

.upload-note {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: var(--spacing-md);
}

/* Summary Options Styles */
.summary-options {
  background-color: var(--background);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  border: 1px solid var(--border-color);
}

.summary-options h3 {
  margin-bottom: var(--spacing-lg);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.option-group label {
  display: block;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.radio-buttons, .checkbox-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.radio-label, .checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-label input, .checkbox-label input {
  margin-right: var(--spacing-sm);
}

.hint {
  font-size: 0.75rem;
  color: var(--text-light);
  margin-left: var(--spacing-sm);
}

.summarize-action {
  text-align: center;
  margin-top: var(--spacing-xl);
}

.summarize-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
}

/* Add more specific styles for other sections */
```

## Responsive Design for Article Summarization

```css
/* Responsive Styles for Article Summarization */

@media (max-width: 1024px) {
  .options-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .summaries-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .summary-header-content h1 {
    font-size: 2.5rem;
  }
  
  .summary-description {
    font-size: 1.125rem;
  }
  
  .input-field-container {
    flex-direction: column;
  }
  
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .process-container {
    flex-direction: column;
  }
  
  .process-animation {
    margin-bottom: var(--spacing-xl);
  }
  
  .summary-actions .action-buttons {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .summaries-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .summary-header-content h1 {
    font-size: 2rem;
  }
  
  .input-tabs {
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .summary-actions .action-buttons {
    grid-template-columns: 1fr;
  }
  
  .summary-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Image Requirements for Article Summarization

1. **Interface Icons**
   - Article/document icon
   - Source icon
   - Calendar icon
   - Time/clock icon
   - Word count icon
   - Copy, download, and share icons
   - Regenerate, expand, shorten, and simplify icons

2. **Process Animation**
   - Animated illustration showing the summarization process
   - Visual representation of text being condensed
   - Progress indicators

3. **Upload Area**
   - Upload icon
   - File type indicators

4. **Source Badges**
   - Recognizable publication logos or generic source indicators
