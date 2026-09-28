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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
            <div className="text-3xl">🧠</div>
            <h1 className="text-3xl font-bold">PrepWise AI</h1>
        </div>

        <CategorySelector
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        {category && (
          <SubtopicSelector
            category={category}
            subtopic={subtopic}
            setSubtopic={setSubtopic}
            subtopics={subtopics}
          />
        )}
        {subtopic && concepts.length > 0 && (
          <ConceptSelector
            category={category}
            subtopic={subtopic}
            concept={concept}
            setConcept={setConcept}
            concepts={concepts}
          />
        )}
        {subtopic && (concept || concepts.length === 0) && (
          <DifficultySelector
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            difficulties={difficulties}
          />
        )}
        {difficulty && (
          <QuestionCountSelector
            questionCount={questionCount}
            setQuestionCount={setQuestionCount}
            questionCounts={questionCounts}
          />
        )}
        <GenerateButton
          category={category}
          subtopic={subtopic}
          hasConcepts={concepts.length > 0}
          concept={concept}
          difficulty={difficulty}
          questionCount={questionCount}
        />
      </div>
    </div>
  );
}

export default GenerateQuiz;
