# PrepWise AI 🧠

**PrepWise AI** is an AI-powered interview preparation platform that generates personalized technical quizzes based on the user's selected category, topic, concept, difficulty level, and number of questions.

The project is designed to help students and job seekers practice technical interview questions and review their performance through instant scoring and detailed explanations.

## ✨ Features

* 🤖 **AI-Powered Question Generation** using Groq
* 📚 Category-based interview preparation
* 🗂️ Subtopic and concept selection
* 🎯 Multiple difficulty levels
* 🔢 Customizable number of questions
* 📝 Interactive multiple-choice quiz
* 📊 Real-time quiz progress
* ✅ Automatic answer validation
* 🎉 Score and percentage calculation
* 📋 Detailed answer review
* 💡 AI-generated explanations
* 📱 Responsive design for mobile, tablet, and desktop

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM

### Backend

* Node.js
* Express.js
* Groq SDK
* REST API

### AI

* Groq API
* `openai/gpt-oss-20b` model

### Development Tools

* Git
* GitHub
* VS Code

## 📂 Project Structure

prepWise-AI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── QuizHeader.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── QuizNavigation.jsx
│   │   │   ├── CategorySelector.jsx
│   │   │   ├── SubtopicSelector.jsx
│   │   │   ├── ConceptSelector.jsx
│   │   │   ├── DifficultySelector.jsx
│   │   │   ├── QuestionCountSelector.jsx
│   │   │   └── GenerateButton.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── GenerateQuiz.jsx
│   │   │   ├── Quiz.jsx
│   │   │   ├── Result.jsx
│   │   │   └── Review.jsx
│   │   │
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md


## 🔄 Application Workflow

Home
  ↓
Generate Quiz
  ↓
Select Category
  ↓
Select Subtopic
  ↓
Select Concept
  ↓
Select Difficulty
  ↓
Select Question Count
  ↓
Generate Quiz
  ↓
Groq AI
  ↓
Quiz
  ↓
Submit
  ↓
Result
  ├── Review Answers
  │      ↓
  │    Review
  │
  └── Go to Home

## ⚙️ How It Works

1. The user selects the desired interview category.
2. Available subtopics are displayed dynamically.
3. Depending on the selected subtopic, available concepts are displayed.
4. The user selects a difficulty level and question count.
5. The frontend sends the configuration to the Express backend.
6. The backend creates a structured prompt based on the selections.
7. Groq generates the requested interview questions.
8. The backend validates the AI response.
9. Valid questions are returned to the React frontend.
10. The user completes the quiz.
11. The application calculates the score automatically.
12. The user can review answers and explanations.

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory:


GROQ_API_KEY=your_groq_api_key


**Never commit your `.env` file or API key to GitHub.**

## 🚀 Installation & Setup

### 1. Clone the repository


git clone https://github.com/karthi25kuk/prepWise-AI.git
cd prepWise-AI

### 2. Install frontend dependencies


cd client
npm install


### 3. Install backend dependencies

Open another terminal:

cd server
npm install


### 4. Configure environment variables

Inside `server/.env`:


GROQ_API_KEY=your_groq_api_key


### 5. Start the backend

From the `server` directory:

node server.js


The backend runs on:

http://localhost:5000


### 6. Start the frontend

From the `client` directory:

npm run dev


The frontend will be available at the Vite development URL shown in the terminal, typically:


http://localhost:5173

## 📡 API

### Generate Quiz

**Endpoint:**

POST /generate

### Request

{
  "category": "Programming",
  "subtopic": "Python",
  "concept": "OOP",
  "difficulty": "Medium",
  "questionCount": 5
}

### Response

{
  "questions": [
    {
      "question": "What is inheritance in Python?",
      "options": [
        "Creating a new class from an existing class",
        "Creating multiple objects",
        "Deleting a class",
        "Defining a variable"
      ],
      "correctAnswer": "Creating a new class from an existing class",
      "explanation": "Inheritance allows a class to derive properties and methods from another class."
    }
  ]
}


## 🛡️ AI Response Validation

The backend validates the generated response before sending it to the frontend.

It checks:

* Questions array exists
* Correct question structure
* Exactly four options
* Correct answer exists
* Correct answer matches one of the options
* Explanation exists

This helps prevent malformed AI responses from breaking the quiz interface.

## 🎨 UI Design

PrepWise AI uses a modern responsive interface with:

* Dark blue/indigo gradient backgrounds
* White content cards
* Blue accent colors
* Rounded components
* Hover and focus states
* Responsive layouts
* Mobile-friendly controls

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile phones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

## 🔮 Future Enhancements

Possible future improvements include:

* User authentication
* Quiz history
* Database storage
* Personalized performance dashboard
* Difficulty recommendation based on previous performance
* Timed quizzes
* More interview categories
* Question bookmarking
* Leaderboards
* Deployment with a production AI backend

## 👨‍💻 Author

**Karthikeyan K**

Electronics and Communication Engineering Student

---

⭐ If you find this project useful, consider giving the repository a star!
