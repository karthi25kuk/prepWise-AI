import { useState, useEffect } from "react";
import quizData from "../data/quizData";
import difficulties from "../data/difficulties";
import questionCounts from "../data/questionCounts";
import CategorySelector from "../components/CategorySelector";
import SubtopicSelector from "../components/SubtopicSelector";
import ConceptSelector from "../components/ConceptSelector";
import DifficultySelector from "../components/DifficultySelector";
import QuestionCountSelector from "../components/QuestionCountSelector";
import GenerateButton from "../components/GenerateButton";

function GenerateQuiz() {
  const [category, setCategory] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [concept, setConcept] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState(5);

  useEffect(() => {
    setSubtopic("");
    setConcept("");
  }, [category]);

  useEffect(() => {
    setConcept("");
  }, [subtopic]);

  useEffect(() => {
    setDifficulty("");
  }, [category, subtopic, concept]);

  useEffect(() => {
    setQuestionCount(5);
  }, [category, subtopic, concept]);

  const categories = Object.keys(quizData);
  const subtopics = Object.keys(quizData[category] || {});
  const concepts = quizData[category]?.[subtopic] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 sm:px-6 py-8 sm:py-12">

      {/* Main Container */}
      <div className="w-full max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 shadow-lg mb-4">
            <span className="text-3xl sm:text-4xl">🧠</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Create Your Quiz
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
            Customize your interview practice and let AI generate
            questions tailored to your preparation.
          </p>
        </div>

        {/* Quiz Configuration Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10">

          {/* Section Header */}
          <div className="mb-7">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quiz Configuration
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Select your preferred topics and difficulty.
            </p>
          </div>

          {/* Category */}
          <div className="mb-5">
            <CategorySelector
              category={category}
              setCategory={setCategory}
              categories={categories}
            />
          </div>

          {/* Subtopic */}
          {category && (
            <div className="mb-5">
              <SubtopicSelector
                category={category}
                subtopic={subtopic}
                setSubtopic={setSubtopic}
                subtopics={subtopics}
              />
            </div>
          )}

          {/* Concept */}
          {subtopic && concepts.length > 0 && (
            <div className="mb-5">
              <ConceptSelector
                category={category}
                subtopic={subtopic}
                concept={concept}
                setConcept={setConcept}
                concepts={concepts}
              />
            </div>
          )}

          {/* Difficulty */}
          {subtopic && (concept || concepts.length === 0) && (
            <div className="mb-5">
              <DifficultySelector
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                difficulties={difficulties}
              />
            </div>
          )}

          {/* Question Count */}
          {difficulty && (
            <div className="mb-6">
              <QuestionCountSelector
                questionCount={questionCount}
                setQuestionCount={setQuestionCount}
                questionCounts={questionCounts}
              />
            </div>
          )}

          {/* Generate */}
          <GenerateButton
            category={category}
            subtopic={subtopic}
            hasConcepts={concepts.length > 0}
            concept={concept}
            difficulty={difficulty}
            questionCount={questionCount}
          />

        </div>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-slate-400 mt-6">
          ✨ Questions are generated using AI based on your selections.
        </p>

      </div>
    </div>
  );
}

export default GenerateQuiz;

