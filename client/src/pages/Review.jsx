import React from "react";
import { useLocation } from "react-router-dom";

function Review() {
    const location = useLocation();
    const { questions, selectedAnswers } = location.state;

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4">Review Page</h1>
                <p className="text-gray-700">This is the review page where users can review their answers.</p>
            </div>

            <div className="mt-8 w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Question Review</h2>
                {questions.map((question, index) => (
                    <div key={index} className="mb-6">
                        <p className="text-lg font-semibold">{question.question}</p>
                        <p className="text-gray-700">Your Answer: {selectedAnswers[index]}</p>
                        <p className="text-green-500">Correct Answer: {question.correctAnswer}</p>
                        <p className="text-blue-500">Explanation: {question.explanation}</p>
                    </div>
                ))}
            </div>

        </div>

    );
}
export default Review;