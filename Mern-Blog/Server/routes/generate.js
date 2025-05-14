// const express = require("express");
// const { default: ModelClient, isUnexpected } = require("@azure-rest/ai-inference");
// const { AzureKeyCredential } = require("@azure/core-auth");

// const router = express.Router();

// const token = process.env["GITHUB_TOKEN_1"];
// const endpoint = "https://models.github.ai/inference";
// const model = "openai/gpt-4.1";

// // POST /api/generate
// router.post("/", async (req, res) => {  // Change to "/" for correct path under /api/generate
//   const { userStyle, topic } = req.body;

//   if (!userStyle || !topic) {
//     return res.status(400).json({ error: "userStyle and topic are required" });
//   }

//   const client = ModelClient(endpoint, new AzureKeyCredential(token));

//   try {
//     const response = await client.path("/chat/completions").post({
//       body: {
//         messages: [
//           {
//             role: "system",
//             content: "You are an AI trained to mimic the user's writing style.",
//           },
//           {
//             role: "user",
//             content: `Here is a sample of their writing style:\n${userStyle}\n---\nNow write a new article about: "${topic}" in the same tone and style.`,
//           },
//         ],
//         temperature: 0.7,
//         top_p: 1,
//         model: model,
//       },
//     });

//     if (isUnexpected(response)) {
//       console.error("Unexpected API response:", response.body);
//       return res.status(500).json({ error: "Unexpected API response" });
//     }

//     const result = response.body.choices[0].message.content;
//     res.json({ content: result });
//   } catch (error) {
//     console.error("API Error:", error);
//     res.status(500).json({ error: "Failed to generate content" });
//   }
// });

// module.exports = router;



const express = require("express");
const { default: ModelClient, isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");

const router = express.Router();

const token = process.env["GITHUB_TOKEN_1"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

// POST /api/generate
router.post("/", async (req, res) => {  
  const { userStyle, topic, personalityTraits } = req.body;

  if (!userStyle || !topic) {
    return res.status(400).json({ error: "userStyle and topic are required" });
  }

  // If personality traits are provided, ensure they are integrated into the prompt
  const personalityContext = personalityTraits || "The user is a thoughtful and analytical writer who prefers a formal tone.";

  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  try {
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          {
            role: "system",
            content: `You are an AI trained to mimic the user's writing style and personality. Your task is to write in the same tone and personality as the user, taking into account the following personality traits: ${personalityContext}.`,
          },
          {
            role: "user",
            content: `Here is a sample of their writing style:\n${userStyle}\n---\nNow write a new article about: "${topic}" in the same tone and style, and ensure it reflects their personality as well.`,
          },
        ],
        temperature: 0.7,
        top_p: 1,
        model: model,
      },
    });

    if (isUnexpected(response)) {
      console.error("Unexpected API response:", response.body);
      return res.status(500).json({ error: "Unexpected API response" });
    }

    const result = response.body.choices[0].message.content;
    res.json({ content: result });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

module.exports = router;
