// Frontend: src/utils/generate.js
export async function generateContent(userStyle, topic, personalityTraits) {
    try {
      const response = await fetch("http://localhost:8000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userStyle, topic, personalityTraits }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content");
      }
  
      return data.content;
    } catch (error) {
      console.error("Error calling generate API:", error);
      throw error;
    }
  }
  