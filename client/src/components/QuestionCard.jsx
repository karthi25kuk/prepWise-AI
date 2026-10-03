function QuestionCard({ question, options, answer, setAnswer }) {
  return (
    <div className="w-full">

      {/* Question */}
      <div className="mb-7">
        <div className="flex items-start gap-3">

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-slate-900">
            {question}
          </h3>
        </div>
        
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {options.map((item, index) => {
          const isSelected = answer === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setAnswer(item)}
              className={`
                group
                relative
                w-full
                min-h-[72px]
                p-4 sm:p-5
                rounded-2xl
                border-2
                text-left
                transition-all
                duration-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-0.5"
                }
              `}
            >
              <div className="flex items-center gap-4">

                {/* Option Letter */}
                <div
                  className={`
                    flex-shrink-0
                    w-9 h-9
                    rounded-lg
                    flex items-center justify-center
                    font-bold
                    text-sm
                    ${
                      isSelected
                        ? "bg-white text-blue-600"
                        : "bg-white text-blue-600 shadow-sm"
                    }
                  `}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                {/* Option Text */}
                <span className="flex-1 text-sm sm:text-base font-medium">
                  {item}
                </span>

                {/* Selected Tick */}
                {isSelected && (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-blue-600 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                )}

              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default QuestionCard;