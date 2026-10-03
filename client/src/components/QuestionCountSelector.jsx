function QuestionCountSelector({
  questionCount,
  setQuestionCount,
  questionCounts,
}) {
  return (
    <div className="mt-8 sm:mt-10">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Number of Questions
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Choose how many questions you want in your quiz.
        </p>
      </div>

      {/* Question Count Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

        {questionCounts.map((count) => {
          const isSelected = questionCount === count.value;

          return (
            <button
              key={count.value}
              type="button"
              onClick={() => setQuestionCount(count.value)}
              className={`
                group
                w-full
                rounded-2xl
                px-4
                py-4
                border-2
                text-center
                transition-all
                duration-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1"
                }
              `}
            >
              <div
                className={`
                  text-xl sm:text-2xl font-bold mb-1
                  ${
                    isSelected
                      ? "text-white"
                      : "text-blue-600"
                  }
                `}
              >
                {count.value}
              </div>

              <h3 className="text-sm font-semibold">
                {count.label}
              </h3>

            </button>
          );
        })}

      </div>
    </div>
  );
}

export default QuestionCountSelector;

