function QuizNavigation({
  onNext,
  onPrevious,
  currentQuestionIndex,
  totalQuestions,
  onSubmit,
}) {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="flex items-center justify-between gap-3">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          px-4 sm:px-6
          py-3
          rounded-xl
          border-2
          border-slate-200
          bg-white
          text-slate-700
          font-semibold
          text-sm sm:text-base
          transition-all
          duration-300
          hover:border-blue-300
          hover:bg-blue-50
          hover:text-blue-600
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          disabled:opacity-40
          disabled:cursor-not-allowed
          disabled:hover:border-slate-200
          disabled:hover:bg-white
          disabled:hover:text-slate-700
        "
      >
        <span>←</span>
        <span>Previous</span>
      </button>

      {/* Next / Submit Button */}
      {isLastQuestion ? (
        <button
          type="button"
          onClick={onSubmit}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-5 sm:px-7
            py-3
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
          <span>Submit Quiz</span>
          <span>✓</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-5 sm:px-7
            py-3
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
          <span>Next</span>
          <span>→</span>
        </button>
      )}
    </div>
  );
}

export default QuizNavigation;