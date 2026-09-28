import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import QuizNavigation from "../components/QuizNavigation";

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const navigate = useNavigate();

  const questions = [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["return", "def", "lambda", "function"],
      correctAnswer: "def",
      explanation: "The def keyword is used to define a function in Python.",
    },
    {
      question: "Which data structure follows the FIFO principle?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correctAnswer: "Queue",
      explanation: "A queue follows the First In, First Out (FIFO) principle.",
    },
    {
      question: "Which protocol is used to securely transfer web pages?",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      correctAnswer: "HTTPS",
      explanation:
        "HTTPS securely transfers web pages using encryption through TLS.",
    },
  ];

  const handleAnswerSelect = (selectedOption) => {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = selectedOption;
      return updated;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        score: score,
        totalQuestions: questions.length,
        questions: questions,
        selectedAnswers: selectedAnswers,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex flex-col items-center">
        <QuizHeader category="Aptitude" />
      </div>

      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />

      <div className="flex flex-col items-center">
        <QuestionCard
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          answer={selectedAnswers[currentQuestionIndex]}
          setAnswer={handleAnswerSelect}
        />
      </div>

      <div className="flex flex-col items-center">
        <QuizNavigation
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Quiz;
