import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import QuizNavigation from "../components/QuizNavigation";

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const { questions, category } = location.state;

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

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Quiz Header */}
        <div className="mb-6">
          <QuizHeader category={category} />
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5 mb-6">
          <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-8 lg:p-10">
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            answer={selectedAnswers[currentQuestionIndex]}
            setAnswer={handleAnswerSelect}
          />

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <QuizNavigation
              onNext={handleNext}
              onPrevious={handlePrevious}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onSubmit={handleSubmit}
            />
          </div>
        </div>

      </main>
    </div>
  );
}

export default Quiz;