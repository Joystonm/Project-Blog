// Frontend: src/components/ContentGenerator.jsx
import React, { useState } from "react";
import { generateContent } from "../utils/generate";

const ContentGenerator = () => {
  const [userStyle, setUserStyle] = useState("");
  const [topic, setTopic] = useState("");
  const [personalityTraits, setPersonalityTraits] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateContent(userStyle, topic, personalityTraits);
      setGeneratedContent(result);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(generatedContent)
      .then(() => {
        alert("Content copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <h2>Generate Content in Your Style</h2>
      <textarea
        rows={6}
        placeholder="Write some sample text to train the AI"
        value={userStyle}
        onChange={(e) => setUserStyle(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="text"
        placeholder="What do you want to write about?"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <textarea
        rows={4}
        placeholder="Describe your personality (optional, e.g., formal, humorous, analytical)"
        value={personalityTraits}
        onChange={(e) => setPersonalityTraits(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
      {generatedContent && (
        <div style={{ marginTop: 20 }}>
          <h4>Generated Content:</h4>
          <p>{generatedContent}</p>
          <button onClick={handleCopy} style={{ marginTop: 10 }}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
