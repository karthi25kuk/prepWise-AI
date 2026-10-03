import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const location = useLocation();
  const navigate = useNavigate();

  const { questions, selectedAnswers } = location.state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-4 py-8 sm:px-6 sm:py-10">

      <div className="w-full max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 shadow-lg mb-4">
            <span className="text-3xl sm:text-4xl">📋</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Review Your Answers
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Check your answers, correct answers, and explanations.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-5 sm:space-y-6">

          {questions.map((question, index) => {
            const isCorrect =
              selectedAnswers[index] === question.correctAnswer;

            const isNotAnswered = !selectedAnswers[index];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-5 sm:p-7"
              >

                {/* Question Header */}
                <div className="flex items-start gap-3 mb-5">

                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-slate-900">
                    {question.question}
                  </h2>

                </div>

                {/* Your Answer */}
                <div className="mb-4">
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-1">
                    Your Answer
                  </p>

                  <p
                    className={`
                      text-sm sm:text-base font-medium
                      ${
                        isNotAnswered
                          ? "text-slate-400"
                          : "text-slate-800"
                      }
                    `}
                  >
                    {selectedAnswers[index] || "Not answered"}
                  </p>
                </div>

                {/* Result */}
                <div
                  className={`
                    rounded-xl px-4 py-3 mb-4 border
                    ${
                      isCorrect
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }
                  `}
                >
                  <p
                    className={`
                      text-sm sm:text-base font-semibold
                      ${
                        isCorrect
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    `}
                  >
                    {isCorrect ? "✓ Correct Answer" : "✗ Incorrect Answer"}
                  </p>
                </div>

                {/* Correct Answer */}
                {!isCorrect && (
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-1">
                      Correct Answer
                    </p>

                    <p className="text-sm sm:text-base font-semibold text-green-600">
                      {question.correctAnswer}
                    </p>
                  </div>
                )}

                {/* Explanation */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-1">
                    💡 Explanation
                  </p>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">

          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              w-full sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              px-7
              py-3.5
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              text-sm sm:text-base
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:bg-blue-700
              hover:-translate-y-0.5
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
            "
          >
            <span>🏠</span>
            Go to Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default Review;