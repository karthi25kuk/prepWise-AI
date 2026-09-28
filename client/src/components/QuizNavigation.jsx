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
    <div className="flex justify-between mt-4">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default QuizNavigation;