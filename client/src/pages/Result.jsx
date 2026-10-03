import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const { score, totalQuestions, questions, selectedAnswers } = location.state;

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center px-4 py-8 sm:px-6">
      <div className="w-full max-w-lg">
        {/* Result Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-center">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-2xl bg-blue-100">
            <span className="text-3xl sm:text-4xl">🎉</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Quiz Completed!
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mb-8">
            Great job! Here is your quiz performance.
          </p>

          {/* Score */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-5">
            <p className="text-sm font-medium text-blue-600 mb-2">Your Score</p>

            <p className="text-4xl sm:text-5xl font-bold text-slate-900">
              {score}
            </p>

            <p className="text-sm sm:text-base font-medium text-slate-500 mt-1">
              out of {totalQuestions}
            </p>
          </div>

          {/* Percentage */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm sm:text-base text-slate-500">
              Percentage:
            </span>

            <span className="text-lg sm:text-xl font-bold text-blue-600">
              {percentage}%
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* Review */}
            <button
              type="button"
              onClick={() =>
                navigate("/review", {
                  state: {
                    questions,
                    selectedAnswers,
                  },
                })
              }
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-6
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
              <span>📋</span>
              Review Answers
            </button>

            {/* Home */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-xl
                bg-white
                text-slate-700
                font-semibold
                text-sm sm:text-base
                border-2
                border-slate-200
                transition-all
                duration-300
                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-600
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

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-slate-400 mt-5">
          ✨ Keep practicing and improve your interview skills.
        </p>
      </div>
    </div>
  );
}

export default Result;
