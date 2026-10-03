const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Groq = require("groq-sdk");

const app = express();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PrepWise AI Backend Running");
});

app.post("/generate", async (req, res) => {
  try {
    const { category, subtopic, concept, difficulty, questionCount } = req.body;

    const prompt = `
Generate ${questionCount} interview quiz questions.

Category: ${category}
Subtopic: ${subtopic}
Concept: ${concept || "General"}
Difficulty: ${difficulty}

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.
Do not add any text before or after the JSON.

The JSON must have this exact structure:

{
  "questions": [
    {
      "question": "Question text",
      "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correctAnswer": "One of the four options exactly",
      "explanation": "Short explanation of the correct answer"
    }
  ]
}

Rules:
- Generate exactly ${questionCount} questions.
- Each question must have exactly 4 options.
- Only one option must be correct.
- correctAnswer must exactly match one option.
- Questions must match the selected category, subtopic, concept and difficulty.
- Return one complete JSON object.
- Do not stop before completing the JSON.
- Do not include newline characters inside string values.
- Do not use double quotes inside any string value unless properly escaped.
- Return nothing except the JSON object.
`;

    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 4000,
    });

    const aiResponse = response.choices[0].message.content;

    const quizData = JSON.parse(aiResponse);

    if (
      !quizData.questions ||
      !Array.isArray(quizData.questions) ||
      quizData.questions.length === 0
    ) {
      throw new Error("Invalid quiz data received from AI");
    }

    quizData.questions.forEach((question) => {
      if (
        !question.question ||
        !Array.isArray(question.options) ||
        question.options.length !== 4 ||
        !question.correctAnswer ||
        !question.explanation
      ) {
        throw new Error("Invalid question format received from AI");
      }

      if (!question.options.includes(question.correctAnswer)) {
        throw new Error("Correct answer does not match an option");
      }
    });

    res.json(quizData);
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      message: "Failed to generate quiz",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
